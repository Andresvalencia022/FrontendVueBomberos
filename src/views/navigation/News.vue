<script setup>
import ModalNews from "../../components/Modal/modalNews.vue";
import Modal from '../../components/ModalDetalles/Modal.vue'

import { UseModalStore } from "../../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modal, modalDetalle, show_modal } = ModalStore;

</script>
<template>
    <div>
    <div class="flex p-2 justify-between">
      <h1 class="mt-2 ml-9 text-xl font-PoetsenOne">Administrador de noticias</h1>
      <a
          class="items-center mt-1 mr-6 px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="show_modal('modal_new_registration')"
        >
           Nueva noticia  
        </a>
    </div>
    <div class="m-10 grid gap-x-8 gap-y-4 grid-cols-2">
      <div
        class="w-full p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex">
          <h5
            class="w-9/12 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Titulo de la noticia
          </h5>
          <div class="flex justify-end w-5/12 gap-x-3 gap-y-4 grid-cols-2 ">
            <a href="" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-green-500 hover:text-green-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-red-600 hover:text-red-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="flex gap-x-32 gap-y-4 grid-cols-2 mb-3 font-normal h-20 overflow-hidden text-gray-700 dark:text-gray-400">
          <article>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Iusto eum vel beatae, a cum odit architecto nihil! Officiis ratione nostrum excepturi 
              mollitia perspiciatis fuga corrupti veniam consectetur amet? Deserunt, et.</p>
          </article>
        </div>
        <a
          href="#"
          class="block items-center  px-3 py-2 w-full text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="show_modal('modalDetails')"
        >
         Ver mas detalles   
        </a>
      </div>
    </div>
  </div>
  <ModalNews v-if="modal.mostrar"></ModalNews>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>
