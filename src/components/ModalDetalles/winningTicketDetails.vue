<script setup>
import { UseWinningTicketStore } from "../../stores/UseWinningTicket";
const WinningTicketStore = UseWinningTicketStore();
const {objectWinningTicket} = WinningTicketStore;
</script>
<template>
  <div class="pb-3 m-7">
    <div class="m-3">
      <h1 class="font-PoetsenOne text-2xl">Numero Ganador: {{objectWinningTicket.winning_number}}</h1>
    </div>
    <div class="m-3  text-lg">
      <h1 class="font-PoetsenOne">Fecha de juego: <samp class="pl-2 font-normal">{{objectWinningTicket.game_date}}</samp></h1>
    </div>
    <div class="m-3  text-lg">
      <h1 class="font-PoetsenOne">Nombre del Ganador: <samp class="pl-2 font-normal">{{objectWinningTicket.winning_name}}</samp></h1>
    </div>
    <div class="m-3  text-lg">
      <h1 class="font-PoetsenOne">Teléfono: <samp class="pl-2 font-normal">{{objectWinningTicket.phone}}</samp></h1>
    </div>
    <div class="m-3">
      <h1 class="font-PoetsenOne">Descripción:</h1>
      <p class="text-justify">
        {{objectWinningTicket.description}}
      </p>
    </div>
  </div>
</template>