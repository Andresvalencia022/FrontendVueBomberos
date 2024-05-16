<script setup>
import { RouterView } from "vue-router";
import  Routerlink  from "./components/UI/Router-Link.vue";
import logobomberos from "./assets/img/Bomberos.png";
import llamar from "./assets/img/llamar.png";
import { onUnmounted, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { UseModalStore } from "./stores/UseModalStore";
import { useControlPagineStore } from "./stores/controlPaginate";

const ModalStore = UseModalStore();
const { modalDetalle } = ModalStore;

const controlPagine = useControlPagineStore();
const { sections, handleScroll } = controlPagine;

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
const lottery = computed(() => route.name === "lottery");

</script>

<template>
  <div v-if="login">
     <RouterView />
  </div>

   <div v-else-if="lottery">
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
          :class="[sections.state ? 'fixed' : '']" v-if="!modalDetalle.mostrar"
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
   <div v-else>
    <div class="flex">
      <div class="w-1/5 bg-white h-[35rem] border-r-4 border-black">
        <div class="grid grid-cols-2 place-content-center px-6 py-3 bg-red-700">
            <img :src="logobomberos" alt="LogoBomberos" class="w-20">
            <h2 class="text-center content-center font-medium text-xl text-white"> Bomberos la merced</h2>
        </div>
        <div class="mt-4">
           <ul>
            <li class="my-4 mx-1 font-medium  hover:bg-red-600 hover:text-white p-2"><Routerlink to="event">Eventos</Routerlink></li>
            <li class="my-4 mx-1 font-medium  hover:bg-red-600 hover:text-white p-2"><Routerlink to="news">Noticias</Routerlink></li>
            <li class="my-4 mx-1 font-medium  hover:bg-red-600 hover:text-white p-2"><Routerlink to="winningTicket">Nuevo Ganador</Routerlink></li>
            <li class="my-4 mx-1 font-medium  hover:bg-red-600 hover:text-white p-2"><Routerlink to="users">Usuarios</Routerlink></li>
           </ul>
        </div>   
      </div>
       <div class="w-4/5">
        <RouterView /> 
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

