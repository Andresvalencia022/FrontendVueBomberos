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
      
        <RouterLink to="/" class="flex content-center p-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
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
          </svg> <p>Eventos</p>   
          </RouterLink>

          

          <!-- <Routerlink class="flex" to="event">  <svg
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
          </svg> <p>Eventos</p></Routerlink> 
      -->
      </div>
    </header>
    <div
      class="mx-auto px-2 only-of-type bg-slate-900 h-[35rem] content-center bg-backgroundImage bg-top bg-no-repeat bg-cover"
    >
      <div class="h-auto rounded-lg py-6 shadow-lg">
        <div class="flex flex-wrap lg:flex-nowrap">
          <div
            class="w-full lg:w-3/4 bg-white opacity-80 rounded-lg p-7 mx-1 mb-5 lg:mb-0"
          >
            <h1
              class="mb-4 text-3xl font-bebasNeue border-b-4 border-gray-600 text-center"
            >
              Nuevo Ganador
            </h1>
            <article class="mt-6">
              <ul class="space-y-3">
                <li class="flex items-center text-2xl">
                  <svg
                    class="w-6 h-6 mr-3 text-gray-800 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                    />
                  </svg>
                  <span class="font-Neuton font-bold mr-3"
                    >Número Ganador:</span
                  >
                  <span class="font-bold text-red-600">2001</span>
                </li>
                <li class="flex items-center text-xl">
                  <svg
                    class="w-6 h-6 mr-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                    />
                  </svg>
                  <span class="font-Neuton font-bold mr-3"
                    >Fecha de sorteo:</span
                  >10/06/24
                </li>
                <li class="flex items-center text-xl">
                  <svg
                    class="w-6 h-6 mr-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                    />
                  </svg>
                  <span class="font-Neuton font-bold mr-3"
                    >Nombre <Datag></Datag>el Ganador:</span
                  >Andres Felipe Valencia Cano
                </li>
                <li class="flex items-center text-xl">
                  <svg
                    class="w-6 h-6 mr-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M5 7h14M5 12h14M5 17h10"
                    />
                  </svg>
                  <span class="font-Neuton font-bold mr-3">Descripción:</span>
                </li>
              </ul>
              <p class="pl-9 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellat perferendis fugit officia nobis fuga doloribus est
                illum? Blanditiis architecto ea iste recusandae optio
                perferendis inventore quos repellat aperiam officiis.
              </p>
            </article>
          </div>
          <div class="w-full lg:w-3/12 mx-1 order-2 overflow-hidden">
            <div
              class="bg-red-600 h-16 border rounded-t-lg flex items-center justify-center"
            >
              <h1 class="text-center text-white font-PoetsenOne">
                Últimos números ganadores
              </h1>
            </div>
            <div class="p-5 bg-white h-full">
              <ul
                class="space-y-3 text-gray-500 list-disc list-inside dark:text-gray-400"
              >
                <li>2000 - Fecha de juego: 20/9/24</li>
                <li>3420 - Fecha de juego: 20/9/24</li>
                <li>3420 - Fecha de juego: 20/9/24</li>
                <li>3420 - Fecha de juego: 20/9/24</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

