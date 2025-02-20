import { defineStore } from "pinia";
import { ref, reactive } from "vue";
// import Cookies from 'js-cookie';
import APIService from "../services/APIService";

import ModalServices from "../services/ModalServices";
import { UseUserStore } from "../stores/UseUserStore";

export const UseNewsStore = defineStore("NewsStore", () => {
  const UserStore = UseUserStore();


  const arrayNews = ref([]);

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
        arrayNews.value = data.data

      } catch (error) {
        console.error("Error al leer todos las noticias:", error.message);
      }
    };

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

  const setFile = (selectedFile) => {
    file.value = selectedFile;
    objectNew.name_image = selectedFile.name; // Guarda el nombre del archivo
  };


  const addNew = () => {
    objectNew.user_id = UserStore.objectUser.id;
    const title_news = objectNew.title_news == "" ? false : objectNew.title_news;
    const info = objectNew.info == "" ? false : objectNew.info;
    const id = objectNew.id == "" ? false : true;
    
    if (!title_news || !info) {
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

     const formData = new FormData(); //crear objeto 
     formData.append("title_news", objectNew.title_news)
     formData.append("info", objectNew.info)
     formData.append("video_name", objectNew.video_name || "")  
     formData.append("user_id", objectNew.user_id)
    
     if(file.value){
      formData.append("name_imagen", file.value, file.value.name) // Adjuntar el archivo si existe
     }

    //  console.log("FormData enviado:", [...formData.entries()]); // 🔍 Verificar datos antes de enviarlos

     try {
       const { data } = await  APIService.CreateNew(formData, token);  
        // APIService(formData ,token);

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
      name_imagen: "",
      video_name: "",
      user_id: "",
    });
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
  };
});
