<script setup>
import logobomberos from "../../assets/img/Bomberos.png";
import ModalUsers from "../../components/Modal/modalUsers.vue";
import Modal from '../../components/ModalDetalles/Modal.vue'
import { onMounted } from "vue";

import { UseModalStore } from "../../stores/UseModalStore";
const ModalStore = UseModalStore();
const {modalDetalle, show_modalDetalle } = ModalStore;

import {UseUserStore} from '../../stores/UseUserStore';
const UserStore = UseUserStore();
const { modal, show_modal, readUser } = UserStore;


onMounted(() => {
  readUser();
})

</script>

<template>
  <div>
    <div class="flex p-2 items-center justify-between">
      <h1 class="mt-2 ml-9 text-xl font-PoetsenOne">
        Administrador de Usuario
      </h1>
      <a
        class="items-center mt-1 mr-6 px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="show_modal('modal_new_registration')"
      >
        Nuevo usuario
      </a>
    </div>
    <div class="m-10 grid gap-x-2 gap-y-4 grid-cols-3">
      <div
        v-for="user in UserStore.arrayUser"
        :key="user.id"
        :user="user"
       
        class="w-full p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex">
          <h5
            class="w-9/12 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{user.post}}
          </h5>
          <div class="flex justify-end w-5/12 gap-x-3 gap-y-4 grid-cols-2">
            <div class="w-11 bg-white rounded-full overflow-hidden">
              <img :src="logobomberos" class="rounded-full" alt="" />
            </div>
          </div>
        </div>

        <div
          class="flex gap-x-32 gap-y-4 grid-cols-2 mb-3 font-normal text-gray-700 dark:text-gray-400"
        >
          <article>
            <p>{{user.name}} {{user.last_name}}</p>
          </article>
        </div>
        <a
          href="#"
          class="block items-center px-3 py-2 w-full text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="show_modalDetalle('user_detaid',user.id)"
        >
          Ver detalles
        </a>
      </div>
    </div>
  </div>
  <ModalUsers v-if="modal.mostrar" ></ModalUsers>
  <Modal v-if="modalDetalle.mostrar"></Modal>

</template>