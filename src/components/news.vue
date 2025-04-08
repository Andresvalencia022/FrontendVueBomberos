<script setup>
import news from "../assets/img/news1.jpg";
import Loaders from "../components/loaders.vue";
import Modal from "../components/ModalDetalles/Modal.vue";
import {onMounted} from "vue"
import {UsePublicNewsStore} from "../stores/UsePublicNewsStore";

// import { UseModalStore } from "../../stores/UseModalStore";
import { UseModalStore } from "../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modalDetalle, show_modalDetalle } = ModalStore;


const PublicNewsStore = UsePublicNewsStore();
const {readPublicNews} = PublicNewsStore;

onMounted(() => {
  readPublicNews()
});

</script>

<template>
  <div id="noticias" class="my-2 mt-10">
    <div class="my-10">
      <h1
        class="text-3xl pt-16 font-sans subpixel-antialiased font-bold text-center"
      >
        Noticias
      </h1>
      <div class="w-16 h-1 bg-red-600 mx-auto mt-2"></div>
    </div>
     
    <div v-if="PublicNewsStore.loader"  class="flex flex-row" >
      <loaders></loaders>
    </div>

    <div class="flex flex-row max-h-[600px] overflow-hidden"
         v-else-if="PublicNewsStore.arrayPublicNews.length > 0"
    >
      <div
        class="w-2/4 m-2 bg-gray-800 border-gray-700 border  rounded-lg shadow max-h-[580px] flex flex-col"
        v-for="news in PublicNewsStore.arrayPublicNews.slice(0, 2)" 
        :key="news.id"
        :news="news"
        >
        <!-- Contenedor de la noticia -->
        <article class="p-5 flex-grow">
          <!-- Título con 2 líneas máximas -->
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-white line-clamp-2"
          >
            {{ news.title_news }}
          </h5>

          <!-- Descripción con máximo 3 líneas -->
          <p class="text-gray-300 line-clamp-3 whitespace-pre-line">
           {{ news.info.replace(/<br\s*\/?>/g, "\n")  }}
          </p>
          
        </article>

        <!-- Contenedor de la imagen con altura máxima -->
        <article
          class="w-11/12 m-auto max-h-40 overflow-hidden flex justify-center"
        >
          <img
            :src="news.name_imagen"
            class="rounded-b-lg object-cover w-full h-full"
            alt="Imagen de la noticia"
          />
        </article>

        <!-- Botón Leer Más -->
        <button
          type="button"
          class="block text-white my-2 w-11/12 m-auto bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="show_modalDetalle('news_details',news.id, true)"
        >
          Leer más...
        </button>
      </div>

    </div>
     <!-- Mensaje cuando no hay Noticias -->
     <div
      v-else
      class="flex flex-col items-center justify-center p-14 bg-gray-50 dark:bg-gray-300 rounded-lg shadow-lg"
    >
      <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300">
        No hay noticias disponibles 📰
      </h2>
      <p
        class="text-gray-500 dark:text-gray-400 text-md mt-2 text-center max-w-md leading-relaxed"
      >
      Parece que aún no hay noticias publicadas.  
      ¡Vuelve pronto para mantenerte informado sobre las novedades de los bomberos! 🚒🔥
      </p>
    </div>
  </div>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>


