<script setup>
import { storeToRefs } from 'pinia'; // ← ESTA LÍNEA ES LA CLAVE 🔑
import { UseEventStore } from "../../stores/UseEventStore";
import { UsePublicEventStore } from "../../stores/UsePublicEventStore";

const EventStore = UseEventStore();
const { objectEvent } = EventStore;

const PublicEventStore = UsePublicEventStore();
const { PublicStatusModifier, objectPublicEvents } = storeToRefs(PublicEventStore);

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
      <p class="text-gray-600 text-justify whitespace-pre-line leading-relaxed">
        {{ objectPublicEvents.description }}
      </p>
    </div>

    <!-- Fechas de inicio y fin -->
    <div class="flex justify-between text-lg font-semibold text-gray-700">
      <div class="w-1/2 text-center border-r border-gray-300">
        <h2 class="font-bold text-gray-800">Fecha:</h2>
        <p>{{ objectPublicEvents.date }}</p>
      </div>
      <div class="w-1/2 text-center">
        <h2 class="font-bold text-gray-800">Ubicación</h2>
        <p>{{ objectPublicEvents.location }}</p>
      </div>
    </div>

    <!-- Hora del evento -->
    <div class="mt-6 text-center">
      <h2 class="font-bold text-gray-800 text-lg">Hora del evento</h2>
      <p class="text-gray-700 text-lg">{{ objectPublicEvents.time }}</p>
    </div>
  </div>

  <!-- Privado -->
  <div
  class="p-6 m-7 bg-white rounded-2xl shadow-xl border border-gray-300 max-w-2xl mx-auto"
 :class="{'max-h-[500px] overflow-auto': EventStore.isScrollable}"
  v-else
>
  <!-- Encabezado del Modal -->
  <div class="mb-4 text-center">
    <h1 class="font-PoetsenOne text-4xl text-gray-900 tracking-wide">
      {{ objectEvent.event_name }}
    </h1>
  </div>

  <!-- Descripción -->
  <div class="mb-6">
    <p class="text-gray-700 text-justify leading-relaxed text-lg whitespace-pre-line">
      {{ objectEvent.description }}
    </p>
  </div>

  <!-- Fecha y Dirección -->
  <div class="flex justify-between text-lg font-medium text-gray-800 bg-gray-100 p-4 rounded-lg">
    <div class="w-1/2 text-center border-r border-gray-400">
      <h2 class="font-bold text-gray-900 text-lg">📅 Fecha</h2>
      <p class="text-gray-700">{{ objectEvent.date }}</p>
    </div>
    <div class="w-1/2 text-center">
      <h2 class="font-bold text-gray-900 text-lg">📍 Dirección</h2>
      <p class="text-gray-700">{{ objectEvent.location }}</p>
    </div>
  </div>

  <!-- Hora del evento -->
  <div class="mt-6 text-center bg-gray-200 p-3 rounded-lg">
    <h2 class="font-bold text-gray-900 text-lg">⏰ Hora del evento</h2>
    <p class="text-gray-800 text-lg">{{ objectEvent.time }}</p>
  </div>
</div>

</template>
