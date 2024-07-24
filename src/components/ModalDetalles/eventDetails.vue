<script setup>

import { UseEventStore } from "../../stores/UseEventStore";
const EventStore = UseEventStore();
const {objectEvent} = EventStore;

</script>
<template>
  <div class="pb-3 m-7">
    <div class="m-3">
      <h1 class="font-PoetsenOne text-2xl">{{ objectEvent.event_name }}</h1>
    </div>
    <div class="m-3">
      <p class="text-justify">
                 {{ objectEvent.description }}
      </p>
    </div>
    <div class="m-3 mt-6 flex text-center text-lg">
      <div class="w-1/2">
        <h1 class="font-PoetsenOne">Fecha inicio:  {{ objectEvent.start_date }}</h1>
      </div>
      <div class="w-1/2">
        <h1 class="font-PoetsenOne">Fecha fin: {{ objectEvent.end_date }}</h1>
      </div>
    </div>
    <div class="m-3 text-center text-lg">
      <h1 class="font-PoetsenOne">Hora del evento: {{ objectEvent.time }}</h1>
    </div>
  </div>
</template>
