<script setup>
import imagenlogin from "../assets/img/imgservicio.jpg";
import { reactive, ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import { UseUserStore } from "../stores/UseUserStore";
const UserStore = UseUserStore();
const {userObjectForm,  authenticateUser} = UserStore;

const showText = ref(false);

onMounted(() => {
  // Animar el texto que tiene el login
  setTimeout(() => {
    showText.value = true;
  }, 500);
});

// // voy a tomar el nombre de la ruta en la que estoy
const route = useRoute();
const login = computed(() => route.name === "login");

</script>

<template>
  <div v-if="login" class="flex h-[35rem] w-full">
    <div class="w-3/4 static">
      <h1
        class="font-PoetsenOne text-center absolute top-20 left-28 text-stroke text-4xl text-white drop-shadow-md transition-transform duration-500"
        :class="{ '-translate-x-full  invisible': !showText }"
      >
        Cuerpo de Bomberos la merced
      </h1>

      <img :src="imagenlogin" alt="" loading="lazy" />
    </div>
    <div class="w-5/12 grid gap-4 place-content-center">
      <div class="absolute top-3 right-1">
        <a
          href=""
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >Volver</a
        >
      </div>
      <div
        class="w-full max-w-sm p-4 bg-gray-900 border text-white border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form @click.prevent="authenticateUser"  class="space-y-6" action="#">
          <h5
            class="text-xl text-center text-white font-medium dark:text-white"
          >
            Inicia sesión en nuestra plataforma
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
              >Email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              v-model="userObjectForm.email"
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
               v-model="userObjectForm.password"
            />
          </div>
          <div class="flex items-start">
            <!-- <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >Remember me</label
              >
            </div> -->
            <a
              href="#"
              class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >Olvídate tu contraseña?</a
            >
          </div>
          <button
            type="submit"
            class="w-full text-white hover:text-white border border-red-700 bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Ingresar a su cuenta
          </button>
        </form>
      </div>
    </div>
  </div>
  <div v-else class="flex  w-full">
    
  </div>  
</template>

