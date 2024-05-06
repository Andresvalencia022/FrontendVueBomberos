import { defineStore } from "pinia";
import ModalServices from "../services/ModalServices";
import { reactive } from "vue";

export const UseUserStore = defineStore("UserStore", () => {

  //objeto de modal
  const modal = reactive({
    mostrar: false,
    animar: false
})

     //mostrar modal
     const show_modal = () => {
        ModalServiecs.show(modal);
    }

    //ocultar modal
    const hideModel = () => {
        ModalServiecs.hide(modal);
    }

    return{
        show_modal,
        hideModel
    };
});