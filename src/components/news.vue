<script setup>
import news from "../assets/img/news1.jpg";


</script>

<template>
  <div id="noticias" class="my-2 mt-9">
    <div class="my-10">
      <h1 class="text-3xl  pt-10 font-sans subpixel-antialiased font-bold text-center">
        Noticias
      </h1>
    </div>
    <div class="flex flex-row">
      <div
        class="w-2/4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <article class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Titulo de la noticia
          </h5>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde...
          </p>
        </article>
        <article>
          <img :src="news" class="rounded-b-lg" alt="" />
        </article>
        <button
          type="button"
          class="text-white w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm  py-2.5 text-center   dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          leer mas...
        </button>
      </div>
      <div
        class="w-2/4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <article class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Titulo de la noticia
          </h5>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde...
          </p>
        </article>
        <article>
          <img :src="news" class="rounded-b-lg" alt="" />
        </article>
         <button
          type="button"
          class="text-white w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          leer mas...
        </button>
      </div>
    </div>
  </div>
  
</template>


