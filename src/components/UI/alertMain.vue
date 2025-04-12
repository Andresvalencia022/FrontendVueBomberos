<script setup>
import { UseAlertStore } from "../../stores/UseAlertStore";
const alertStore = UseAlertStore();
</script>
<template>
    <div class="fixed top-24 right-3 z-50 w-80">
        <div id="alert-border-3"
            class="flex items-start p-4 mb-4 rounded-lg shadow-lg border-l-4 animate-slide-in transition-all duration-300"
            :class="alertStore.classAlert" role="alert">
            <!-- Icono -->
            <svg v-if="alertStore.type === 'success'" class="w-5 h-5 mt-1 shrink-0" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" />
            </svg>
            <svg v-else class="w-5 h-5 mt-1 shrink-0 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.54-10.46a1 1 0 00-1.42-1.42L10 8.59 7.88 6.46a1 1 0 00-1.42 1.42L8.59 10l-2.13 2.12a1 1 0 001.42 1.42L10 11.41l2.12 2.13a1 1 0 001.42-1.42L11.41 10l2.13-2.12z"
                    clip-rule="evenodd" />
            </svg>
            <!-- Mensaje -->
            <div class="ms-3 pl-1 text-sm font-medium">
                <slot></slot>
            </div>
            <!-- Botón cerrar -->
            <button type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-green-50  rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 "
                :class="{
                   'bg-green-50 text-green-500 hover:bg-green-200 focus:ring-green-400': alertStore.type === 'success',
                   'bg-red-50 text-red-500 hover:bg-red-200 focus:ring-red-400': alertStore.type === 'error',
                }" data-dismiss-target="#alert-border-3" @click="alertStore.hideAlert()" aria-label="Close">
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    </div>
</template>