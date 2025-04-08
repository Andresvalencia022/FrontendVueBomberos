import { defineStore } from "pinia";
//moment sirve para manipular, formatear y trabajar con fechas y horas
import { ref, reactive  } from "vue";
import APIService from "../services/APIService";
import TextFormatterService from "../services/TextFormatterService";

export const UsePublicEventStore = defineStore("PublicEventStore", () => {

  const PublicStatusModifier = ref(false); // Estado inicial como booleano

  const loader = ref(false);

  const arrayPublicEvents = ref([]); // Para las noticias públicas (sin token)

  const objectPublicEvents = reactive({
    id: "",
    event_name: "",
    date: "",
    location: "",
    time: "",
    description: "",
    user_id: "",
  });

  const getPublicEvents = async () => {
    loader.value = true;
    try {
      const { data } = await APIService.getPublicEvents();
      arrayPublicEvents.value = data.data
    } catch (error) {
      console.error("Error al leer Eventos:", error.message);
    } finally {
      loader.value = false;
    }
  };

  //buscar registro para mostrar en detalles de evento o poderlo traer para editar
  async function searchrecord(id, isPublic) {
      // Aquí actualizamos el valor directamente en el store
  PublicStatusModifier.value = isPublic === true;
  
    try {
      const { data } = await APIService.bringPublicEvents(id);
      const dataEvento = data.data;
      // Asignar datos a las propiedades relevantes
      objectPublicEvents.id = dataEvento.id;
      objectPublicEvents.event_name = dataEvento.event_name;
      const decodedDescription = TextFormatterService.decodeHTMLEntities(dataEvento.description)
              .replace(/<br\s*\/?>/g, "\n\n") //Convierte <br> a \n
              .replace(/\n{3,}/g, "\n\n"); // Evita más de dos saltos seguidos
              objectPublicEvents.description = decodedDescription.trim();

      objectPublicEvents.time = dataEvento.time;
      objectPublicEvents.date = dataEvento.date;
      objectPublicEvents.location = dataEvento.location;
      objectPublicEvents.user_id = dataEvento.user_id;

      // Cambiar estado para cambiar poder cerrar 
    } catch (error) {
      console.error("Error al buscar el evento:", error.message);
    }
  }

  const restartobjectPublicEvents = () => {
    //  reiniciar el objeto para que no muestre los valores en los campos del formulario
    Object.assign(objectPublicEvents, {
      id: "",
      event_name: "",
      date: "",
      location: "",
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
    loader,
  };
});
