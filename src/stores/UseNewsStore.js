import { defineStore } from "pinia";
import { ref, reactive } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";

import ModalServices from "../services/ModalServices";
import { UseUserStore } from "../stores/UseUserStore";

export const UseNewsStore = defineStore("NewsStore", () => {
  const UserStore = UseUserStore();

  const file = ref(null); // Estado para almacenar el archivo

  const objectNew = reactive({
    id: "",
    title_news: "",
    info: "",
    name_image: "",
    link_video: "",
    user_id: "",
  });

  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  const show_modal = (ModalType) => {
    if (ModalType === "modal_new_registration") {
      ModalServices.show(modal);
    }
  };

  const hide_Model = (ModalType) => {
    if (ModalType === "cerrarSinGuardarNews") {
      ModalServices.hide(modal);
      restartNews();
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

  // Guardar el archivo en la store
  const setFile = (selectedFile) => {
    // almacena en la variabel reactive file
    file.value = selectedFile;
    objectNew.name_image = selectedFile.name; // Guarda el nombre en objectNew
  };

  const addNew = () => {
    objectNew.user_id = UserStore.objectUser.id;
    const title_news = objectNew.title_news == "" ? false : objectNew.title_news;
    const info = objectNew.info == "" ? false : objectNew.info;
    const name_image = objectNew.name_image == "" ? false : objectNew.name_image;
    const link_video = objectNew.link_video == "" ? false : objectNew.link_video;
    const id = objectNew.id == "" ? false : true;
    
    if (title_news || info) {
      "¡Alerta! El campo Título y descripción son obligatorio"
    }

    if (id) {
      updateNew();
    }else{
       saveNew();
    }
    hide_Model('Cerrar');
    restartNews();
  };

  // Registrar
  async function  saveNew(){
     const token = APIService.authToken();
     try {
       const { data } = await  APIService.CreateNew(objectNew ,token);
     }catch (error) {
       console.error('Error al crear una noticia:', error.message);
     }

  }
  

  //  reiniciar el objeto
  const restartNews = () => {
    Object.assign(objectNew, {
      id: "",
      title_news: "",
      info: "",
      name_image: "",
      Link_video: "",
      user_id: "",
    });
  };

  return {
    modal,
    show_modal,
    hide_Model,
    handleFileChange,
    file,
    setFile,
    objectNew,
    addNew,
  };
});
