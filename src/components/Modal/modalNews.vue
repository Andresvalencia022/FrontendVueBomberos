<script setup>

//Stora para manejar todos los Modales
import { UseNewsStore } from "../../stores/UseNewsStore";
const NewsStore = UseNewsStore();
const { objectNew, modal, hide_Model,handleFileChange, file ,setFile, addNew } = NewsStore;



</script>

<template>
  <div
    class="Modal fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center overflow-hidden transition-all ease-in-out duration-700"
    :class="[modal.animar ? 'bg-opacity-70' : 'opacity-0']"
  >
    <div
      class="content w-2/4 pt-2 justify-center overflow-hidden transition-all ease-in-out duration-1000"
      :class="[modal.animar ? 'bg-opacity-70' : 'opacity-0']"
    >
      <div class="bg-white relative rounded-lg">
        <h1
          class="text-center p-4 text-2xl text-white bg-red-700 rounded-lg mb-5"
        >
          Nueva Noticia
        </h1>
        <h1
          class="absolute -top-1 -right-1 h-7 w-7 text-center text-xl text-white rounded-full cursor-pointer"
          @click="hide_Model('cerrarSinGuardarNews')"
        >
          x
        </h1>
        <!-- <Alerta
          v-if="state.showAlertError"
          :class="['bg-red-600 text-white']"
          >{{ state.errorMessage }}
        </Alerta>
         -->
        <form class="block px-9 pb-5" @submit.prevent="addNew()">
          <div class="sm:col-span-4">
            <div class="w-full px-0.5">
              <label
                for="title_news"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Título destacado</label
              >
              <div class="mt-2">
                <input
                  id="title_news"
                  name="title_news"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="objectNew.title_news"
                  />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label
              for="info"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Descripción</label
            >
            <div class="mt-2">
              <textarea
                id="info"
                name="info"
                rows="4"
                cols="50"
                class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="objectNew.info"
                ></textarea>
            </div>
          </div>
          <div class="flex sm:col-span-4">
            <div class="w-1/2 px-0.5">
              <label
                for="default_size"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Imagen</label
              >
              <div class="mt-2">
                <input class="lock w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                id="default_size" type="file" 
                @change="handleFileChange" 
                accept="image/*"
                >
                <p
                  class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  PNG, JPG (MAX. 800x400px).
                </p>
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="video_name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Link de video</label
              >
              <div class="mt-2">
                <input
                  id="video_name"
                  name="video_name"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="objectNew.video_name"
                  />
              </div>
            </div>
          </div>
          <div class="mt-5 mb-5">
             <button
              type="submit"
              class="w-full block text-white bg-red-600 hover:bg-red-800 py-2 font-bold text-base rounded-lg"
           >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

