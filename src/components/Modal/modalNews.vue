<script setup>
//Stora para manejar todos los Modales
import { UseNewsStore } from "../../stores/UseNewsStore";
const NewsStore = UseNewsStore();
const {
  objectNew,
  modal,
  hide_Model,
  handleFileChange,
  file,
  setFile,
  addNew,
  editMode,
  imageIsUpdated
} = NewsStore;
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
                <input
                  class="lock w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black p-1 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
                  id="default_size"
                  type="file"
                  @change="handleFileChange"
                  accept="image/*"
                />
                
                <p v-if="NewsStore.imageIsUpdated" class="text-green-800">
                  Has seleccionado una nueva imagen para actualizar. 
                </p>
                <article v-else-if="objectNew.name_imagen" class="ml-1">
                  <a href="#" class="inline-block relative group">
                    <img
                      :src="objectNew.name_imagen"
                      class="img-fluid w-24 rounded-md object-cover transition-opacity duration-300 group-hover:opacity-50"
                      alt="Imagen subida"
                    />
                    <svg
                      class="w-6 h-6 text-red-600 dark:text-white absolute top-5 left-9 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </article>
                <p 
                  v-else
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

