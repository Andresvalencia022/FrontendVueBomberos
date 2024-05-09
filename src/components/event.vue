<script setup>

import Modal from '../components/ModalDetalles/Modal.vue'

import { UseModalStore } from "../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modalDetalle, show_modal } = ModalStore;

</script>
<template>
  <div id="eventos" class="my-2 mt-9">
    <div class="my-10">
      <h1 class="text-3xl pt-10 font-sans subpixel-antialiased font-bold text-center">
        Eventos
      </h1>
    </div>
    <div class="flex flex-row">
      <div
        class="w-2/4 h-64 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <article class="p-5 h-64 overflow-hidden">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Titulo del evento 1
          </h5>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde...
          </p>
        </article>
        <button
          type="button"
          class="text-white w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="show_modal('modalDetails', 'Start_event')" 
        >
          leer mas...
        </button>
      </div>
      <div
        class="w-2/4 m-2 h-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <article class="p-5 h-64 overflow-hidden">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Titulo de la evento 2
          </h5>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde...
          </p>
        </article>
        <button
          type="button"
          class="text-white w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="show_modal('modalDetails', 'Start_event')" 
        >
          leer mas...
        </button>
      </div>
    </div>
  </div>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>

