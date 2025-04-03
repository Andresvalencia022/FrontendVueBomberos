<script setup>
import ModalEvent from "../../components/Modal/modalEvent.vue";
import Modal from "../../components/ModalDetalles/Modal.vue";
import Loader from "../../components/UI/loader.vue"
import { onMounted } from "vue";

import { UseEventStore } from "../../stores/UseEventStore";
const EventStore = UseEventStore();
const { modal, show_modal, getEvent, eventUpdate, eventDelete, loader } = EventStore;

import { UseModalStore } from "../../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modalDetalle, show_modalDetalle } = ModalStore;

onMounted(() => {
  getEvent();
});

</script>
<template>
  <div>
    <div class="flex p-2 justify-between">
      <h1 class="mt-2 ml-9 text-xl font-PoetsenOne">
        Administrador de eventos
      </h1>
      <a href="#"
        class="items-center mt-1 mr-6 px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500"
        @click="show_modal('modal_new_registration')">
        Nuevo Evento
      </a>
    </div>
    <!--  Utilizo acción Loader (Cargar...)-->
    <div v-if="EventStore.loader" class="flex justify-center items-center py-10 h-[50vh]">
      <Loader></Loader>
    </div>

    <!-- ✅ Si hay eventos, muestra la lista -->
    <div v-else-if="EventStore.arrayEvents.length > 0" class="grid grid-cols-2 gap-1">
      <div v-for="event in EventStore.arrayEvents.slice(0, 4)" :key="event.id" class="mx-6 my-4">
        <div class="w-full p-6 h-auto bg-gray-300 border border-gray-400 rounded-xl shadow-lg ">
          <!-- Título y acciones -->
          <div class="flex items-center justify-between mb-4">
            <h5 class="w-8/12 text-lg font-bold tracking-wide text-black truncate">
              {{ event.event_name }}
            </h5>

            <div class="flex gap-3">
              <a @click="eventUpdate(event.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-green-500 hover:text-green-700 transition-colors">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
              </a>
              <a @click="eventDelete(event.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-red-600 hover:text-red-900 transition-colors">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Fechas del evento -->
          <div class="grid grid-cols-2 gap-4 mb-6 text-gray-800">
            <div class="text-center">
              <h3 class="text-sm font-semibold">📅 Fecha</h3>
              <p class="text-gray-900 text-sm">
                {{ event.date }}
              </p>
            </div>
            <div class="text-center">
              <h3 class="text-sm font-semibold">🕒 Hora</h3>
              <p class="text-gray-900 text-sm">
                {{ event.time }}
              </p>
            </div>
          </div>

          <!-- Botón de detalles -->
          <button
            class="w-full px-4 py-2 text-white font-medium text-sm rounded-lg bg-gray-900 hover:bg-red-600 transition focus:ring-4 focus:outline-none"
            @click="show_modalDetalle('event_details', event.id)">
            Ver más detalles
          </button>
        </div>
      </div>
    </div>
    <!-- 🛑 Si no hay eventos, muestra esto -->
    <div v-else class="flex flex-col items-center justify-center p-10 mx-3 bg-white rounded-lg">
      <img src="https://cdn-icons-png.flaticon.com/512/747/747310.png" alt="Sin eventos"
        class="w-48 h-48 mb-5 opacity-90 transition-transform duration-300 hover:scale-110 drop-shadow-xl" />

      <h2 class="text-2xl font-semibold text-gray-700">
        No hay eventos registrados 📅
      </h2>

      <p class="text-gray-800 dark:text-gray-500 text-md mt-2 text-center max-w-md leading-relaxed">
        Aún no se ha registrado ningún evento. Agrega uno haciendo clic en el
        botón <strong>"Nuevo Evento"</strong> para comenzar.
      </p>
    </div>
  </div>
  <ModalEvent v-if="modal.mostrar"></ModalEvent>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>

