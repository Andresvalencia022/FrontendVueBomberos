import { defineStore } from "pinia";
import { ref, reactive } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";
import TextFormatterService from "../services/TextFormatterService";

import ModalServices from "../services/ModalServices";
import { UseUserStore } from "../stores/UseUserStore";
import { UseAlertStore } from "../stores/UseAlertStore";

export const UseNewsStore = defineStore("NewsStore", () => {

  const UserStore = UseUserStore();
  const alertStore = UseAlertStore();

  const arrayNews = ref([]); //(requiere token)

  const imageIsUpdated = ref(false);

  const loader = ref(false);

  const file = ref(null); // Estado para almacenar el archivo

  //Expandir una secccion texto
  const isExpanded = ref(false); //Mostrar texto
  const shortText = ref(""); // Variable reactiva donde guardo el contenido del info
  const isScrollable = ref(false); // ✅ Nueva variable para manejar el scroll

  const objectNew = reactive({
    id: "",
    title_news: "",
    info: "",
    name_imagen: "",
    video_name: "",
    user_id: "",
    user_name: "",
  });

  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  //todas las noticias
  const readNews = async () => {
    loader.value = true;
    const token = APIService.authToken();

    try {
      const { data } = await APIService.getNews(token);
      arrayNews.value = data.data;
    } catch (error) {
      console.error("Error al leer todas las noticias:", error.message);
    } finally {
      loader.value = false;
    }
  };

  const show_modal = (ModalType) => {
    if (ModalType === "modal_new_registration") {
      ModalServices.show(modal);
    } else {
      ModalServices.show(modal);
    }
  };

  const hide_Model = (ModalType) => {
    if (ModalType === "cerrarSinGuardarNews") {
      ModalServices.hide(modal);
      restartNews();
      resetFile();
      resetimageIsUpdated();
    } else {
      ModalServices.hide(modal);
    }
  };

  const handleFileChange = (e) => {
    // e (evento): Es el objeto de evento que se pasa cuando el usuario selecciona un archivo.
    // e.target: Se refiere al elemento HTML que disparó el evento (en este caso, el <input>).
    // e.target.files: Es una lista de archivos (tipo FileList) que contiene los archivos seleccionados.
    // e.target.files[0]: Obtiene el primer archivo seleccionado, ya que los inputs de tipo file
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const setFile = (selectedFile) => {
    file.value = selectedFile;
    objectNew.name_image = selectedFile.name; // Guarda el nombre del archivo
    // ID presente: modo edición, habilitar cambio de estado.
    if (objectNew.id) {
      imageIsUpdated.value = true;
    }
  };

  const eventUpdate = async (id) => {
    await searchregistration(id);
    show_modal("edit");
  };

  async function searchregistration(id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.bringNews(id, token);
      const dataNew = data.data;
      objectNew.id = dataNew.id;
      objectNew.title_news = dataNew.title_news;
      // 🔹 Decodificar entidades HTML y reemplazar <br> con saltos de línea
      const decodedInfo = TextFormatterService.decodeHTMLEntities(dataNew.info)
        .replace(/<br\s*\/?>/g, "\n\n") //Convierte <br> a \n
        .replace(/\n{3,}/g, "\n\n"); // Evita más de dos saltos seguidos
      objectNew.info = decodedInfo.trim();
      objectNew.video_name = dataNew.video_name;
      objectNew.user_id = dataNew.user_id;
      objectNew.name_imagen = dataNew.name_imagen;

      // ✅ Verificar si la info es mayor a 645 caracteres para activar el scroll
      isScrollable.value = dataNew.info.length > 600;
      // Actualizar el texto corto
      shortText.value =
        decodedInfo.length > 300
          ? decodedInfo.substring(0, 400) + "..."
          : decodedInfo;
    } catch (error) {
      console.error("Error al buscar la noticia:", error.message);
    }
  }

  const addNew = () => {
    const title_news =
      objectNew.title_news == "" ? false : objectNew.title_news;
    const info = objectNew.info == "" ? false : objectNew.info;
    objectNew.user_id = UserStore.objectUser.id;
    const id = objectNew.id == "" ? false : true;

    if (!title_news || !info) {
      // activar la alerta 
      alertStore.seeAlert("¡Alerta! El título y la descripción son obligatorios. Por favor, completa todos los campos.", "error-form");
      return;
    }

    id ? updateNew() : saveNew();

    hide_Model("Cerrar");
    restartNews();
    resetFile();
  };

  // Registrar
  async function saveNew() {
    const token = APIService.authToken();
    const formData = createFormData(objectNew, file, false);
    try {
      const { data } = await APIService.CreateNew(formData, token);
      const updateNew = [data.data, ...arrayNews.value];
      arrayNews.value = updateNew;
      //Alerta de éxito
      alertStore.seeAlert("La nueva noticia se ha guardado con éxito.", "success");
    } catch (error) {
      console.error("Error al crear una noticia:", error.message);
      alertStore.seeAlert("Error al guardar la noticia. Intenta nuevamente.", "error");
    }
  }


  function toggleExpand() {
    isExpanded.value = !isExpanded.value; // ✅ Modificar el estado de forma reactiva
  }

  const createFormData = (objectNew, file, isUpdate = false) => {
    const formData = new FormData();
    if (isUpdate) {
      formData.append("_method", "put");
    }
    formData.append("title_news", objectNew.title_news);
    formData.append("info", objectNew.info);
    formData.append("video_name", objectNew.video_name || "");
    formData.append("user_id", objectNew.user_id);

    if (file.value) {
      formData.append("name_imagen", file.value, file.value.name);
    }
    return formData;
  };

  //Actualizar
  async function updateNew() {
    const token = APIService.authToken();

    objectNew.info = objectNew.info
      .replace(/\r\n/g, "\n") // Normaliza saltos de línea de Windows (\r\n → \n)
      .replace(/\n{3,}/g, "\n\n"); // Mantiene máximo dos saltos seguidos

    // Convertir objectNews a un objeto plano manualmente
    const Object = {
      id: objectNew.id,
      title_news: objectNew.title_news,
      info: objectNew.info,
      name_imagen: objectNew.name_imagen,
      video_name: objectNew.video_name,
      user_id: objectNew.user_id,
    };
    const formData = createFormData(Object, file, true);
    try {
      const { data } = await APIService.updateNews(Object.id, formData, token);
      const i = arrayNews.value.findIndex((News) => News.id === Object.id);
      arrayNews.value[i] = data.data;

      //Alerta de éxito
      alertStore.seeAlert("La noticia ha sido actualizada con éxito", "success");

    } catch (error) {
      console.error("Error al editar la noticia:", error.message);
      alertStore.seeAlert("Error al actualizar el usuario. Intenta nuevamente.", "error");
    }
  }

  const newDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) remove(id);
  };

  //Eliminar registros
  async function remove(id) {
    const token = APIService.authToken();
    try {
      const { data } = await APIService.deleteNews(id, token);
      arrayNews.value = arrayNews.value.filter((news) => news.id !== id);
      //Alerta de éxito
      alertStore.seeAlert('La noticia fue eliminada correctamente.', 'success');

    } catch (error) {
      console.error("Error al eliminar noticia:", error.message);
      alertStore.seeAlert('Error al eliminar la noticia. Intenta nuevamente.', 'error');
    }
  }

  //  reiniciar el objeto
  const restartNews = () => {
    Object.assign(objectNew, {
      id: "",
      title_news: "",
      info: "",
      name_imagen: "",
      video_name: "",
      user_id: "",
      name_user: "",
    });
  };

  const resetFile = () => {
    file.value = null;
  };

  const resetimageIsUpdated = () => {
    imageIsUpdated.value = false;
  };

  return {
    arrayNews,
    loader,
    modal,
    show_modal,
    hide_Model,
    readNews,
    handleFileChange,
    file,
    objectNew,
    addNew,
    eventUpdate,
    imageIsUpdated,
    newDelete,
    searchregistration,
    isExpanded, // Exportarlo correctamente
    shortText,
    isScrollable, //  Retornamos la nueva variable
    toggleExpand,
  };
});
