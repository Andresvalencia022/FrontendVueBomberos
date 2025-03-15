<script setup>
import News from "../../assets/img/news1.jpg";
import {UseNewsStore} from "../../stores/UseNewsStore";

const NewsStore = UseNewsStore();
const { objectNew, isExpanded, shortText, searchregistration, isScrollable } = NewsStore;

</script>
<template>
  <div class="pb-3 my-7 mx-1" 
  :class="{ 'max-h-[500px] overflow-auto': NewsStore.isScrollable }"
  >
    <div class="m-3 text-center">
      <h1 class="font-PoetsenOne text-2xl">{{ objectNew.title_news }}</h1>
    </div>
  

      <div class="my-3 mx-5 p-4 border rounded-lg"
      >
      <p class="mt-2 text-gray-700 whitespace-pre-line">
        {{ NewsStore.isExpanded ? NewsStore.objectNew.info : NewsStore.shortText }}
      </p>
    </div>  
    <div class="flex justify-center">
    <button @click="NewsStore.toggleExpand" class=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
      {{ NewsStore.isExpanded ? "Leer menos" : "Leer más" }}
    </button>
  </div>

    <div class="my-3 mx-5 mt-6 flex text-center text-lg">
      <div class="w-1/2">
        <img :src="objectNew.name_imagen" alt="" />
      </div>
      <div class="w-1/2 content-center">
        <a
        :href="objectNew.video_name"
         target="_blank"
         class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Ver video
      </a>
      </div>
    </div>
  </div>
</template>