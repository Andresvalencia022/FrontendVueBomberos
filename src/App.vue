<script setup>
import { RouterView } from "vue-router";
import logobomberos from "./assets/img/Bomberos.png";
import llamar from "./assets/img/llamar.png";

import { onUnmounted } from "vue";

import { RouterLink } from "vue-router";

import { useControlPagineStore } from "./stores/controlPaginate";
const controlPagine = useControlPagineStore();
const { sections, handleScroll } = controlPagine;


// Agregar el evento de scroll cuando se monta el componente
window.addEventListener("scroll", handleScroll);

// Quitar el evento de scroll cuando se desmonta el componente
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<template>
<div>
  <header  id="index" class="bg-red-500 w-full relative">
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
          <h1 class="font-bebasNeue text-4xl text-white">31374123331</h1>
        </div>
      </div>
    </div>
    <div class="nav m-auto my-1 relative z-20">
      <nav id="nav" class="top-0 left-0 w-full bg-gray-700 text-white py-2"
      :class="[sections.state ? 'fixed' : '']">
        <ul class="flex flex-row">
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
              class="nav-link block md:inline-block rounded hover:bg-black hover:text-white p-2 mx-1 text-xs uppercase hover:shadow-[-1px_6px_20px_1px_#718096]"
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

