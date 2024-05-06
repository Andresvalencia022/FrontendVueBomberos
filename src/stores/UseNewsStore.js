import { defineStore } from "pinia";
import ModalServices from "../services/ModalServices";
import { reactive } from "vue";

export const UseNewsStore = defineStore("NewsStore", () => {

  //objeto de modal
  const modal = reactive({
    mostrar: false,
    animar: false
})

     //mostrar modal
     const show_modal = () => {
        ModalServices.show(modal);
    }

    //ocultar modal
    const hideModel = () => {
        ModalServices.hide(modal);
    }

    return{
        modal,
        show_modal,
        hideModel
    };
});