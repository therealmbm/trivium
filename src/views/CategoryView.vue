<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Import the trivia categories from the JSON file
import triviaData from '@/trivia.json';

// Declare the data ref for questions
let data = ref([]);

// Declare the categories ref
let categories = ref(triviaData.categories);

// Utility function to decode HTML entities
function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

// Fetch questions when the component is mounted
onMounted(async () => {
  try {
    const response = await axios.get('https://opentdb.com/api.php?amount=50');
    const result = response.data;
    data.value = result.results.map((item) => ({
      ...item,
      question: decodeHtmlEntities(item.question), // Decode the question
    }));
  } catch (error) {
    console.error('Error fetching questions', error);
  }
});
</script>

<template>
  <div>
    <!-- Categories Section -->
    <div class="caregories bg-purple text-white p-4 shadow-lg">
      <h1 class="text-yellow font-bold text-3xl my-5">Over 20+ Categories</h1>
      <ul class="list">
        <li v-for="category in categories" :key="category.value">
          <RouterLink class="entry" :to="`/play?amount=10&category=${category.value}`">
            {{ category.label }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Questions Section -->
    <div class="Questions p-4">
      <h1 class="text-yellow font-bold text-3xl my-5">Over 10,000+ Questions</h1>
      <ul class="text-purple text-xl font-bold">
        <li v-for="(item, index) in data" :key="index"
          class="hover:bg-purple hover:text-white hover:font-thin rounded-md p-3">
          => {{ item.question }}
        </li>
      </ul>
    </div>
  </div>
</template>
