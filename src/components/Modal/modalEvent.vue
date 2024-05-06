<script setup>
import Datepicker from "vue3-datepicker";

import { UseEventStore } from "../../stores/UseEventStore";
const EventStore = UseEventStore();
const { hideModel, modal, start_date, end_date, objectEvent, addEvent } = EventStore;
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
          Registrar Eventos
        </h1>
        <h1
          class="absolute -top-1 -right-1 h-7 w-7 text-center text-xl text-white rounded-full cursor-pointer"
          @click="hideModel()"
        >
          x
        </h1>
        <!-- <Alerta
          v-if="state.showAlertError"
          :class="['bg-red-600 text-white']"
          >{{ state.errorMessage }}
        </Alerta>
         -->
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
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="objectEvent.event_name"
                />
              </div>
            </div>
          </div>
          <div class="flex sm:col-span-4">
            <div class="w-1/2 px-0.5">
              <label
                for="stock"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Fecha de inicio</label
              >
              <div class="mt-2">
                <Datepicker
                  :minimumView
                  :style="{
                    '--vdp-hover-bg-color': '#ad0b0b',
                    '--vdp-selected-bg-color': '#ad0b0b',
                  }"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="start_date"
                />
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="stock"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Fecha de Fin</label
              >
              <div class="mt-2">
                <Datepicker
                  :minimumView
                  :style="{
                    '--vdp-hover-bg-color': '#ad0b0b',
                    '--vdp-selected-bg-color': '#ad0b0b',
                  }"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="end_date"
                />
                <!-- v-model="objectBarcode.amount" -->
              </div>
            </div>
          </div>
          <div class="mt-2">
            <label
              for="stock"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Hora
            </label>
            <input
              id="hour"
              name="hour"
              type="time"
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-red-500 sm:text-sm"
              v-model="objectEvent.hour"
            />

            <!-- <input type="time" id="time" class="bg-red-50 border leading-none border-red-300 text-red-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600" min="09:00" max="18:00" value="00:00" required /> -->
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
                rows="4"
                cols="50"
                class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="objectEvent.description"
              ></textarea>
            </div>
          </div>
          <div class="mt-5 mb-5">
            <button
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

