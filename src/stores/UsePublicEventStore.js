import { defineStore } from "pinia";
//moment sirve para manipular, formatear y trabajar con fechas y horas
import moment from "moment";
import { ref, reactive, watch } from "vue";
import APIService from "../services/APIService";

export const UsePublicEventStore = defineStore("PublicEventStore", () => {
  const PublicStatusModifier = ref(false); // Estado inicial como booleano

  let start_date = ref(new Date());
  let end_date = ref(new Date());

  // Función para formatear la fecha a 'YYYY-MM-DD HH:mm:ss'
  function formatDate(date) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  }

  function formatDateYMD(date) {
    return moment(date).format("YYYY-MM-DD");
  }

  const arrayPublicEvents = ref([]); // Para las noticias públicas (sin token)

  const objectPublicEvents = reactive({
    id: "",
    event_name: "",
    start_date: formatDate(start_date.value),
    end_date: formatDate(end_date.value),
    time: "",
    description: "",
    user_id: "",
  });

  const getPublicEvents = async () => {
    try {
      const { data } = await APIService.getPublicEvents();
      // Formatear las fechas antes de asignar los datos a arrayEvents.value
      arrayPublicEvents.value = data.data.map((event) => ({
        ...event,
        start_date: formatDateYMD(event.start_date),
        end_date: formatDateYMD(event.end_date),
      }));
    } catch (error) {
      console.error("Error al leer Eventos:", error.message);
    }
  };

  //buscar registro para mostrar en detalles de evento o poderlo traer para editar
  async function searchrecord(id, eventPublicStatusModifier) {
    PublicStatusModifier.value = eventPublicStatusModifier;
    try {
      const { data } = await APIService.bringPublicEvents(id);
      const dataEvento = data.data;
      // Asignar datos a las propiedades relevantes
      objectPublicEvents.id = dataEvento.id;
      objectPublicEvents.event_name = dataEvento.event_name;
      objectPublicEvents.description = dataEvento.description;
      objectPublicEvents.time = dataEvento.time;
      objectPublicEvents.user_id = dataEvento.user_id;
      // Formatear las fechas antes de asignarlas
      start_date.value = new Date(dataEvento.start_date);
      end_date.value = new Date(dataEvento.end_date);
    } catch (error) {
      console.error("Error al buscar el evento:", error.message);
    }
  }

  const restartobjectPublicEvents = () => {
    //  reiniciar el objeto para que no muestre los valores en los campos del formulario
    Object.assign(objectPublicEvents, {
      id: "",
      event_name: "",
      start_date: formatDate(start_date.value),
      end_date: formatDate(end_date.value),
      time: "",
      description: "",
      user_id: "",
    });
  };

  // Acción para reiniciar el estado a su valor inicial
  const resetPublicStatusModifier = () => {
    PublicStatusModifier.value = false;
  };

  return {
    arrayPublicEvents,
    objectPublicEvents,
    getPublicEvents,
    searchrecord,
    PublicStatusModifier,
    restartobjectPublicEvents,
    resetPublicStatusModifier,
  };
});
