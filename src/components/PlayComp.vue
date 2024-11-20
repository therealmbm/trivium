<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const data = ref([]);
const shuffledAnswers = ref([]);
const isCorrect = ref(null);
const feedbackMessage = ref('');
const correctAnswer = ref('');
const currentQuestionIndex = ref(0);
const score = ref(0);

// Store category and difficulty from route query
const category = ref(route.query.category || 'any');
const difficulty = ref(route.query.difficulty || 'any-difficulty');

// Category mapping
const categoryMapping = {
  "categories": {
    9: "General Knowledge",
    10: "Entertainment: Books",
    11: "Entertainment: Film",
    12: "Entertainment: Music",
    13: "Entertainment: Musicals & Theatres",
    14: "Entertainment: Television",
    15: "Entertainment: Video Games",
    16: "Entertainment: Board Games",
    17: "Science & Nature",
    18: "Science: Computers",
    19: "Science: Mathematics",
    20: "Mythology",
    21: "Sports",
    22: "Geography",
    23: "History",
    24: "Politics",
    25: "Art",
    26: "Celebrities",
    27: "Animals",
    28: "Vehicles",
    29: "Entertainment: Comics",
    30: "Science: Gadgets",
    31: "Entertainment: Japanese Anime & Manga",
    32: "Entertainment: Cartoon & Animations"
  }
};

// Utility to decode HTML entities
function decodeHtmlEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

// Function to get category name from ID
function getCategoryName(categoryId) {
  // If the category is 'any', return 'Any Category'
  if (categoryId === 'any') {
    return 'Any Category';
  }

  // Check if categoryId is a valid key in the mapping
  const categoryName = categoryMapping.categories[categoryId];
  return categoryName ? categoryName : 'Unknown Category'; // Return category name or fallback
}

// Fetch the trivia data based on query params
onMounted(async () => {
  const amount = route.query.amount || 10;
  const apiUrl = `https://opentdb.com/api.php?amount=${amount}${category.value !== 'any' ? '&category=' + category.value : ''}${difficulty.value !== 'any-difficulty' ? '&difficulty=' + difficulty.value : ''}`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    data.value = result.results;

    if (data.value.length === 0) {
      Swal.fire({
        title: 'No Questions Found',
        text: 'No questions found for the selected criteria. Please try again.',
        icon: 'error',
      });
      return;
    }

    // Decode questions and answers
    data.value.forEach((trivia) => {
      trivia.question = decodeHtmlEntities(trivia.question);
      trivia.correct_answer = decodeHtmlEntities(trivia.correct_answer);
      trivia.incorrect_answers = trivia.incorrect_answers.map(decodeHtmlEntities);
    });

    // Shuffle answers
    data.value.forEach((trivia, index) => {
      const answers = [trivia.correct_answer, ...trivia.incorrect_answers];
      shuffledAnswers.value[index] = answers.sort(() => Math.random() - 0.5);
    });
  } catch (error) {
    console.error('Error fetching trivia data:', error);
    Swal.fire({
      title: 'Error',
      text: 'An error occurred while fetching trivia data. Please try again later.',
      icon: 'error',
    });
  }
});

// Check the selected answer
function checkAnswer(answer, index) {
  const correct = data.value[index].correct_answer;
  if (answer === correct) {
    isCorrect.value = true;
    feedbackMessage.value = 'Correct answer!';
    correctAnswer.value = '';
    score.value++;
  } else {
    isCorrect.value = false;
    feedbackMessage.value = 'Incorrect answer!';
    correctAnswer.value = correct;
  }

  showFeedbackModal();

  setTimeout(() => {
    if (currentQuestionIndex.value < data.value.length - 1) {
      currentQuestionIndex.value++;
    } else {
      showFinalScoreModal();
    }
  }, 1990);
}

function showFeedbackModal() {
  Swal.fire({
    title: isCorrect.value ? 'Correct!' : 'Incorrect!',
    text: isCorrect.value ? 'Great job!' : `Oops! The correct answer is: ${correctAnswer.value}`,
    icon: isCorrect.value ? 'success' : 'error',
    timer: 2000,
    showConfirmButton: false
  });
}

function showFinalScoreModal() {
  Swal.fire({
    title: 'Quiz Complete!',
    text: `Your final score is ${score.value} out of ${data.value.length}`,
    icon: 'info',
    showConfirmButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      router.push('/leaderboard');
    }
  });
}
</script>

<template>
  <div v-if="data.length > 0">
    <div class="card">
      <div class="grid grid-cols-2">
        <p class="me-auto">Question {{ currentQuestionIndex + 1 }} of {{ data.length }}</p>
        <p class="ms-auto">Difficulty: {{ difficulty }}</p>
        <p class="me-auto">Score: {{ score }}/{{ data.length }}</p>
        <p class="ms-auto">Category: {{ getCategoryName(category) }}</p> <!-- Updated to show category name -->
      </div>
      <div class="cardHeader">{{ data[currentQuestionIndex].question }}</div>
      <div class="cardBody">
        <div class="select">
          <p class="options" v-for="(answer, idx) in shuffledAnswers[currentQuestionIndex]" :key="idx"
            @click="checkAnswer(answer, currentQuestionIndex)">
            {{ answer }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <!-- Loading or no data state -->
    <div class="loading-state">
      <p>Loading questions...</p>
    </div>
  </div>
</template>
