import { defineStore } from "pinia";
import { ref, reactive } from "vue";

import APIService from "../services/APIService";

export const UsePublicNewsStore = defineStore("PublicNewsStore", () => {

  // let modalStart = ref("");

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
    try {
      const { data } = await APIService.getPublicNews();
      arrayPublicNews.value = data.data;
    } catch (error) {
      console.error("Error al leer todos las noticias:", error.message);
    }
  };

    async function searchrecord(id) {
      try {
        const { data } = await APIService.bringPublicNews(id);
        const dataNew = data.data;
        objectPublicNews.id = dataNew.id;
        objectPublicNews.title_news = dataNew.title_news;
        // 🔹 Decodificar entidades HTML y reemplazar <br> con saltos de línea
        const decodedInfo = decodeHTMLEntities(dataNew.info)
        .replace(/<br\s*\/?>/g, "\n\n") // Convertir <br> en doble salto de línea
        .replace(/\n{3,}/g, "\n\n") // Evitar más de dos saltos seguidos
        objectPublicNews.info = decodedInfo.trim();
        objectPublicNews.video_name = dataNew.video_name;
        objectPublicNews.user_id = dataNew.user_id;
        objectPublicNews.name_imagen = dataNew.name_imagen;
  
        // ✅ Verificar si la info es mayor a 645 caracteres para activar el scroll
        isScrollable.value = dataNew.info.length > 600;
        // Actualizar el texto corto
        shortText.value =
        decodedInfo.length > 300
        ? decodedInfo.substring(0, 400) + "..."
        : decodedInfo;
      } catch (error) {
        console.error("Error al crear el evento:", error.message);
      }
    }

  return {
    arrayPublicNews,
    objectPublicNews,
    readPublicNews,
    searchrecord
  };
});
