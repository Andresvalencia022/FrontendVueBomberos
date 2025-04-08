import { defineStore } from "pinia";
import ModalServices from "../services/ModalServices";
import { ref, reactive } from "vue";

import { UseUserStore } from "../stores/UseUserStore";
import { UseEventStore } from "../stores/UseEventStore";
import { UseNewsStore } from "../stores/UseNewsStore";
import { UseWinningTicketStore } from "../stores/UseWinningTicket";

//publico
import { UsePublicEventStore } from "../stores/UsePublicEventStore";
import { UsePublicNewsStore } from "../stores/UsePublicNewsStore";

export const UseModalStore = defineStore("ModalStore", () => {
  const EventStore = UseEventStore();
  const NewsStore = UseNewsStore();
  const WinningTicketStore = UseWinningTicketStore();
  const UserStore = UseUserStore();
  //publico
  const PublicEventStore = UsePublicEventStore();
  const PublicNewsStore = UsePublicNewsStore();

  let modalStart = ref("");

  //objeto de modal
  const modalDetalle = reactive({
    mostrar: false,
    animar: false,
  });

  //mostrar modal
  const show_modalDetalle = (modalDetailType, id, isPublic) => {

    if (modalDetailType === "event_details") {
      modalStart.value = modalDetailType;
      isPublic
        ? PublicEventStore.searchrecord(id, isPublic)
        : EventStore.searchrecord(id);
      ModalServices.show(modalDetalle);
    } else if (modalDetailType === "news_details") { 
      modalStart.value = modalDetailType;      
      isPublic
        ? PublicNewsStore.searchrecord(id, isPublic)
        : NewsStore.searchregistration(id);
      ModalServices.show(modalDetalle);
    } else if (modalDetailType === "WinningTicket_details") {
      modalStart.value = modalDetailType;
      WinningTicketStore.searchrecord(id);
      ModalServices.show(modalDetalle);
    } else {
      modalStart.value = modalDetailType;
      UserStore.searchrecord("user_details", id);
      ModalServices.show(modalDetalle);
    }
  };

  //ocultar modal
  const hideModel = (isPublic = false) => {
    if (modalStart.value === "event_details") {
      //condicion ternario 
      isPublic ? (PublicEventStore.restartobjectPublicEvents(), PublicEventStore.resetPublicStatusModifier())
        : EventStore.restartEvent();
      ModalServices.hide(modalDetalle);

    } else if (modalStart.value === "news_details") {
      //condicion ternario 
      isPublic ? (PublicNewsStore.restartobjectPublicNews(),PublicNewsStore.resetPublicStatusModifier())
        : EventStore.restartEvent();
      ModalServices.hide(modalDetalle);

    } else if (modalStart.value === "WinningTicket_details") {
      WinningTicketStore.restarWinningTicket();
      ModalServices.hide(modalDetalle);
    } else {
      UserStore.restartUser();
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
