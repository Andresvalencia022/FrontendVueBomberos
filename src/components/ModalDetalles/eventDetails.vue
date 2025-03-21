<script setup>
import { UseEventStore } from "../../stores/UseEventStore";
import { UsePublicEventStore } from "../../stores/UsePublicEventStore";

const EventStore = UseEventStore();
const { objectEvent } = EventStore;

const PublicEventStore = UsePublicEventStore();
const { PublicStatusModifier, objectPublicEvents } = PublicEventStore;
</script>
<template>
  <!-- publico -->
  <div
    class="p-6 m-7 bg-white rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto"
    v-if="PublicStatusModifier"
  >
    <!-- Encabezado del Modal -->
    <div class="mb-4 text-center">
      <h1 class="font-PoetsenOne text-3xl text-gray-800">
        {{ objectPublicEvents.event_name }}
      </h1>
    </div>

    <!-- Descripción -->
    <div class="mb-6">
      <p class="text-gray-600 text-justify leading-relaxed">
        {{ objectPublicEvents.description }}
      </p>
    </div>

    <!-- Fechas de inicio y fin -->
    <div class="flex justify-between text-lg font-semibold text-gray-700">
      <div class="w-1/2 text-center border-r border-gray-300">
        <h2 class="font-bold text-gray-800">Fecha inicio</h2>
        <p>{{ objectPublicEvents.start_date }}</p>
      </div>
      <div class="w-1/2 text-center">
        <h2 class="font-bold text-gray-800">Fecha fin</h2>
        <p>{{ objectPublicEvents.end_date }}</p>
      </div>
    </div>

    <!-- Hora del evento -->
    <div class="mt-6 text-center">
      <h2 class="font-bold text-gray-800 text-lg">Hora del evento</h2>
      <p class="text-gray-700 text-lg">{{ objectPublicEvents.time }}</p>
    </div>
  </div>

  <!-- administrador -->
  <div
    class="p-6 m-7 bg-white rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto"
    v-else
  >
    <!-- Encabezado del Modal -->
    <div class="mb-4 text-center">
      <h1 class="font-PoetsenOne text-3xl text-gray-800">
        {{ objectEvent.event_name }}
      </h1>
    </div>

    <!-- Descripción -->
    <div class="mb-6">
      <p class="text-gray-600 text-justify leading-relaxed">
        {{ objectEvent.description }}
      </p>
    </div>

    <!-- Fechas de inicio y fin -->
    <div class="flex justify-between text-lg font-semibold text-gray-700">
      <div class="w-1/2 text-center border-r border-gray-300">
        <h2 class="font-bold text-gray-800">Fecha inicio</h2>
        <p>{{ objectEvent.start_date }}</p>
      </div>
      <div class="w-1/2 text-center">
        <h2 class="font-bold text-gray-800">Fecha fin</h2>
        <p>{{ objectEvent.end_date }}</p>
      </div>
    </div>

    <!-- Hora del evento -->
    <div class="mt-6 text-center">
      <h2 class="font-bold text-gray-800 text-lg">Hora del evento</h2>
      <p class="text-gray-700 text-lg">{{ objectEvent.time }}</p>
    </div>
  </div>
</template>
