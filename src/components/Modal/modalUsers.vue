<script setup>

</script>

<template>
        <div
    class="Modal fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center overflow-hidden transition-all ease-in-out duration-700"
  >
    <!-- :class="[modal.animar ? ' bg-opacity-70' : 'opacity-0']" -->
    <div
      class="content w-2/4 pt-10 justify-center overflow-hidden transition-all ease-in-out duration-1000"
    >
      <!-- :class="[modal.animar ? ' bg-opacity-70' : 'opacity-0']" -->
      <div class="bg-white relative rounded-lg">
        <h1
          class="text-center p-4 text-2xl text-white bg-slate-600 rounded-lg mb-5"
          
        >
          Registrar barcode
        </h1>
        <h1
          class="absolute top-0 right-0 h-7 w-7 text-center bg-red-700 hover:bg-red-900 text-white rounded-lg cursor-pointer"
          @click="hideModel()"
        >
          x
        </h1>
        <!-- <Alerta
          v-if="state.showAlertError"
          :class="['bg-red-600 text-white']"
          >{{ state.errorMessage }}
        </Alerta>
         -->
        <form class="block px-9 pb-5"  @submit.prevent="addBarcode()">
          <div class="sm:col-span-4 flex">
            <div class="w-1/2 px-0.5">
              <label
                for="barcode"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Codigo de barra</label
              >
              <div class="mt-2">
                <input
                  id="barcode"
                  name="barcode"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <!-- v-model="objectBarcode.barcode" -->
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="color"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Color</label
              >
              <div class="mt-2">
                <input
                  id="color"
                  name="color"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                 <!-- v-model="objectBarcode.color" -->
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label
              for="description"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Descripcion</label
            >
            <div class="mt-2">
              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
               <!-- v-model="objectBarcode.description" -->
            </div>
          </div>
          <div class="flex sm:col-span-4">
            <div class="w-1/2 px-0.5">
              <label
                for="size"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Talla</label
              >
              <div class="mt-2">
                <input
                  id="size"
                  name="size"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <!-- v-model="objectBarcode.size" -->
              </div>
            </div>
            <div class="w-1/2 px-0.5">
               <label
              for="stock"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Stock</label
            >
            <div class="mt-2">
              <input
                id="stock"
                name="stock"
                class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <!-- v-model="objectBarcode.amount" -->
            </div>
            </div>
          </div>
          <div class="mt-5 mb-5">
            <button
              type="submit"
              class="w-full block text-white bg-blue-700 hover:bg-blue-800 py-2 font-bold text-base rounded-lg"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

