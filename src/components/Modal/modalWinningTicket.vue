<script setup>
import Alert from '../UI/Alert.vue'
import Datepicker from "vue3-datepicker";

import {UseWinningTicketStore} from '../../stores/UseWinningTicket';
const WinningTicketStore = UseWinningTicketStore();
const { objectWinningTicket, modal, hideModel, stateAlert, addWinningTicket, editMode } = WinningTicketStore;

</script>

<template>
  <div
    class="Modal fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center overflow-hidden transition-all ease-in-out duration-700"
    :class="[modal.animar ? ' bg-opacity-70' : 'opacity-0']"
  >
    <div
      class="content w-2/4 pt-2 justify-center overflow-hidden transition-all ease-in-out duration-1000"
      :class="[modal.animar ? ' bg-opacity-70' : 'opacity-0']"
    >
      <div class="bg-white relative rounded-lg">
        <h1
          class="text-center p-4 text-2xl text-white bg-red-700 rounded-lg mb-5"
        >
          Nueva boleta ganadora
        </h1>
        <h1
          class="absolute -top-1 -right-1 h-7 w-7 text-center text-xl text-white rounded-full cursor-pointer"
          @click="hideModel('cerrarSinGuardarWinningTicket')"
        >
          x
        </h1>
        <Alert
           v-if="stateAlert.showAlert"
          :class="stateAlert.classAlert"
          >{{ stateAlert.Message }}
        </Alert>
        
        <form class="block px-9 pb-5" @submit.prevent="addWinningTicket()">
          <div class="sm:col-span-4 flex">
            <div class="w-1/2 px-0.5">
              <label
                for="winning_number"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Numero ganador</label
              >
              <div class="mt-2">
                <input
                  id="winning_number"
                  name="winning_number"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                  v-model="objectWinningTicket.winning_number "
                 />
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="last_name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Fecha del juego</label
              >
              <div class="mt-2">
                <Datepicker
                  :style="{
                    '--vdp-hover-bg-color': '#ad0b0b',
                    '--vdp-selected-bg-color': '#ad0b0b',
                  }"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                  v-model="WinningTicketStore.inputDate"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4 flex">
            <div class="w-1/2 px-0.5">
             <label
                for="winning_name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Nombre del ganador</label
              >
              <div class="mt-2">
                <input
                  id="winning_name"
                  name="winning_name"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                  v-model="objectWinningTicket.winning_name"
                />
              </div>
            </div>
            <div class="w-1/2 px-0.5">
               <label
                for="phone"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Telefono</label
              >
              <div class="mt-2">
                <input
                  id="phone"
                  name="phone"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                  v-model="objectWinningTicket.phone"
                />
              </div>
            </div>
          </div>
         <div class="sm:col-span-4">
            <label
              for="info"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Descripcion</label
            >
            <div class="mt-2">
              <textarea
                id="info"
                name="info"
                rows="10"
                cols="50"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                v-model="objectWinningTicket.description"
                ></textarea>
            </div>
          </div> 
          <div class="mt-5 mb-5">
            <button
              v-if="editMode"
              type="submit"
              class="w-full block text-white bg-red-600 hover:bg-red-800 py-2 font-bold text-base rounded-lg"
            >
              Actualizar
            </button>
            <button
             v-else
              type="submit"
              class="w-full block text-white bg-red-600 hover:bg-red-800 py-2 font-bold text-base rounded-lg"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

