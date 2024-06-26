import { defineStore } from "pinia";
import ModalServices from "../services/ModalServices";
import { ref, reactive } from "vue";

import { UseEventStore } from "../stores/UseEventStore";

export const UseModalStore = defineStore("ModalStore", () => {
 
  let modalStart = ref("");

  //objeto de modal
  const modalDetalle = reactive({
    mostrar: false,
    animar: false,
  });

  //mostrar modal
  const show_modalDetalle = (modalDetailType) => {
      if (modalDetailType === "event_details") {
          modalStart.value = modalDetailType;
          ModalServices.show(modalDetalle);
      } else if (modalDetailType === 'home_news') {
          modalStart.value = modalDetailType;
          ModalServices.show(modalDetalle);
      }
  };


  //ocultar modal
  const hideModel = (ModalType, close ) => {
    console.log(close);
    if (ModalType === "modal_new_registration") {
      if(close === 'cerrarSinGuardarEvent' ){
        ModalServices.hide(modal);
        // UseEventStore.restartEvent();
      }

    } else {
      ModalServices.hide(modalDetalle);
    }
  };

  return {
    modalDetalle,
    show_modalDetalle,
    hideModel,
    modalStart,
  };
});
