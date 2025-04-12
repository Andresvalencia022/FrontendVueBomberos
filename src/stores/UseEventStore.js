import { defineStore } from "pinia";

import { ref, reactive, watchEffect } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";
import TextFormatterService from "../services/TextFormatterService";
import ModalServices from "../services/ModalServices";
import moment from "moment";

import { UseUserStore } from "../stores/UseUserStore";
import { UseAlertStore } from "../stores/UseAlertStore";

export const UseEventStore = defineStore("EventStore", () => {

  const UserStore = UseUserStore();
  const alertStore = UseAlertStore();

  let date = ref(new Date());

  const isScrollable = ref(false); // Nueva variable para manejar el scroll

  // Función para formatear fechas en 'YYYY-MM-DD'
  const formatDateYMD = (date) => (date ? moment(date).format("YYYY-MM-DD") : "");

  //objeto de modal
  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  const loader = ref(false);

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

  //Todos los eventos
  const getEvent = async () => {
    loader.value = true;
    const token = APIService.authToken();
    try {
      const { data } = await APIService.getEvents(token);
      arrayEvents.value = data.data

    } catch (error) {
      console.error("Error al leer todos eventos:", error.message);
    } finally {
      loader.value = false; // 🔄 Desactivamos el loader
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
      console.error("Error al buscar el evento:", error.message);
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
      // activar la alerta 
      alertStore.seeAlert("¡Alerta! Debes llenar todos los campos requeridos antes de continuar.", "error-form");
      return;
    }
    objectEvent.id ? updateEvent() : saveEvent();

    hideModel("Cerrar");
    restartEvent();
  };

  async function saveEvent() {
    loader.value = true; // Mostrar loader al iniciar
    const token = APIService.authToken();
    try {
      const { data } = await APIService.createEvent(objectEvent, token);
      // Formatear el nuevo evento
      const newEvent = formattedEvent(data.data);
      // Agregar el nuevo evento al inicio del array
      arrayEvents.value.unshift(newEvent);
      // activar la alerta 
      alertStore.seeAlert("Operación exitosa: el evento ha sido registrado", "success");
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
      alertStore.seeAlert("Error al crear un nuevo evento. Intenta nuevamente.", "error");
    } finally {
      loader.value = false; // Ocultar loader al finalizar
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
      const index = arrayEvents.value.findIndex((event) => event.id === objEvent.id);
      if (index !== -1) arrayEvents.value[index] = formattedEvent(data.data);
        // activar la alerta 
        alertStore.seeAlert("Actualización completada", "success");
    } catch (error) {
      console.error("Error al editar el evento:", error.message);
      alertStore.seeAlert("Error al actualizar el evento. Intenta nuevamente.", "error");
    }
  }

  const eventDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) remove(id);
  };

  //Eliminar registros
  async function remove(id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.deleteEvent(id, token);
      arrayEvents.value = arrayEvents.value.filter((Event) => Event.id !== id);
      alertStore.seeAlert('El evento fue eliminado correctamente.', 'success');
    } catch (error) {
      console.error("Error al eliminar el evento:", error.message);
      alertStore.seeAlert('Error al eliminar el evento. Intenta nuevamente.', 'error');
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
    loader,
    show_modal,
    hideModel,
    arrayEvents,
    getEvent,
    eventUpdate,
    date,
    objectEvent,
    addEvent,
    searchrecord,
    editMode,
    eventDelete,
    restartEvent,
    isScrollable,
  };
});
