<script setup>
import logobomberos from "../../assets/img/Bomberos.png";
import ModalUsers from "../../components/Modal/modalUsers.vue";
import Modal from "../../components/ModalDetalles/Modal.vue";
import Loader from "../../components/UI/loader.vue";
import { onMounted } from "vue";

import { UseModalStore } from "../../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modalDetalle, show_modalDetalle } = ModalStore;

import { UseUserStore } from "../../stores/UseUserStore";
const UserStore = UseUserStore();
const { modal, show_modal, readUser, searchrecord } = UserStore;

onMounted(() => {
  readUser();
});
</script>

<template>
  <div>
    <div class="flex p-2 items-center justify-between">
      <h1 class="mt-2 ml-9 text-xl font-PoetsenOne">
        Administrador de Usuario
      </h1>
      <a class="items-center mt-1 mr-6 px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500"
        @click="show_modal('new_registration')">
        Nuevo usuario
      </a>
    </div>
    <!--  Utilizo acción Loader (Cargar...)-->
    <div v-if="UserStore.loader" class="flex justify-center items-center py-10 h-[50vh]">
      <Loader></Loader>
    </div>
    <div v-else class="m-10 grid gap-x-2 gap-y-4 grid-cols-3">
      <div v-for="user in UserStore.arrayUser" :key="user.id"
        class="w-full p-6 bg-gray-300 border border-gray-400 rounded-lg shadow">
        <!-- CABECERA: Título + Iconos -->
        <div class="flex justify-between items-center mb-4">
          <h5 class="text-lg font-bold tracking-tight text-gray-900 first-letter:uppercase">
            {{ user.post }}
          </h5>

          <div class="flex items-center gap-3">
            <!-- Botón de editar -->
            <button @click="searchrecord('edit', user.id)" class="p-2 rounded-lg hover:bg-gray-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-7 h-7 text-green-500 hover:text-green-700">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </button>

            <!-- Logo -->
            <img :src="logobomberos" class="w-8 h-8 rounded-lg" alt="Logo" />
          </div>
        </div>

        <!-- INFORMACIÓN DEL USUARIO -->
        <p class="text-gray-700  text-base">
          {{ user.name }} {{ user.last_name }}
        </p>

        <!-- BOTÓN DE VER DETALLES -->
        <button @click="show_modalDetalle('user_detail', user.id)"
          class="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300  transition-all">
          Ver detalles
        </button>
      </div>
    </div>
  </div>
  <ModalUsers v-if="modal.mostrar"></ModalUsers>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>