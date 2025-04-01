<script setup>
import Facebook from "../assets/img/iconsRedes/icons8-facebook.png";

import Instagram from "../assets/img/iconsRedes/icons8-instagram.png";
import Whatsapp from "../assets/img/iconsRedes/icons8-whatsapp.png";
</script>
<template>
  <div id="quienes_somos" class="my-3 mt-12">
    <div class="my-10">
      <h1
        class="text-3xl pt-16 font-sans subpixel-antialiased font-bold text-center"
      >
        Sobre Nosotros
      </h1>
      <div class="w-16 h-1 bg-red-600 mx-auto mt-2"></div>
    </div>
    <div class="flex flex-row">
      <div class="w-3/5 mx-10">
        <!-- Sección "Quiénes somos" -->
        <h1 class="text-4xl pt-12 font-sans font-extrabold text-red-600">
          Quiénes somos
        </h1>
        <p class="mt-4 text-lg text-gray-700 leading-relaxed">
          El Cuerpo Oficial de Bomberos de La Merced, Caldas, es una Unidad
          Administrativa Especial del orden Distrital, adscrita a la Secretaría
          de Seguridad, Convivencia y Justicia. Con más de
          <span class="font-bold text-gray-900">127 años de historia</span>, nos
          dedicamos a la atención de emergencias en la capital del país.
        </p>

        <!-- Sección "Canales Telefónicos" -->
        <div class="mt-8">
          <h2 class="text-2xl font-bold text-red-600">Canales Telefónicos</h2>
          <p class="mt-2 text-lg text-gray-700 leading-relaxed">
            <span class="font-semibold text-gray-900"
              >Horario de Atención Telefónica:</span
            >
            Lunes a Viernes, 8:00 am - 4:00 pm (jornada continua).
          </p>
          <ul class="mt-2 text-lg text-gray-700 space-y-1">
            <li>
              <span class="font-semibold text-gray-900">Teléfono:</span> +57 601
              3 822 500 Ext. 40101 – 40102
            </li>
            <li>
              <span class="font-semibold text-gray-900">Celular:</span> +57 316
              473 95 99
            </li>
            <li>
              <span class="font-semibold text-gray-900">WhatsApp:</span> +57 317
              404 37 09
            </li>
          </ul>
        </div>

        <!-- Sección "Redes Sociales" -->
        <div class="mt-8">
          <h2 class="text-3xl font-bold text-red-600">Redes Sociales</h2>
          <div class="flex space-x-6 mt-4">
            <a href="#" class="transition-transform transform hover:scale-110">
              <svg
                class="w-12 h-12 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.04c-5.5 0-10 4.5-10 10 0 4.99 3.66 9.13 8.44 9.87v-6.98h-2.54v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.98c4.78-.74 8.44-4.88 8.44-9.87 0-5.5-4.5-10-10-10z"
                />
              </svg>
            </a>

            <a href="#" class="transition-transform transform hover:scale-110">
              <svg
                class="w-12 h-12 text-pink-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0-2A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9A7.5 7.5 0 0 0 24 16.5v-9A7.5 7.5 0 0 0 16.5 0h-9zM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5zM18.5 4A1.5 1.5 0 1 1 17 5.5 1.5 1.5 0 0 1 18.5 4z"
                />
              </svg>
            </a>
            <a href="#" class="transition-transform transform hover:scale-110">
              <svg
                class="w-12 h-12 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.04c5.523 0 10 4.477 10 10 0 2.639-1.022 5.038-2.697 6.847l1.935 4.068a.5.5 0 0 1-.622.672l-4.191-1.053A9.938 9.938 0 0 1 12 22.04c-5.523 0-10-4.477-10-10s4.477-10 10-10zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8c1.751 0 3.376-.57 4.71-1.526l.345-.24 2.452.616-1.117-2.347-.195-.24c1.228-1.372 1.905-3.137 1.905-5.263 0-4.418-3.582-8-8-8zm-1.925 3.92c.244-.008.494.001.748.027a.5.5 0 0 1 .443.364c.103.41.35 1.16.736 1.645a1.77 1.77 0 0 0 1.48.697c.385.02.79-.023 1.216-.127a.5.5 0 0 1 .513.192c.272.369.544.736.81 1.1a.5.5 0 0 1-.06.634c-.202.215-.407.428-.613.637-.466.468-.97.91-1.477 1.337-.808.673-1.652 1.305-2.61 1.744a.5.5 0 0 1-.527-.048 6.472 6.472 0 0 1-3.121-4.383c-.11-.607-.12-1.235.017-1.846a.5.5 0 0 1 .423-.385c.622-.065 1.253-.083 1.893-.062z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        class="w-full md:w-3/5 lg:w-2/5 bg-white shadow-xl rounded-2xl border border-gray-300 p-4 mx-4"
      >
        <!-- Encabezado -->
        <h2 class="text-lg font-semibold text-gray-700 text-center mb-3">
          📍 Ubicación - Bomberos Voluntarios La Merced
        </h2>

        <!-- Contenedor del Mapa -->
        <div
          class="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.0281922165157!2d-75.54748233053884!3d5.399785834815107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e470569c1287c4b%3A0x4fbaae3713bce9a8!2sBomberos%20voluntarios%20La%20Merced!5e0!3m2!1ses!2sco!4v1712180217575!5m2!1ses!2sco"
            class="w-full h-full rounded-xl"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>


