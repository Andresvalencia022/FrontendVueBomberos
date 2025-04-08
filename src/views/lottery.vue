<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

import { UsePublicWinningTicketStore } from "../stores/UsePublicWinningTicket";
const PublicWinningTicketStore = UsePublicWinningTicketStore();
const { objectPublicWinningTicket, loader } = PublicWinningTicketStore;

onMounted(() => {
  PublicWinningTicketStore.winners();
});
</script>

<template>
  <div class="min-h-full">
    <header class="shadow bg-gray-900 text-white">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
        <h1 class="text-3xl font-bebasNeue text-red-500 hover:text-red-700">
          Loteria Bomberos
        </h1>
        <RouterLink to="/"
          class="flex items-center p-2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm">
          <svg class="w-5 h-5 mr-1 text-white" aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
          </svg>
          <p>Inicio</p>
        </RouterLink>
      </div>
    </header>

<!-- Loader mientras se cargan los datos -->
<div
  v-if="loader"
  class="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-red-900"
>
  <div class="flex flex-col items-center space-y-4">
    <div class="w-16 h-16 border-4 border-white border-t-red-700 rounded-full animate-spin"></div>
    <p class="text-white text-xl font-semibold">Cargando resultados...</p>
  </div>
</div>    


<!-- Contenido principal -->
    <div class="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-red-900">
      <div class="w-full max-w-5xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 font-sans">
        <h1 class="text-center text-4xl font-extrabold text-red-700 border-b-4 border-red-500 pb-3 uppercase">
          Últimos Resultados del Sorteo
        </h1>

        <div class="flex flex-wrap lg:flex-nowrap mt-6 gap-6">
          <div class="w-full lg:w-3/4 bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 class="text-3xl font-semibold text-center text-gray-800 mb-5">
              Nuevo Número Ganador 🎉
            </h2>
            <ul class="space-y-4 text-lg text-gray-800">
              <li class="flex items-center">
                <span class="font-bold">Número Ganador:</span>
                <span class="text-red-700 font-bold text-2xl ml-2">{{
                  objectPublicWinningTicket.winning_number
                }}</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold">Fecha del Sorteo Realizado:</span>
                <span class="ml-2">{{
                  objectPublicWinningTicket.game_date
                }}</span>
              </li>
            </ul>
            <p class="mt-5 text-gray-700 text-lg leading-relaxed">
              ¡Felicitaciones al ganador! Pronto publicaremos más sorteos,
              ¡mantente atento!
            </p>
          </div>

          <div class="w-full lg:w-1/4">
            <div class="bg-red-700 text-white text-center font-bold text-xl py-3 rounded-t-lg">
              Últimos Números Ganadores
            </div>
            <div class="p-5 bg-gray-50 rounded-b-lg shadow-md text-lg" 
            v-if="PublicWinningTicketStore.arrayPublicWinningTicket.length > 0">
              <ul class="text-gray-800 space-y-3" v-for="winner in PublicWinningTicketStore.arrayPublicWinningTicket"
                :key="winner.id" :winner="winner">
                <li class="border-b pb-2">
                  {{ winner.winning_number }} -
                  <span class="text-gray-500 text-sm">Fecha: {{ winner.game_date }}</span>
                </li>
              </ul>
            </div>
            <!--  -->
            <div v-else
              class="flex flex-col  items-center justify-center p-6 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-md">
              <div class="bg-red-500 text-white p-4 rounded-full shadow-lg">
                <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 17v-2H5v2h4zm6-2v2h4v-2h-4zm3-4H6M7 9h10m-9-4h8M5 19h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                </svg>
              </div>
              <p class="text-lg font-bold text-center text-gray-800 mt-4">¡No hay resultados aún!</p>
              <p class="text-gray-600 text-sm text-center max-w-sm">
                Los resultados del sorteo aún no están disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
