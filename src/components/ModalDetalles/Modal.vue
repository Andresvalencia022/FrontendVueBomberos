<script setup>

import EventDetails from "./eventDetails.vue";
import NewsDetail from "./newsDetail.vue";
import UserDetail from "./userDetails.vue";
import WinningTicketDetail from "./winningTicketDetails.vue";

// Stora para manejar todos los Modales
import { UseModalStore } from "../../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modalDetalle, hideModel, modalStart } = ModalStore;

import { computed } from "vue";
import { useRoute } from "vue-router";

// // voy a tomar el nombre de la ruta en la que estoy
const route = useRoute();
const event = computed(() => route.name === "event");
const news = computed(() => route.name === "news");
const winningTicket = computed(() => route.name === "winningTicket");
const user = computed(() => route.name === "users");

</script>

<template>
     <div
    class="Modal fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center overflow-hidden transition-all ease-in-out duration-700"
    :class="[modalDetalle.animar ? ' bg-opacity-70' : 'opacity-0']"
  >
    <div
      class="content w-2/4 pt-2 justify-center overflow-hidden transition-all ease-in-out duration-1000"
      :class="[modalDetalle.animar ? ' bg-opacity-70' : 'opacity-0']"
    >
      <div class="bg-white relative rounded-lg"  :class="[user ? 'mt-12' : '' ]">
        <h1 v-if="modalStart === 'Start_event'" class="text-center p-4 text-2xl text-white bg-red-700 rounded-lg mb-5">
          Evento: 
        </h1>

        <h1 v-else-if="modalStart === 'home_news'"  class="text-center p-4 text-2xl text-white bg-red-700 rounded-lg mb-5">
          Noticia 
        </h1>

        <h1 v-else class="text-center p-4 text-2xl text-white bg-red-700 rounded-lg mb-5">
          Descripción Completa
        </h1>
        <h1
          class="absolute -top-1 -right-1 h-7 w-7 text-center text-xl text-white rounded-full cursor-pointer"
          @click="hideModel('modalDetails')"
        >
          x
        </h1>
         
         <EventDetails v-if="event || modalStart === 'Start_event' "></EventDetails>

         <NewsDetail v-else-if="news || modalStart === 'home_news' "></NewsDetail>
       
         <WinningTicketDetail v-else-if="winningTicket"></WinningTicketDetail>

         <UserDetail v-else></UserDetail>

      </div>
    </div>
  </div>
</template>


