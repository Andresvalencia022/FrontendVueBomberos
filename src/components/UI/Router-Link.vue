<script setup>
import { defineProps, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Loader from "../../components/UI/loader.vue"; // 🔄 Importamos el Loader

defineProps({
  to: {
    type: String,
    required: true,
  },
});

const loading = ref(false);
const router = useRouter();

function navigate(event) {
  event.preventDefault(); // Evita la navegación automática
  loading.value = true; // Activa el loader

  router.push({ name: to }).finally(() => {
    loading.value = false; // Desactiva el loader cuando la navegación termina
  });
}
</script>

<template>
   <!--  Utilizo acción Loader (Cargar...)-->
   <div v-if="Loading" class="flex justify-center items-center py-10 h-[50vh]">
      <!-- 🔄 Loader cuando se hace clic -->
      <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
   </div>

   <RouterLink v-else :to="{ name: to }" class="block md:inline-block w-full  mx-2" @click="navigate">
      <slot></slot>
   </RouterLink>
</template>
