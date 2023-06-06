<template>
  <div class="flex items-center justify-center mt-4">
    <ul class="flex">
      <li v-if="currentPage > 1" @click="goToPage(currentPage - 1)">
        <a href="#" class="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">Previous</a>
      </li>
      <li v-for="page in totalPages" :key="page" @click="goToPage(page)">
        <a href="#" :class="{'bg-blue-500 text-white': page === currentPage, 'bg-gray-200 hover:bg-gray-300': page !== currentPage}"
          class="px-3 py-1 rounded-md mx-1">{{ page }}</a>
      </li>
      <li v-if="currentPage < totalPages" @click="goToPage(currentPage + 1)">
        <a href="#" class="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300">Next</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
}) 

const currentPage = ref(props.currentPage);

const emit = defineEmits(['page-selected'])

watch(currentPage, (newValue) => {
  emit('page-selected', newValue);
});

const goToPage = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
