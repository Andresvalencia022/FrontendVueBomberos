<script setup>
import imagenlogin from "../assets/img/imgservicio.jpg";
import { reactive, ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";

import { UseUserStore } from "../stores/UseUserStore";
const UserStore = UseUserStore();
const {userObjectForm,  authenticateUser} = UserStore;

const showText = ref(false);

onMounted(() => {
  // Animar el texto que tiene el login
  setTimeout(() => {
    showText.value = true;
  }, 500);
});

// // voy a tomar el nombre de la ruta en la que estoy
const route = useRoute();
const login = computed(() => route.name === "login");

</script>

<template>
  <div v-if="login" class="flex h-screen w-full items-center justify-center bg-gradient-to-br from-gray-900 via-black to-red-900">
  <!-- Botón Volver -->
  <div class="absolute top-6 left-6">
    <RouterLink
          to="/"
          class="flex content-center p-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <svg
            class="w-5 h-5 mr-1 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
            />
          </svg>
          <p>Inicio</p>
        </RouterLink>
  </div>

  <!-- Contenedor del Formulario -->
  <div class="relative w-full max-w-md p-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 text-white">
    <h5 class="text-3xl font-bold text-center mb-6">🔥 Bienvenido</h5>
    
    <form @click.prevent="authenticateUser" class="space-y-6">
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="tuemail@correo.com"
          v-model="userObjectForm.email"
          class="w-full bg-transparent border border-gray-500 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-3 transition-all duration-300 outline-none focus:shadow-lg"
        />
      </div>

      <!-- Contraseña -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-300">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          v-model="userObjectForm.password"
          class="w-full bg-transparent border border-gray-500 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-3 transition-all duration-300 outline-none focus:shadow-lg"
        />
      </div>

      <!-- Enlace de Recuperación -->
      <div class="flex justify-between items-center">
        <a href="#" class="text-sm text-red-400 hover:underline">¿Olvidaste tu contraseña?</a>
      </div>

      <!-- Botón de Ingreso -->
      <button
        type="submit"
        class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-lg px-5 py-3 transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        🚀 Ingresar
      </button>
    </form>
  </div>
</div>
  <div v-else class="flex  w-full text-red-950">
     Hola desde narnia     
  </div>  
</template>

