<script setup>
   import { defineProps } from 'vue';
//   import { RouterLink } from 'vue-router';
   import { RouterLink } from "vue-router";

defineProps({
    to: {
        type: String,
        required: true
    }
   })
  
</script>

<template>
     <RouterLink 
     :to="{name: to}"
     class="block md:inline-block w-full  mx-2">
    <slot></slot>
    </RouterLink>
</template>
