
<script setup>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'


import servicioBombero from "../assets/img/imgservicio.jpg";
import AboutUs from "../components/aboutUs.vue";
import NewsVue from "../components/news.vue";
import Event from "../components/event.vue";

import foto from "../assets/img/imagenes/Foto.jpg";
import imageDos from "../assets/img/imagenes/fotoDos.jpg";
import imageTres from "../assets/img/imagenes/FotoTres.jpg";

import { ref } from 'vue';

const images = ref([
  { url:  foto },
  { url:  imageDos },
  { url:  imageTres },
])

</script>

<template>
  <div class="w-[80rem] m-auto">
    <div id="img" class="h-72 mt-9 overflow-hidden">
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="image in images " :key="images">
          <div class="carousel__item" >
            <img :src="image.url" alt="carousel image" class="w-full px-1 object-cover" />
          </div>
        </Slide>
        <template #addons>
          <Navigation class=" bg-red-100" />
        </template>
      </Carousel>
    </div>
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
  </div>
</template>

