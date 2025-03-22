import { defineStore } from "pinia";

import { ref, reactive, watchEffect } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";
import TextFormatterService from "../services/TextFormatterService";
import ModalServices from "../services/ModalServices";
import moment from "moment";

import { UseUserStore } from "../stores/UseUserStore";

export const UseEventStore = defineStore("EventStore", () => {
  const UserStore = UseUserStore();

  let date = ref(new Date());

  const isScrollable = ref(false); // Nueva variable para manejar el scroll

 // Función para formatear fechas en 'YYYY-MM-DD'
 const formatDateYMD = (date) => (date ? moment(date).format("YYYY-MM-DD") : "");

  //objeto de modal
  const modal = reactive({
    mostrar: false,
    animar: false,
  });
  //objeto modo para editar
  let editMode = ref();

  const arrayEvents = ref([]);

  const objectEvent = reactive({
    id: "",
    event_name: "",
    date: formatDateYMD(date.value),
    location: "",
    time: "",
    description: "",
    user_id: "",
  });

  // 📌 Sincronización automática entre `date` y `objectEvent.date`
  watchEffect(() => {
    objectEvent.date = formatDateYMD(date.value);
  });
   
  const stateAlert = reactive({
    Message: "",
    showAlert: false,
    classAlert: "",
  });

  //Todos los eventos
  const getEvent = async () => {
    const token = APIService.authToken();

    try {
      const { data } = await APIService.getEvents(token);
      // Formatear las fechas antes de asignar los datos a arrayEvents.value
      arrayEvents.value = data.data

    } catch (error) {
      console.error("Error al leer Eventos:", error.message);
    }
  };

  
  
  
  //Mostrar modal
  const show_modal = (ModalType) => {
    if (ModalType === "modal_new_registration") {
      ModalServices.show(modal);
      editMode.value = false;
    } else {
      ModalServices.show(modal);
      editMode.value = true;
    }
  };
  
  //ocultar modal
  const hideModel = (ModalType) => {
    if (ModalType === "cerrarSinGuardarEvent") {
      ModalServices.hide(modal);
      restartEvent();
    } else {
      ModalServices.hide(modal);
    }
  };

  //buscar registro para mostrar en detalles de evento o poderlo traer para editar
  async function searchrecord(id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.bringEvent(id, token);
      const dataEvento = data.data;
      // Asignar datos a las propiedades relevantes
      objectEvent.id = dataEvento.id;
      objectEvent.event_name = dataEvento.event_name;
      objectEvent.location = dataEvento.location;
      const decodedDescription = TextFormatterService.decodeHTMLEntities(
        dataEvento.description
      )
        .replace(/<br\s*\/?>/g, "\n\n") //Convierte <br> a \n
        .replace(/\n{3,}/g, "\n\n"); // Evita más de dos saltos seguidos
      objectEvent.description = decodedDescription.trim();

      objectEvent.time = dataEvento.time;
      objectEvent.user_id = dataEvento.user_id;
      
      // Formatear las fechas antes de asignarlas
      date.value = moment(dataEvento.date, "YYYY-MM-DD").isValid()
      ? moment(dataEvento.date, "YYYY-MM-DD").toDate()
      : null;
  
      // ✅ Verificar si la info es mayor a 645 caracteres para activar el scroll
      isScrollable.value = dataEvento.description.length > 210;
      

    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  }

  function formattedEvent(data) {
    // Formatear las fechas del nuevo evento
    return {
      ...data, // Mantiene el resto de los datos sin cambios
      date: formatDateYMD(data.date), // Convierte la fecha
    };
  }

  const eventUpdate = (id) => {
    searchrecord(id);
    show_modal("edit");
  };


  //Agregar Productos
  const addEvent = () => {
    objectEvent.user_id = UserStore.objectUser.id;
    const event_name =
      objectEvent.event_name == "" ? false : objectEvent.event_name;
    const date = objectEvent.date == "" ? false : objectEvent.date;
    const location = objectEvent.location == "" ? false : objectEvent.location;
    const time = objectEvent.time == "" ? false : objectEvent.time;
    const description =
      objectEvent.description == "" ? false : objectEvent.description;
    const id = objectEvent.id == "" ? false : true;

    if (!event_name || !date || !location || !time || !description) {
      stateAlert.Message =
        "¡Alerta! Debes llenar todos los campos requeridos antes de continuar.";
      stateAlert.showAlert = true;

      identifyTypeAlert("Error");

      setTimeout(() => {
        stateAlert.Message = "";
        stateAlert.showAlert = false;
        stateAlert.classAlert = "";
      }, 4000);
      return;
    }
    objectEvent.id ? updateEvent() : saveEvent();
    
    hideModel("Cerrar");
    restartEvent();
  };

  //identificar el tipo de Alerta
  function identifyTypeAlert(typeaAlert) {
    if (typeaAlert === "Error") {
      stateAlert.classAlert = "bg-red-600 text-white";
    } else {
      stateAlert.classAlert = "bg-green-600";
    }
  }

  async function saveEvent() {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.CreateEvent(objectEvent, token);
      // Formatear las fechas del nuevo evento
      arrayEvents.value.unshift(formattedEvent(data.data));
      // Crear una copia del array y agregarle el nuevo objeto
      const updatedArray = [format, ...arrayEvents.value];
      // arrayEvents.value = updatedArray;
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  }

  async function updateEvent() {
    const token = APIService.authToken();

    objectEvent.description = objectEvent.description
      .replace(/\r\n/g, "\n") // Normaliza saltos de línea de Windows (\r\n → \n)
      .replace(/\n{3,}/g, "\n\n"); // Mantiene máximo dos saltos seguidos

    // Convertir objectEvent a un objeto plano manualmente
    const objEvent = {
      ...objectEvent,
      date: typeof objectEvent.date === "string" ? objectEvent.date : objectEvent.date.date || "",
    };
    try {
      const { data } = await APIService.updateEvent(
        objEvent.id,
        objEvent,
        token
      );
      
      //el método findIndex en el array se utiliza para encontrar el índice del objeto en el lista category que tiene el mismo id
      const i = arrayEvents.value.findIndex(
        (event) => event.id === objEvent.id
      );
      const index = arrayEvents.value.findIndex((event) => event.id === objEvent.id);
      if (index !== -1) arrayEvents.value[index] = formattedEvent(data.data);

    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  }

  const eventDelete = (id) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este registro?")
    ) {
      remove(id);
    } else {
      console.log("Eliminación cancelada");
    }
  };

  //Eliminar registros
  async function remove(id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.deleteEvent(id, token);
      arrayEvents.value = arrayEvents.value.filter((Event) => Event.id !== id);
    } catch (error) {
      console.error("Error al leer categorías:", error.message);
    }
  }

  const restartEvent = () => {
    //  reiniciar el objeto para que no muestre los valores en los campos del formulario
    Object.assign(objectEvent, {
      id: "",
      event_name: "",
      date: formatDateYMD(date.value),
      location: "",
      time: "",
      description: "",
      user_id: "",
    });
  };

  return {
    modal,
    show_modal,
    hideModel,
    arrayEvents,
    getEvent,
    eventUpdate,
    date,
    objectEvent,
    addEvent,
    stateAlert,
    searchrecord,
    editMode,
    eventDelete,
    restartEvent,
    isScrollable,
  };
});
