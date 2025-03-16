<script setup>
// Aquí puedes agregar cualquier lógica que necesites
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="relative min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
  >
    <!-- Fondo con textura y efecto sutil -->
    <div class="absolute inset-0 bg-gray-800 opacity-30"></div>

    <div
      class="relative z-10 text-center max-w-lg p-10 bg-gray-950 bg-opacity-80 rounded-lg shadow-2xl"
    >
      <!-- SVG Icono de Bomberos con animación -->
      <svg
        class="w-24 h-24 mx-auto text-red-600 animate-bounce"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2z"
        />
      </svg>

      <!-- Título 404 con efecto neón -->
      <h1 class="text-8xl font-extrabold text-red-600 mt-4 relative">
        404
        <span
          class="absolute inset-0 blur-md opacity-75 text-red-500 animate-pulse"
          >404</span
        >
      </h1>

      <!-- Mensaje de error -->
      <p class="text-2xl font-semibold mt-2 text-gray-300">
        Página no encontrada
      </p>
      <p class="mt-3 text-lg text-gray-400 leading-relaxed">
        Lo sentimos, la página que buscas no existe o fue movida. Puedes
        regresar a la página principal o verificar la URL ingresada.
      </p>

      <!-- Botón de regreso con efecto -->
      <RouterLink
        to="/"
        class="mt-6 inline-block bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-red-700 transition duration-300 hover:scale-105"
      >
        Volver al Inicio
      </RouterLink>
    </div>
  </div>
</template>

