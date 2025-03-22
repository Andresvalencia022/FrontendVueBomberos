<script setup>
import { RouterView } from "vue-router";
import Routerlink from "./components/UI/Router-Link.vue";
import logobomberos from "./assets/img/Bomberos.png";
import llamar from "./assets/img/llamar.png";
import { onUnmounted, computed, onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { UseUserStore } from "./stores/UseUserStore";

import { UseModalStore } from "./stores/UseModalStore";
import { useControlPagineStore } from "./stores/controlPaginate";

const ModalStore = UseModalStore();
const { modalDetalle } = ModalStore;

const controlPagine = useControlPagineStore();
const { sections, handleScroll } = controlPagine;

//Para traer el nombre del Usuario
const UserStore = UseUserStore();

// Agregar el evento de scroll cuando se monta el componente
window.addEventListener("scroll", handleScroll);

// Quitar el evento de scroll cuando se desmonta el componente
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// // voy a tomar el nombre de la ruta en la que estoy
const route = useRoute();
const login = computed(() => route.name === "login");
const Inicio = computed(() => route.name === "inicio");
const access = computed(() => route.name === "access");
const lottery = computed(() => route.name === "lottery");
const NotFound = computed(() => route.name === "NotFound");
</script>

<template>
  <div v-if="login">
    <RouterView />
  </div>

  <div v-else-if="lottery || NotFound">
    <RouterView />
  </div>

  <!-- else if -->
  <div v-else-if="Inicio">
    <header id="index" class="bg-red-500 w-full relative">
      <div class="head mx-auto max-w-6xl py-3 relative z-10">
        <div class="flex items-center">
          <div class="w-2/4 flex items-center justify">
            <img class="w-14" :src="logobomberos" alt="" />
            <h1 class="font-bebasNeue text-4xl pl-5 text-white">
              Cuerpo de Bomberos La Merced
            </h1>
          </div>
          <div class="w-2/4 flex justify-end items-center">
            <img class="w-44" :src="llamar" alt="" />
            <h1 class="font-bebasNeue text-3xl text-white">31374123331</h1>
          </div>
        </div>
      </div>
      <div class="nav m-auto my-1 relative z-20">
        <nav
          id="nav"
          class="top-0 left-0 w-full bg-gray-700 text-white py-2"
          :class="[sections.state ? 'fixed' : '']"
          v-if="!modalDetalle.mostrar"
        >
          <ul class="flex flex-row justify-center">
            <li>
              <a
                href="#index"
                class="nav-link block md:inline-block rounded hover:bg-black hover:text-white p-2 mx-1 text-xs uppercase hover:shadow-[-1px_6px_20px_1px_#718096]"
                @click="controlPagine.checkSection('index')"
                >Inicio</a
              >
            </li>
            <li>
              <a
                href="#servicios"
                class="nav-link block md:inline-block rounded hover:bg-black hover:text-white p-2 mx-1 text-xs uppercase hover:shadow-[-1px_6px_20px_1px_#718096] transition duration-500 ease-in-out"
                @click="controlPagine.checkSection('servicios')"
                >Servicios</a
              >
            </li>
            <li>
              <a
                href="#eventos"
                class="nav-link block md:inline-block rounded hover:bg-black hover:text-white p-2 mx-1 text-xs uppercase hover:shadow-[-1px_6px_20px_1px_#718096]"
                @click="controlPagine.checkSection('eventos')"
                >Eventos</a
              >
            </li>
            <li>
              <a
                href="#noticias"
                class="nav-link block md:inline-block rounded hover:bg-black hover:text-white p-2 mx-1 text-xs uppercase hover:shadow-[-1px_6px_20px_1px_#718096]"
                @click="controlPagine.checkSection('noticias')"
                >Noticias</a
              >
            </li>
            <li>
              <a
                href="#quienes_somos"
                class="nav-link block md:inline-block rounded hover:bg-black hover:text-white p-2 mx-2.5 text-xs uppercase hover:shadow-[-1px_6px_20px_1px_#718096]"
                @click="controlPagine.checkSection('quienes_somos')"
                >Quienes somos</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="bg-red-600 mt-8">
      <h1 class="text-center py-3 text-white">© 2024 Bomberos</h1>
    </footer>
  </div>
  <!-- Condición de vista si ya el usuario ya ingreso  -->
  <div v-else>
    <div class="flex items-center justify-between px-6 py-3 bg-red-700">
      <!-- Logo y Texto Centrados -->
      <div class="flex items-center">
        <img :src="logobomberos" alt="LogoBomberos" class="w-14" />
        <h2 class="ml-4 font-semibold text-xl text-white">
          Bomberos La Merced
        </h2>
      </div>

      <!-- Botón de Salida + Nombre de Usuario -->
      <div class="flex items-center gap-4">
        <span class="text-white font-medium"
          >{{ UserStore.objectUser.name }}
          {{ UserStore.objectUser.last_name }}</span
        >
        <a
          href="#"
          class="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200 ease-in-out"
        >
          Salir
          <svg
            class="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="flex h-screen">
      <!-- Menú Lateral -->
      <div
        class="w-1/6 bg-white ring-2 ring-gray-700 ring-offset-1 rounded-r-lg shadow-lg"
      >
        <div class="mt-6">
          <ul class="space-y-2">
            <li
              class="block px-4 py-3 text-lg font-medium text-gray-800 rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
            >
              <Routerlink to="event">Eventos</Routerlink>
            </li>
            <li
              class="block px-4 py-3 text-lg font-medium text-gray-800 rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
            >
              <Routerlink to="news">Noticias</Routerlink>
            </li>
            <li
              class="block px-4 py-3 text-lg font-medium text-gray-800 rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
            >
              <Routerlink to="winningTicket">Nuevo Ganador</Routerlink>
            </li>
            <li
              class="block px-4 py-3 text-lg font-medium text-gray-800 rounded-lg hover:bg-red-600 hover:text-white transition duration-200"
            >
              <Routerlink to="users">Usuarios</Routerlink>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-5/6" v-if="!access">
        <!-- renderizan las vistas según la ruta actual en la que te encuentres. -->
        <RouterView />
      </div>
      <div
        v-else
        class="w-5/6 flex items-center justify-center  bg-gradient-to-r from-red-700 to-red-500 text-white mx-auto"
      >
        <div
          class="bg-white bg-opacity-20 p-8 rounded-2xl shadow-2xl text-center backdrop-blur-lg w-full max-w-3xl"
        >
          <h1 class="text-3xl font-extrabold uppercase">
            🚒 Bienvenido a la Aplicación de Bomberos 🔥
          </h1>
          <p class="mt-3 text-base text-white/90 leading-relaxed">
            ¡Gracias por formar parte de nuestro equipo! Gestiona noticias,
            boletos y mantén a la comunidad informada.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Estilo para los enlaces de navegación */
.nav-link {
  @apply block opacity-70 transition-opacity duration-300;
}

.nav-link:hover {
  @apply opacity-100;
}
/* Estilo para el contenido debajo del encabezado fijo */

/* Desplazamiento suave hacia la sección correspondiente */
html {
  scroll-behavior: smooth;
}
</style>

