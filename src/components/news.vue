<script setup>
import news from "../assets/img/news1.jpg";
import Modal from "../components/ModalDetalles/Modal.vue";
import {onMounted} from "vue"
import {UsePublicNewsStore} from "../stores/UsePublicNewsStore";

// import { UseModalStore } from "../../stores/UseModalStore";
import { UseModalStore } from "../stores/UseModalStore";
const ModalStore = UseModalStore();
const { modalDetalle, show_modal } = ModalStore;

const PublicNewsStore = UsePublicNewsStore();
const {readPublicNews} = PublicNewsStore;

onMounted(() => {
  readPublicNews()
});

</script>

<template>
  <div id="noticias" class="my-2 mt-9">
    <div class="my-10">
      <h1
        class="text-3xl pt-10 font-sans subpixel-antialiased font-bold text-center"
      >
        Noticias
      </h1>
    </div>
    <div class="flex flex-row max-h-[600px] overflow-hidden"
         v-if="PublicNewsStore.arrayPublicNews.length > 0"
    >
      <div
        class="w-2/4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-[580px] flex flex-col"
        v-for="news in PublicNewsStore.arrayPublicNews.slice(0, 2)" 
        :key="news.id"
        :news="news"
        >
        <!-- Contenedor de la noticia -->
        <article class="p-5 flex-grow">
          <!-- Título con 2 líneas máximas -->
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2"
          >
            {{ news.title_news }}
          </h5>

          <!-- Descripción con máximo 3 líneas -->
          <p class="text-gray-700 dark:text-gray-300 line-clamp-3">
           {{ news.info  }}
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
          @click="show_modal('modalDetails', 'home_news')"
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


