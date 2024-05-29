
<script setup>
import { RouterLink } from "vue-router";

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

</script>

<template>
  <div class="h-[30rem] -mt-1 w-full overflow-hidden relative">
    <img class="w-full -mt-20 saturate-150" :src="fotolamerced" alt="" />
    <div
      class="w-3/5 absolute top-72 -right-80 text-white bg-gray-700 opacity-85 p-5 text-2xl animate-slide-left"
    >
      El Cuerpo Oficial de Bomberos la merced es la institución en el manejo de
      desastres. Un equipo conformado por más de 20 hombres y mujeres expertos
      en la respuesta de emergencias, está disponibles 24 horas y siete días a
      la semana para atender el llamado ciudadano.
    </div>
    <img
      class="w-80 absolute top-0 -right-80 transform transition-transform duration-200 filter drop-shadow-xl animate-slide-left"
      :src="bomberomovible"
      alt=""
    />
  </div>
  <div class="w-[74rem] m-auto relative">
    <div id="servicios" class="my-2 mt-9">
      <div class="my-10">
        <h1
          class="text-3xl pt-10 font-sans subpixel-antialiased font-bold text-center"
        >
          Servicio
        </h1>
      </div>
      <article class="grid grid-cols-2 gap-4">
        <div class="flex flex-col justify-center items-center p-2">
          <h1 class="my-6 font-sans text-2xl font-semibold">
            Servicio a la Ciudadanía
          </h1>
          <p>
            A través de la Oficina de Servicio al Ciudadano se busca acercar al
            usuario a la Unidad Administrativa Cuerpo Oficial de Bomberos de la
            merced caldas. con el propósito de mejorar la calidad, oportunidad y
            eficiencia de sus servicios. La Entidad es consciente de que la
            ciudadanía es el eje de la función pública, por eso sus esfuerzos
            están encaminados a satisfacer las necesidades de sus usuarios. Por
            lo anterior, en la U.A.E. Cuerpo Oficial de Bomberos de la merced
            caldas se ha conformado un equipo para servir a la comunidad desde
            la Oficina de Servicio al Ciudadano, bajo la normatividad del
            decreto 2623 de 2009.
          </p>
        </div>
        <div class="h-96 bg-slate-400 overflow-hidden rounded-lg">
          <img :src="servicioBombero" alt="" srcset="" />
        </div>
        <div
          class="flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-[0px_0px_4px_1px_#718096]"
        >
          <h1 class="my-6 font-sans text-2xl font-semibold">Misión</h1>
          <p>
            Proteger la vida, el ambiente y el patrimonio, a través de la
            gestión integral de riesgos de incendios, atención de rescates en
            todas sus modalidades e incidentes con materiales peligrosos en
            Bogotá y su entorno
          </p>
        </div>
        <div
          class="flex flex-col justify-center items-center p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-[0px_0px_4px_1px_#718096]"
        >
          <h1 class="my-6 font-sans text-2xl font-semibold">Visión</h1>
          <p>
            Al 2030, ser el mejor cuerpo de bomberos de Colombia soportado en el
            compromiso de sus colaboradores y la confianza de los ciudadanos,
            reconocido a nivel mundial por su fortaleza técnica y capacidad de
            gestión.
          </p>
        </div>
      </article>
    </div>
    <Event></Event>

    <NewsVue></NewsVue>

    <AboutUs></AboutUs>
    <div v-if="!modalDetalle.mostrar">
      <div
        v-if="sections.statelottery"
        class="w-3/5 flex m-auto overflow-hidden bg-white rounded-lg p-2 fixed bottom-2 right-72 border border-red-500 transition-all ease-in-out duration-500"
        :class="[sections.Animationlottery ? ' bg-opacity-80' : 'opacity-0']"
      >
        <div class="p-2 w-4/12 text-center">
          <h1 class="font-PoetsenOne text-xl">Ultimo sorteo</h1>
          <p class="text-xl">10/06/24</p>
        </div>
        <div class="p-2 w-4/12">
          <p class="flex justify-center font-PoetsenOne text-xl">
            <span
              class="p-2 px-3 mx-1 text-center text-white bg-red-600 rounded-lg"
              >1</span
            >
            <span
              class="p-2 px-3 mx-1 text-center text-white bg-red-600 rounded-lg"
              >2</span
            >
            <span
              class="p-2 px-3 mx-1 text-center text-white bg-red-600 rounded-lg"
              >8</span
            >
            <span
              class="p-2 px-3 mx-1 text-center text-white bg-red-600 rounded-lg"
              >8</span
            >
          </p>
          <p class="text-center text-xl">Numero ganado</p>
        </div>
        <div class="p-2 w-4/12 content-center">
         <RouterLink to="/loteria" class="block rounded-lg text-white my-2 w-11/12 m-auto bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
         Consultar Ganador
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



