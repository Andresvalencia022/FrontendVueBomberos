<script setup>
        
 </script>

<template>
 <!-- Loader mientras carga -->
  <div
    class="w-2/4 h-64 m-2 p-5 bg-gray-800 border border-gray-700 rounded-lg shadow animate-pulse"
    v-for="n in 2"
    :key="n"
  >
    <div class="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
    <div class="h-4 bg-gray-700 rounded mb-2"></div>
    <div class="h-4 bg-gray-700 rounded mb-2"></div>
    <div class="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
    <div class="h-10 bg-gray-600 rounded mt-6"></div>
  </div>

</template>


