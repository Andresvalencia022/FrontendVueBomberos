<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

import servicioBombero from "../assets/img/imgservicio.jpg";
import AboutUs from "../components/aboutUs.vue";
import NewsVue from "../components/news.vue";
import Event from "../components/event.vue";

import fotolamerced from "../assets/img/la_merced.jpeg";
import bomberomovible from "../assets/img/bomberomovible.png";

import { useControlPagineStore } from "../stores/controlPaginate";
const controlPagine = useControlPagineStore();
const { sections } = controlPagine;

import { UseModalStore } from "../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modalDetalle } = ModalStore;

import { UsePublicWinningTicketStore } from "../stores/UsePublicWinningTicket"
const PublicWinningTicketStore = UsePublicWinningTicketStore();


onMounted(() => {
  PublicWinningTicketStore.last_winner();
});

</script>

<template>
  <div class="h-[30rem] -mt-1 w-full overflow-hidden relative">
    <img class="w-full -mt-20 saturate-150" :src="fotolamerced" alt="" />
    <div class="w-3/5 absolute top-72 -right-80 text-white bg-gray-700 opacity-85 p-5 text-2xl animate-slide-left">
      El Cuerpo Oficial de Bomberos la merced es la institución en el manejo de
      desastres. Un equipo conformado por más de 20 hombres y mujeres expertos
      en la respuesta de emergencias, está disponibles 24 horas y siete días a
      la semana para atender el llamado ciudadano.
    </div>
    <img
      class="w-80 absolute top-0 -right-80 transform transition-transform duration-200 filter drop-shadow-xl animate-slide-left"
      :src="bomberomovible" alt="" />
  </div>
  <div class="w-[74rem] m-auto relative pt-10">

    <section id="servicios" class="my-4 pt-12 px-4">
  <!-- Título principal -->
  <div class="text-center mb-4">
    <h1 class="text-3xl font-bold">Servicio</h1>
  </div>

  <!-- Contenido en grid -->
  <article class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <!-- Servicio a la Ciudadanía -->
    <div>
      <h2 class="text-2xl font-semibold text-center mb-4">Servicio a la Ciudadanía</h2>
      <p class="text-justify text-gray-700 leading-relaxed">
        A través de la Oficina de Servicio al Ciudadano se busca acercar al usuario
        a la Unidad Administrativa Cuerpo Oficial de Bomberos de La Merced, Caldas,
        con el propósito de mejorar la calidad, oportunidad y eficiencia de sus servicios...
      </p>
    </div>

    <!-- Imagen -->
    <div class="overflow-hidden rounded-lg shadow-lg">
      <img :src="servicioBombero" alt="Servicio de Bomberos" class="w-full h-80 object-cover" />
    </div>
  </article>

  <!-- Misión y Visión -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    <!-- Misión -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center mb-4">Misión</h2>
      <p class="text-justify text-gray-700 leading-relaxed">
        Proteger la vida, el ambiente y el patrimonio, a través de la gestión
        integral de riesgos de incendios, atención de rescates en todas sus modalidades...
      </p>
    </div>

    <!-- Visión -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center mb-4">Visión</h2>
      <p class="text-justify text-gray-700 leading-relaxed">
        Al 2030, ser el mejor cuerpo de bomberos de Colombia soportado en el compromiso
        de sus colaboradores y la confianza de los ciudadanos...
      </p>
    </div>
  </div>
</section>


    <Event></Event>

    <NewsVue></NewsVue>

    <AboutUs></AboutUs>
    <div v-if="!modalDetalle.mostrar">
      <div v-if="sections.statelottery" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-2/5 bg-white/30 border border-red-500 
         rounded-xl p-4 shadow-lg flex items-center justify-between gap-4 backdrop-blur-md 
         transition-all ease-in-out duration-500"
        :class="sections.Animationlottery ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'">
        <!-- Último sorteo -->
        <div class="w-1/3 text-center">
          <h1 class="font-PoetsenOne text-lg text-gray-900">Último sorteo</h1>
          <p class="text-sm text-gray-800 font-semibold">
            {{ PublicWinningTicketStore.objectPublicWinningTicket.game_date || "No disponible" }}
          </p>
        </div>

        <!-- Número ganador -->
        <div class="w-1/3 flex flex-col items-center">
          <span class="px-4 py-2 text-white bg-red-600 rounded-xl text-3xl font-extrabold shadow-lg tracking-wider">
            {{ PublicWinningTicketStore.objectPublicWinningTicket.winning_number || "--" }}
          </span>
          <p class="text-base text-gray-900 mt-1 font-bold tracking-wide">Número ganador</p>
        </div>

        <!-- Botón de últimos sorteos -->
        <div class="w-1/3 flex justify-center">
          <RouterLink to="/loteria" class="block w-full max-w-[140px] rounded-xl text-white bg-red-700 hover:bg-red-800 
             focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-xs py-2 text-center 
             transition-all shadow-md">
            Últimos sorteos
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes slide-left {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.animate-slide-left {
  animation: slide-left 2s linear forwards;
}

</style>
