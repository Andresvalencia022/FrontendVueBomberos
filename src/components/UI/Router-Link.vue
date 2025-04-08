<script setup>
import { defineProps, ref  } from "vue";

defineProps({
  to: {
    type: String,
    required: true,
  },
});

</script>

<template>
    <!-- Botón de navegación -->
    <RouterLink :to="{ name: to }" class="block w-full">
      <slot></slot>
    </RouterLink>

</template>
