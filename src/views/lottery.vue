<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-full">
    <header class="shadow content-center">
      <div
        class="mx-auto content-center max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between"
      >
        <h1 class="text-3xl font-bebasNeue text-red-600 hover:text-red-800">
          Loteria Bomberos
        </h1>

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
    </header>
    <div
      class="mx-auto px-4 bg-slate-900 h-[35rem] flex items-center justify-center bg-backgroundImage bg-top bg-no-repeat bg-cover"
    >
      <div
        class="w-full max-w-5xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 font-sans"
      >
        <!-- Título principal -->
        <h1
          class="text-center text-4xl font-extrabold text-red-700 border-b-4 border-red-500 pb-3 uppercase"
        >
          Últimos Resultados del Sorteo
        </h1>

        <div class="flex flex-wrap lg:flex-nowrap mt-6 gap-6">
          <!-- Sección de información del ganador -->
          <div class="w-full lg:w-3/4 bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 class="text-3xl font-semibold text-center text-gray-800 mb-5">
              Nuevo Número Ganador 🎉
            </h2>

            <ul class="space-y-4 text-lg text-gray-800">
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 mr-3 text-red-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                <span class="font-bold">Número Ganador:</span>
                <span class="text-red-700 font-bold text-2xl ml-2">2001</span>
              </li>

              <li class="flex items-center">
                <svg
                  class="w-6 h-6 mr-3 text-red-700 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="font-bold">Fecha de Sorteo:</span>
                <span class="ml-2">10/06/24</span>
              </li>
            </ul>

            <!-- Descripción (sin título "Descripción") -->
            <p class="mt-5 text-gray-700 text-lg leading-relaxed">
              ¡Felicitaciones al ganador! Pronto publicaremos más sorteos,
              ¡mantente atento!
            </p>
          </div>

          <!-- Últimos números ganadores -->
          <div class="w-full lg:w-1/4">
            <div
              class="bg-red-700 text-white text-center font-bold text-xl py-3 rounded-t-lg"
            >
              Últimos Números Ganadores
            </div>
            <div class="p-5 bg-gray-50 rounded-b-lg shadow-md text-lg">
              <ul class="text-gray-800 space-y-3">
                <li class="border-b pb-2">
                  2000 -
                  <span class="text-gray-500 text-sm">Fecha: 20/9/24</span>
                </li>
                <li class="border-b pb-2">
                  3420 -
                  <span class="text-gray-500 text-sm">Fecha: 18/9/24</span>
                </li>
                <li class="border-b pb-2">
                  5678 -
                  <span class="text-gray-500 text-sm">Fecha: 15/9/24</span>
                </li>
                <li>
                  7890 -
                  <span class="text-gray-500 text-sm">Fecha: 12/9/24</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

