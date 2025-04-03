<script setup>
import Modal from "../components/ModalDetalles/Modal.vue";
import { onMounted } from "vue";
import { UseModalStore } from "../stores/UseModalStore";
import { UsePublicEventStore } from "../stores/UsePublicEventStore";

const ModalStore = UseModalStore();
const { modalDetalle, show_modalDetalle } = ModalStore;
// Eventos
const PublicEventStore = UsePublicEventStore();
const { getPublicEvents } = PublicEventStore;

onMounted(() => {
  getPublicEvents();
});
</script>
<template>
  <div id="eventos" class="my-3 mt-12">
    <div class="my-10">
      <h1
        class="text-3xl  pt-16 font-sans subpixel-antialiased font-bold text-center"
      >
        Eventos
      </h1>
      <div class="w-16 h-1 bg-red-600 mx-auto mt-2"></div>
    </div>
    <!-- Validar si el arrayPublicEvents tiene contenido para mostrar-->
    <div
      class="flex flex-row"
      v-if="PublicEventStore.arrayPublicEvents.length > 0"
    >
      <div
        class="w-2/4 h-64 m-2 p-5 bg-gray-800 border border-gray-700 rounded-lg shadow max-h-[580px] flex flex-col"
        v-for="event in PublicEventStore.arrayPublicEvents.slice(0, 2)"
        :key="event.id"
        :event="event"
      >
        <article class=" h-64 overflow-hidden flex-grow">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-white  line-clamp-2"
          >
            {{ event.event_name }}
          </h5>
          <p class="text-white line-clamp-6 whitespace-pre-line">
            {{ event.description.replace(/<br\s*\/?>/g, "\n") }}
          </p>
        </article>
          <button
            type="button"
            class="text-white my-2 w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            @click="show_modalDetalle('event_details', event.id, true)"
          >
            Leer más...
          </button>
      </div>
    </div>
    <!-- Mensaje cuando no hay eventos -->
    <div
      v-else
      class="flex flex-col items-center justify-center p-14 bg-gray-50 dark:bg-gray-300 rounded-lg shadow-lg"
    >
      <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        No hay eventos disponibles 😕
      </h2>

      <p
        class="text-gray-500 dark:text-gray-400 text-md mt-2 text-center max-w-md leading-relaxed"
      >
        Parece que aún no hay eventos programados. ¡Vuelve pronto para descubrir
        las próximas actividades de los bomberos! 🚒🔥
      </p>
    </div>
  </div>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>

