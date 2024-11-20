<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import triviaData from '@/trivia.json';

const router = useRouter();
const category = ref('any');
const difficulty = ref('any-difficulty');
const numQuestions = ref(10);

// Categories and difficulties from the JSON file
const categories = triviaData.categories;
const difficulties = triviaData.difficulties;

// Generate the link for the trivia request
function openLink() {
  let url = '/play?amount=' + numQuestions.value;

  if (category.value !== 'any') {
    url += `&category=${category.value}`;
  }

  if (difficulty.value !== 'any-difficulty') {
    url += `&difficulty=${difficulty.value}`;
  }

  // Redirect to the play page with the selected trivia settings
  router.push(url);
}

// Randomly selects category, difficulty, and number of questions
function selectRandom() {
  // Randomly select a category (excluding 'any')
  const randomCategory = categories[Math.floor(Math.random() * categories.length)].value;
  category.value = randomCategory === 'any' ? 'any' : randomCategory;

  // Randomly select a difficulty (excluding 'any-difficulty')
  // const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)].value;
  // difficulty.value = randomDifficulty === 'any-difficulty' ? 'any-difficulty' : randomDifficulty;

  // Randomly select number of questions between 1 and 50
  numQuestions.value = Math.floor(Math.random() * 50) + 1;

  // Trigger the openLink function after random selection
  openLink();
}
</script>
<template>
  <div class="p-6 sm:p-10 bg-purple">
    <!-- Page Title -->
    <h1 class="text-white text-4xl font-bold mb-6 text-center">Start Trivia</h1>

    <!-- Page Introduction -->
    <p class="text-white text-lg mb-6 text-center">
      Welcome to the Trivium Quiz! <br> Test your knowledge across a variety of topics and challenges. Select a
      category,
      difficulty, and the number of questions you’d like to answer.
    </p>

    <!-- Trivia Selection Form -->
    <form class="flex flex-col sm:flex-row sm:gap-6 gap-4 justify-center" @submit.prevent="openLink">
      <div class="flex flex-col w-full sm:w-auto">
        <label for="trivia-category" class="text-white mb-2">Select Category</label>
        <select v-model="category" name="trivia-category" id="trivia-category" class="select">
          <option value="" disabled selected hidden>Select Category</option>
          <option v-for="cat in categories" :key="cat.value" :value="cat.value">{{ cat.label }}</option>
        </select>
      </div>

      <div class="flex flex-col w-full sm:w-auto">
        <label for="trivia-difficulty" class="text-white mb-2">Select Difficulty</label>
        <select v-model="difficulty" name="trivia-difficulty" id="trivia-difficulty" class="select">
          <option value="" disabled selected hidden>Select Difficulty</option>
          <option v-for="diff in difficulties" :key="diff.value" :value="diff.value">{{ diff.label }}</option>
        </select>
      </div>

      <div class="flex flex-col w-full sm:w-auto">
        <label for="num-questions" class="text-white mb-2">Number of Questions</label>
        <input v-model="numQuestions" type="number" name="num-questions" id="num-questions" class="input" min="1"
          max="50" />
      </div>

      <!-- Start Button -->
      <button type="submit" class="button-primary text-lg py-1 px-8 h-min mt-6 sm:mt-0 sm:ml-6">Start</button>
    </form>

    <!-- Random Button Section -->
    <div class="place-items-center mt-8 text-center">
      <h1 class="text-white text-3xl font-bold mt-6 mb-4">OR</h1>
      <p class="text-white text-lg mb-4">Feeling adventurous? Play a random trivia quiz with randomly selected
        categories and difficulty.</p>
      <button type="button" @click="selectRandom" class="button-secondary text-lg py-1 px-5">Play Random</button>
    </div>
  </div>
</template>
