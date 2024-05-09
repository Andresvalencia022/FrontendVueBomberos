<script setup>
import News from "../../assets/img/news1.jpg";
</script>
<template>
  <div class="pb-3 m-7">
    <div class="m-3">
      <h1 class="font-PoetsenOne text-2xl">Titulo de la noticia</h1>
    </div>
    <div class="m-3">
      <p class="text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor
        aliquam architecto ratione est iste velit a illum doloremque. Voluptate
        culpa, enim nihil harum iure illo recusandae quos fugiat molestiae.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor
        aliquam architecto ratione est iste velit a illum doloremque. Voluptate
        culpa, enim nihil harum iure illo recusandae quos fugiat molestiae.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolor
        aliquam architecto ratione est iste velit a illum doloremque. Voluptate
        culpa, enim nihil harum iure illo recusandae quos fugiat molestiae.
      </p>
    </div>
    <div class="m-3 mt-6 flex text-center text-lg">
      <div class="w-1/2">
        <img :src="News" alt="" />
      </div>
      <div class="w-1/2 content-center">
        <button
          type="button"
          class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 "
        >
          Ver video
        </button>
      </div>
    </div>
  </div>
</template>