import { defineStore } from "pinia";
import { ref, reactive } from "vue";

import APIService from "../services/APIService";
import TextFormatterService from "../services/TextFormatterService";

export const UsePublicNewsStore = defineStore("PublicNewsStore", () => {

  const PublicStatusModifier = ref(false); // Estado inicial como booleano

  const loader = ref(false);

  const isScrollable = ref(false); // Nueva variable para manejar el scroll

  const arrayPublicNews = ref([]); // Para las noticias públicas (sin token)

  const objectPublicNews = reactive({
    id: "",
    title_news: "",
    info: "",
    name_imagen: "",
    video_name: "",
    user_id: "",
    user_name: "",
  });

  //todas las noticias publicas
  const readPublicNews = async () => {
    loader.value = true;
    try {
      const { data } = await APIService.getPublicNews();
      arrayPublicNews.value = data.data;
    } catch (error) {
      console.error("Error al leer todos las noticias:", error.message);
    } finally {
      loader.value = false;
    }
  };

    async function searchrecord(id, isPublic) {
        // Aquí actualizamos el valor directamente en el store
        PublicStatusModifier.value = isPublic === true;

      try {
        const { data } = await APIService.bringPublicNews(id);
        const dataNew = data.data;
        objectPublicNews.id = dataNew.id;
        objectPublicNews.title_news = dataNew.title_news;
        // 🔹 Decodificar entidades HTML y reemplazar <br> con saltos de línea
        const decodedInfo = TextFormatterService.decodeHTMLEntities(dataNew.info)
        .replace(/<br\s*\/?>/g, "\n\n") // Convertir <br> en doble salto de línea
        .replace(/\n{3,}/g, "\n\n") // Evitar más de dos saltos seguidos
        objectPublicNews.info = decodedInfo.trim();
        objectPublicNews.video_name = dataNew.video_name;
        objectPublicNews.user_id = dataNew.user_id;
        objectPublicNews.name_imagen = dataNew.name_imagen;
  
        // ✅ Verificar si la info es mayor a 645 caracteres para activar el scroll
        isScrollable.value = dataNew.info.length > 210;
      
      } catch (error) {
        console.error("Error al buscar la noticia:", error.message);
      }
    }
    
    const restartobjectPublicNews = () => {
      //  reiniciar el objeto para que no muestre los valores en los campos del formulario
      Object.assign(objectPublicNews, {
        id: "",
        title_news: "",
        info: "",
        name_imagen: "",
        video_name: "",
        user_id: "",
        user_name: "",
      });
    };

   // Acción para reiniciar el estado a su valor inicial
   const resetPublicStatusModifier = () => {
    PublicStatusModifier.value = false;
  };


  return {
    arrayPublicNews,
    objectPublicNews,
    readPublicNews,
    searchrecord,
    isScrollable,
    PublicStatusModifier,
    resetPublicStatusModifier,
    restartobjectPublicNews,
    loader
  };
});
