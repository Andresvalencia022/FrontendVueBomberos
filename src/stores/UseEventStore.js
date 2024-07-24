import { defineStore } from "pinia";

import { ref, reactive, watch, toRaw } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";

import ModalServices from "../services/ModalServices";
import moment from "moment";

import { UseUserStore } from "../stores/UseUserStore";

export const UseEventStore = defineStore("EventStore", () => {
  const UserStore = UseUserStore();

  let start_date = ref(new Date());
  let end_date = ref(new Date());

  // Función para formatear la fecha a 'YYYY-MM-DD HH:mm:ss'
  function formatDate(date) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  }
  
  function formatDateYMD(date) {
    return moment(date).format("YYYY-MM-DD");
  }

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
    start_date: formatDate(start_date.value),
    end_date: formatDate(end_date.value),
    time: "",
    description: "",
    user_id: "",
  });

  // Observar cambios en start_date y actualizar start_date en objectEvent
  watch(start_date, (newValue) => {
    objectEvent.start_date = formatDate(newValue);
  });

  // Observar cambios en end_date y actualizar end_date en objectEvent
  watch(end_date, (newValue) => {
    objectEvent.end_date = formatDate(newValue);
  });

 
  function formattedEvent(data) {
     // Formatear las fechas del nuevo evento
     return {
      ...data,
      start_date: formatDateYMD(data.start_date),
      end_date: formatDateYMD(data.end_date),
    };
  }

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
      arrayEvents.value = data.data.map((event) => ({
        ...event,
        start_date: formatDateYMD(event.start_date),
        end_date: formatDateYMD(event.end_date),
      }));

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

  const eventUpdate = (id) => {
    searchrecord(id);
    show_modal("edit");
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
      objectEvent.description = dataEvento.description;
      objectEvent.time = dataEvento.time;
      objectEvent.user_id = dataEvento.user_id;
       // Formatear las fechas antes de asignarlas
      start_date.value = new Date(dataEvento.start_date);
      end_date.value = new Date(dataEvento.end_date);
      

    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  }

  //Agregar Productos
  const addEvent = () => {
    objectEvent.user_id = UserStore.objectUser.id;
    const event_name =
      objectEvent.event_name == "" ? false : objectEvent.event_name;
    const start_date =
      objectEvent.start_date == "" ? false : objectEvent.start_date;
    const end_date = objectEvent.end_date == "" ? false : objectEvent.end_date;
    const time = objectEvent.time == "" ? false : objectEvent.time;
    const description =
      objectEvent.description == "" ? false : objectEvent.description;
    const id = objectEvent.id == "" ? false : true;

    if (!event_name || !start_date || !end_date || !time || !description) {
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
    if (id) {
      updateEvent();
    } else {
      saveEvent();
    }
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
      const formattedEvent = formattedEvent(data.data);
        
       // Crear una copia del array y agregarle el nuevo objeto
      const updatedArray = [formattedEvent, ...arrayEvents.value];
      arrayEvents.value = updatedArray;
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  }

  async function updateEvent() {
    const token = APIService.authToken();
    // Convertir objectEvent a un objeto plano manualmente
    const objEvent = {
      id: objectEvent.id,
      event_name: objectEvent.event_name,
      start_date: objectEvent.start_date,
      end_date: objectEvent.end_date,
      time: objectEvent.time,
      description: objectEvent.description,
      user_id: objectEvent.user_id,
    };
    try {
      const { data } = await APIService.updateEvent(objEvent.id, objEvent,token);
      const format = formattedEvent(data.data);

      //el método findIndex en el array se utiliza para encontrar el índice del objeto en el lista category que tiene el mismo id
      const i = arrayEvents.value.findIndex((event) => event.id === objEvent.id);
      //Asigna el objeto data.data al índice i del array arrayEvents.value."
      arrayEvents.value[i] = format;
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
      start_date: formatDate(start_date.value),
      end_date: formatDate(end_date.value),
      time: "",
      description: "",
      user_id: "",
    });
  };

  return {
    modal,
    show_modal,
    hideModel,
    getEvent,
    eventUpdate,
    start_date,
    end_date,
    objectEvent,
    addEvent,
    arrayEvents,
    stateAlert,
    searchrecord,
    editMode,
    eventDelete,
    restartEvent,
  };
});
