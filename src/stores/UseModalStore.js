import { defineStore } from "pinia";
import ModalServices from "../services/ModalServices";
import { ref, reactive } from "vue";

export const UseModalStore = defineStore("ModalStore", () => {
  let modalStart = ref("");

  //objeto de modal
  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  //objeto de modal
  const modalDetalle = reactive({
    mostrar: false,
    animar: false,
  });

  //mostrar modal
  const show_modal = (ModalType, modal_start) => {
    if (ModalType === "modal_new_registration") {
        ModalServices.show(modal);
    } else {
      if (modal_start === "Start_event") {
          modalStart.value = modal_start;
      } else {
          modalStart.value = modal_start; 
      }
      ModalServices.show(modalDetalle);
    }
  };

  //ocultar modal
  const hideModel = (ModalType) => {
    if (ModalType === "modal_new_registration") {
      ModalServices.hide(modal);
    } else {
      ModalServices.hide(modalDetalle);
    }
  };

  return {
    modal,
    modalDetalle,
    show_modal,
    hideModel,
    modalStart,
  };
});
