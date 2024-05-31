<script setup>
// Aquí puedes agregar cualquier lógica que necesites
import { RouterLink } from "vue-router";
</script>

<template>
   <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
    <div class="text-center">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <p class="text-2xl mb-8">Página no encontrada</p>
      <p class="text-lg mb-6">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <RouterLink
        to="/"
        class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Volver al Inicio
      </RouterLink>
    </div>
  </div>
</template>

