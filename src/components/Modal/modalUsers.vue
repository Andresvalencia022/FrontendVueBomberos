<script setup>

import Alert from '../UI/Alert.vue'

//Stora para manejar todos los Modales
import {UseUserStore} from '../../stores/UseUserStore';
const UserStore = UseUserStore();
const { modal, hideModel, userObjectForm, addUser, editMode } = UserStore;


</script>

<template>
  <div
    class="Modal fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center overflow-hidden transition-all ease-in-out duration-700"
    :class="[modal.animar ? ' bg-opacity-70' : 'opacity-0']"
  >
    <div
      class="content w-2/4 pt-2 justify-center overflow-hidden transition-all ease-in-out duration-1000"
      :class="[modal.animar ? ' bg-opacity-70' : 'opacity-0']"
    >
      <div class="bg-white relative rounded-lg">
        <h1
          class="text-center p-4 text-2xl text-white bg-red-700 rounded-lg mb-5"
        >
          Usuarios
        </h1>
        <h1
          class="absolute -top-1 -right-1 h-7 w-7 text-center text-xl text-white rounded-full cursor-pointer"
          @click="hideModel('cerrarSinGuardarUser')"
        >
          x
        </h1>
        <Alert
          v-if="UserStore.stateAlert.showAlert"
          :class="UserStore.stateAlert.classAlert"
          >{{ UserStore.stateAlert.Message }}
        </Alert>
        
        <form class="block px-9 pb-5" @submit.prevent="addUser()">
          <div class="sm:col-span-4 flex">
            <div class="w-1/2 px-0.5">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Nombre</label
              >
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="userObjectForm.name"
                />
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="last_name"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Apellido</label
              >
              <div class="mt-2">
                <input
                  id="last_name"
                  name="last_name"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="userObjectForm.last_name"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4 flex">
            <div class="w-1/2 px-0.5">
              <label
                for="phone"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Telefono</label
              >
              <div class="mt-2">
                <input
                  id="phone"
                  name="phone"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="userObjectForm.phone"
                />
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  autocomplete="email"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="userObjectForm.email"
                />
              </div>
            </div>
          </div>
          <div 
           v-if="!editMode"
          class="sm:col-span-4 flex">
            <div class="w-1/2 px-0.5">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Contraseña</label
              >
              <div class="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  autocomplete="new-password" 
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="userObjectForm.password"
                />
              </div>
            </div>
            <div class="w-1/2 px-0.5">
              <label
                for="password_confirm"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Confirmar contraseña</label
              >
              <div class="mt-2">
                <input
                  id="password_confirm"
                  type="password"
                  name="password_confirm"
                  autocomplete="new-password"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="userObjectForm.password_confirm"
                />
              </div>
            </div>
          </div>

          <div class="sm:col-span-4">
            <div class="w-full px-0.5">
              <label
                for="post"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Cargo</label
              >
              <div class="mt-2">
                <input
                  id="post"
                  name="post"
                  class="block w-full rounded-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="userObjectForm.post"
                />
              </div>
            </div>
          </div>
          <div class="mt-5 mb-5">
            <button
              v-if="editMode"
              type="submit"
              class="w-full block text-white bg-red-600 hover:bg-red-800 py-2 font-bold text-base rounded-lg"
            >
              Actualizar 
            </button>
            <button
              v-else
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

