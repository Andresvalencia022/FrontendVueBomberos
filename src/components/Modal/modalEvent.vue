<script setup>
import Datepicker from "vue3-datepicker";
import Alert from '../UI/Alert.vue'

import { UseEventStore } from "../../stores/UseEventStore";
const EventStore = UseEventStore();
const { objectEvent, addEvent, modal, hideModel, editMode } = EventStore;

import {UseAlertStore}  from  "../../stores/UseAlertStore";
const alertStore = UseAlertStore();
</script>

<template>
  <div
    class="Modal fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center overflow-hidden transition-all ease-in-out duration-700"
    :class="[modal.animar ? 'bg-opacity-70' : 'opacity-0']"
  >
    <div
      class="content w-2/4 pt-2 justify-center overflow-hidden transition-all ease-in-out duration-1000"
      :class="[modal.animar ? ' bg-opacity-70' : 'opacity-0']"
    >
      <div class="bg-white relative rounded-lg">
        <h1
          class="text-center p-4 text-2xl text-white bg-red-700 rounded-lg mb-5"
        >
          Registrar Eventos
        </h1>
        <h1
          class="absolute -top-1 -right-1 h-7 w-7 text-center text-xl text-white rounded-full cursor-pointer"
          @click="hideModel('cerrarSinGuardarEvent')"
        >
          x
        </h1>
         <!-- Vista de alerta en formulario -->
        <Alert
          v-if="alertStore.visible"
          :class="['p-4 rounded',alertStore.classAlert]"
          >{{ alertStore.message }}
        </Alert>
        
        <form class="block px-9 pb-5" @submit.prevent="addEvent()">
          <div class="sm:col-span-4">
            <div class="w-full px-0.5">
              <label
                for="event_name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Titulo del evento</label
              >
              <div class="mt-2">
                <input
                  id="event_name"
                  name="event_name"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                  v-model="objectEvent.event_name"
                />
              </div>
            </div>
          </div>
          <div class="flex sm:col-span-4">
            <div class="w-1/2 px-0.5">
              <label
                for="date"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Fecha:</label
              >
              <div class="mt-2">
                <Datepicker
                  :style="{
                    '--vdp-hover-bg-color': '#ad0b0b',
                    '--vdp-selected-bg-color': '#ad0b0b',
                  }"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                  v-model="EventStore.date"
                />
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="location"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Ubicación</label
              >
              <div class="mt-2">
                <input
                  id="location"
                  name="location"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                  v-model="objectEvent.location"
                />
              </div>
            </div>
          </div>
          <div class="mt-2">
            <label
              for="time"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Hora
            </label>
            <input
              id="time"
              name="time"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500 sm:text-sm"
              v-model="objectEvent.time"
            />

           <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Por favor, introduce una hora válida en formato de 24 horas (1 a 24).<samp class="font-bold  hover:text-red-600 "> Ejemplo: 13:30.</samp></p>
          </div>
          <div class="sm:col-span-4">
            <label
              for="description"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Descripcion</label
            >
            <div class="mt-2">
              <textarea
                id="description"
                name="description"
                rows="5"
                cols="50"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500"
                v-model="objectEvent.description"
              ></textarea>
            </div>
          </div>
      
          <div class="mt-5 mb-5">
            <button type="submit"
              class="w-full block text-white bg-red-600 hover:bg-red-800 py-2 font-bold text-base rounded-lg">
              {{ editMode ? "Actualizar" : "Registrar" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

