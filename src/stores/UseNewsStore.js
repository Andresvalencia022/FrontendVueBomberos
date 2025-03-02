import { defineStore } from "pinia";
import { ref, reactive } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";

import ModalServices from "../services/ModalServices";
import { UseUserStore } from "../stores/UseUserStore";

export const UseNewsStore = defineStore("NewsStore", () => {
  const UserStore = UseUserStore();

  const arrayNews = ref([]);

  const imageIsUpdated = ref(false);

  const file = ref(null); // Estado para almacenar el archivo

  const objectNew = reactive({
    id: "",
    title_news: "",
    info: "",
    name_imagen: "",
    video_name: "",
    user_id: "",
  });

  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  //todas las noticias
  const readNews = async () => {
    const token = APIService.authToken();

    try {
      const { data } = await APIService.getNews(token);
      arrayNews.value = data.data;
    } catch (error) {
      console.error("Error al leer todos las noticias:", error.message);
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

  const addNew = () => {
    const title_news =
    objectNew.title_news == "" ? false : objectNew.title_news;
    const info = objectNew.info == "" ? false : objectNew.info;
    objectNew.user_id = UserStore.objectUser.id;
    const id = objectNew.id == "" ? false : true;
    
    if (!title_news || !info) {
      ("¡Alerta! El campo Título y descripción son obligatorio");
    }

    if (id) {
      updateNew();
    } else {
      saveNew();
    }
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
      // APIService(formData ,token);
    } catch (error) {
      console.error("Error al crear una noticia:", error.message);
    }
  }

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
      objectNew.info = dataNew.info;
      objectNew.video_name = dataNew.video_name;
      objectNew.user_id = dataNew.user_id;
      objectNew.name_imagen = dataNew.name_imagen;
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
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
    
    // Convertir objectNews a un objeto plano manualmente
    const Object = {
      id: objectNew.id,
      title_news: objectNew.title_news,
      info: objectNew.info,
      name_imagen: objectNew.name_imagen,
      video_name: objectNew.video_name,
      user_id: objectNew.user_id,
    };    
      const formData = createFormData (Object, file, true);
      try {
      const { data } = await APIService.updateNews(Object.id, formData, token);
      const i = arrayNews.value.findIndex((News) => News.id === Object.id); 
      arrayNews.value[i] = data.data;
    } catch (error) {
      console.error("Error al crear una noticia:", error.message);
    }
  }


  const newDelete = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
      remove(id);
    }else{
      console.log("Eliminación cancelada");
    }
  }

  //Eliminar registros
    async function remove(id) {
      const token = APIService.authToken();
      console.log(id);
      try {
        const { data } = await APIService.deleteNews(id, token);
        arrayNews.value = arrayNews.value.filter((news) => news.id !== id);
      } catch (error) {
        console.error("Error al leer categorías:", error.message);
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
  };
});
