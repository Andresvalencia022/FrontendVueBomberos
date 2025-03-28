<script setup>
import { UseWinningTicketStore } from "../../stores/UseWinningTicket";
const WinningTicketStore = UseWinningTicketStore();
const {objectWinningTicket} = WinningTicketStore;
</script>
<template>
 <div class="max-w-lg mx-auto p-6 m-7 bg-white rounded-xl shadow-lg border border-gray-300"
      :class="{'max-h-[500px] overflow-auto': WinningTicketStore.isScrollable}"
 >
  <!-- Encabezado -->
  <div class="text-center mb-6">
    <h2 class="text-3xl font-bold text-gray-800">
      Número Ganador:
      <span class="text-red-600">{{ objectWinningTicket.winning_number }}</span>
    </h2>
  </div>

  <!-- Contenido en cuadrícula -->
  <div class="grid grid-cols-1 gap-4">
    <div class="border-b pb-2">
      <p class="text-sm font-semibold text-gray-500">📅 Fecha de juego</p>
      <p class="text-lg font-medium text-gray-800">{{ objectWinningTicket.game_date }}</p>
    </div>
    <div class="border-b pb-2">
      <p class="text-sm font-semibold text-gray-500">🏆 Nombre del Ganador</p>
      <p class="text-lg font-medium text-gray-800">{{ objectWinningTicket.winning_name }}</p>
    </div>
    <div class="border-b pb-2">
      <p class="text-sm font-semibold text-gray-500">📞 Teléfono</p>
      <p class="text-lg font-medium text-gray-800">{{ objectWinningTicket.phone }}</p>
    </div>
  </div>

  <!-- Sección de descripción -->
  <div class="mt-6">
    <h3 class="text-xl font-bold text-gray-800 border-b pb-2">Descripción</h3>
    <p class="mt-4 text-gray-700 leading-relaxed text-justify">
      {{ objectWinningTicket.description }}
    </p>
  </div>
</div>

</template>