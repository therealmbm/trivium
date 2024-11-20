<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="bg-purple grid lg:grid-cols-2 sm:grid-cols-1 gap-4 h-min py-10">
    <div class=" text-white m-36">
      <h1 class="text-5xl font-bold">Discover 10,000+ Trivia Questions Across a Wide Range of Categories!</h1>
      <h3 class="text-2xl my-3">
        Test your knowledge, explore new topics, and challenge friends today.
      </h3>
      <button class="button-primary text-xl p-3 px-12 font-bold">
        <RouterLink to="/trivia">
          Start Trivia
        </RouterLink>
      </button>
      <button class="button-secondary text-xl p-3 ms-5 font-bold">
        <RouterLink to="/category">
          Explore Questions
        </RouterLink>
      </button>
    </div>
    <div class=" h-96 ms-36">
      <img src="@/assets/hero.png" alt="hero-img" class="w-fit">
    </div>
  </div>
</template>
