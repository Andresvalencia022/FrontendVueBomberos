<script setup>
</script>

<template>
  <div class="min-h-full">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Loteria Bomberos
        </h1>
      </div>
    </header>
    <div>
      <div class="flex mx-auto max-w-7xl py-6">
        <div class="w-2/4 bg-slate-500 p-7 mx-1">
          <h1
            class="mb-2 text-lg font-semibold text-gray-900 dark:text-white text-center"
          >
            Ganador
          </h1>
          <article>
            <ul class="max-w-md space-y-1 list-inside dark:text-gray-400">
              <li class="flex items-center text-2xl">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
                  />
                </svg>
                <samp class="font-bold font-PoetsenOne mr-1"
                  >Numero Ganador:</samp
                >
                200
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 me-2 text-gray-800 dark:text-white"
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

                <samp class="font-bold font-PoetsenOne mr-1"
                  >Fecha de sorteo:
                </samp>
                10/06/24
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 me-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <samp class="font-bold font-PoetsenOne mr-1"
                  >Nombre Ganador:
                </samp>
                Andres Felipe Valencia Cano
              </li>
              <li class="flex items-center">
                <svg
                  class="w-6 h-6 me-2 text-gray-800 dark:text-white"
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
                    stroke-width="2"
                    d="M5 7h14M5 12h14M5 17h10"
                  />
                </svg>

                <samp class="font-bold font-PoetsenOne mr-1"
                  >Descripcion:
                </samp>
              </li>
            </ul>
            <div>
              <p class="pl-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                repellat perferendis fugit officia nobis fuga doloribus est
                illum? Blanditiis architecto ea iste recusandae optio
                perferendis inventore quos repellat aperiam officiis.
              </p>
            </div>
          </article>
        </div>
        <div class="w-1/2 mx-1">
          <div class="bg-gray-600 h-16">1</div>
          <div class="p-5">
            <h1 class="text-center mb-2 font-PoetsenOne">lista de últimos números ganadores</h1>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li>200 - Fecha de juego: 20/9/24</li>
              <li>342 - Fecha de juego: 20/9/24</li>
              <li>342 - Fecha de juego: 20/9/24</li>
              <li>342 - Fecha de juego: 20/9/24</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

