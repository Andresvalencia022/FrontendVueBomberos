<script setup>
import Modal from "../components/ModalDetalles/Modal.vue";
import {onMounted} from "vue";
import { UseModalStore } from "../stores/UseModalStore";
import {UseEventStore} from "../stores/UseEventStore";

const ModalStore = UseModalStore();
const { modalDetalle, show_modalDetalle } = ModalStore;
// Eventos
const EventStore = UseEventStore();
const {getEvent} = EventStore;

// const NewsStore = UseNewsStore();
// const {objectNew, readNews} = NewsStore;

onMounted(() => {
  getEvent();
});

</script>
<template>
  <div id="eventos" class="my-2 mt-9">
    <div class="my-10">
      <h1
        class="text-3xl pt-10 font-sans subpixel-antialiased font-bold text-center"
      >
        Eventos
      </h1>
    </div>
    <div class="flex flex-row">
      <div
        class="w-2/4 h-64 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        v-for="event in EventStore.arrayEvents.slice(0, 2)" 
        :key="event.id"
        :event="event"
        >
        <article class="p-5 h-64 overflow-hidden">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2"
          >
          {{ event.event_name }}
          </h5>
          <p class="text-gray-700 dark:text-gray-300 line-clamp-6">
            {{ event.description }}
          </p>
        </article>
        <button
          type="button"
          class="text-white w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="show_modalDetalle('event_details',event.id)"
        >
          Leer más...
        </button>
      </div>    
    </div>
  </div>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>

