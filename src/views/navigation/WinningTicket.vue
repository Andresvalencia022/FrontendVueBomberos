<script setup>
import ModalWinningTicket from "../../components/Modal/modalWinningTicket.vue";
import Modal from "../../components/ModalDetalles/Modal.vue";
import { onMounted } from "vue";

import { UseModalStore } from "../../stores/UseModalStore";
const ModalStore = UseModalStore();
const {  modalDetalle, show_modalDetalle } = ModalStore;

import { UseWinningTicketStore } from "../../stores/UseWinningTicket";
const WinningTicketStore = UseWinningTicketStore();
const { modal, show_modal, readWinningTicket, searchrecord, winningTicketDelete } = WinningTicketStore;

onMounted(() => {
  readWinningTicket()
});
</script>

<template>
  <div>
    <div class="flex p-2 items-center justify-between">
      <h1 class="mt-2 ml-9 text-xl font-PoetsenOne">Administrador boletas</h1>
      <a
        class="items-center mt-1 mr-6 px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="show_modal('modal_new_registration')"
      >
        Nuevo ganador
      </a>
    </div>
    <!-- table -->
    <div class="m-10"
     v-if="WinningTicketStore.arrayWinningTicket.length > 0"
    >
          <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Id</th>
            <th scope="col" class="px-6 py-3">Número Ganador</th>
            <th scope="col" class="px-6 py-3">Fecha de Juego</th>
            <th scope="col" class="px-6 py-3">Número de Teléfono</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="WinningTicket in WinningTicketStore.arrayWinningTicket.slice(
              0,
              5
            )"
            :key="WinningTicket.id"
            :WinningTicket="WinningTicket"
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ WinningTicket.id }}
            </th>
            <td class="px-6 py-4">{{ WinningTicket.winning_number }}</td>
            <td class="px-6 py-4">{{ WinningTicket.game_date }}</td>
            <td class="px-6 py-4">{{ WinningTicket.phone }}</td>
            <td class="px-2 py-4 flex">
              <a 
               @click="show_modalDetalle('WinningTicket_details', WinningTicket.id)"
               class="inline-block p-2">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a 
              @click="searchrecord('edit', WinningTicket.id)"
              class="inline-block p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-green-500 hover:text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </a>
              <a 
              @click="winningTicketDelete(WinningTicket.id)"
              class="inline-block p-2" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-red-600 hover:text-red-900"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
 
     <!-- 🛑 Si no hay ganadores, muestra esto -->
  <div
  class="flex flex-col items-center justify-center p-10 mx-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
  v-else
>
      <img
  src="https://cdn-icons-png.flaticon.com/512/3135/3135769.png"
  alt="Sin noticias"
  class="w-48 h-48 mb-5 opacity-90 transition-transform duration-300 hover:scale-110 drop-shadow-xl"
/>

  <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300">
    No hay ganadores registrados 🏆
  </h2>

  <p
    class="text-gray-600 dark:text-gray-400 text-md mt-2 text-center max-w-md leading-relaxed"
  >
    Aún no se han registrado ganadores de nuevas boletas. Agrega uno haciendo
    clic en el botón <strong>"Nuevo Ganador"</strong> para actualizar la
    información.
  </p>
</div>


  </div>
  <ModalWinningTicket v-if="modal.mostrar"></ModalWinningTicket>
  <Modal v-if="modalDetalle.mostrar"></Modal>
</template>


