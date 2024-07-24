import { defineStore } from "pinia";
import ModalServices from "../services/ModalServices";
import { ref, reactive } from "vue";

import {UseUserStore} from '../stores/UseUserStore';
import { UseEventStore } from "../stores/UseEventStore";
import { UseWinningTicketStore } from "../stores/UseWinningTicket";

export const UseModalStore = defineStore("ModalStore", () => {
  
  const EventStore = UseEventStore();
  const UserStore = UseUserStore();
  const WinningTicketStore = UseWinningTicketStore();

  let modalStart = ref("");

  //objeto de modal
  const modalDetalle = reactive({
    mostrar: false,
    animar: false,
  });

  //mostrar modal
  const show_modalDetalle = (modalDetailType, id) => {
     console.log(modalDetailType)
      if (modalDetailType === "event_details") {
          modalStart.value = modalDetailType;
          EventStore.searchrecord(id)
          ModalServices.show(modalDetalle);
      } else if (modalDetailType === 'home_news') {
          modalStart.value = modalDetailType;
          ModalServices.show(modalDetalle);
      } else if (modalDetailType === 'WinningTicket_details') {
        modalStart.value = modalDetailType;
        WinningTicketStore.searchrecord('detalle',id);
        ModalServices.show(modalDetalle);
      }else{
        modalStart.value = modalDetailType;
        UserStore.searchrecord(id);
        ModalServices.show(modalDetalle);
      }
  };


  //ocultar modal
  const hideModel = () => {
    if(modalStart.value === 'event_details' ){
        EventStore.restartEvent();
        ModalServices.hide(modalDetalle);
      }else if (modalStart.value === 'home_news') {
        ModalServices.hide(modalDetalle);
      }else if (modalStart.value === 'WinningTicket_details') {
        WinningTicketStore.restarWinningTicket();
        ModalServices.hide(modalDetalle);
      }else {
        console.log('user')
        UserStore.restartUser();
        ModalServices.hide(modalDetalle);
      }
    }
  return {
    modalDetalle,
    show_modalDetalle,
    hideModel,
    modalStart,
  };
});
