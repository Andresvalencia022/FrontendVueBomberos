import { defineStore } from "pinia";
import { reactive } from "vue";

export const UseNewsStore = defineStore("NewsStore", () => {


    //objeto de modal
    const modal = reactive({
        mostrar: false,
        animar: false,
      });  
 
  //Mostrar modal
  const show_modal = (ModalType) => {
    if (ModalType === "modal_new_registration") {
        ModalServices.show(modal);
       }
  }

   //ocultar modal
   const hideModel = (ModalType) => {
    if (ModalType === "cerrarSinGuardarNews") {
        ModalServices.hide(modal);
        restartEvent();
    }else{
      ModalServices.hide(modal);
    }
  };



    return{
        show_modal,
        hideModel,
    };
});