<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-purple grid lg:grid-cols-2 grid-cols-1 gap-6 items-center px-8 py-10">
    <!-- Left Content -->
    <div class="text-white space-y-6">
      <h1 class="text-4xl lg:text-5xl font-bold">
        Discover 10,000+ Trivia Questions Across a Wide Range of Categories!
      </h1>
      <h3 class="text-lg lg:text-2xl">
        Test your knowledge, explore new topics, and challenge friends today.
      </h3>
      <div class="space-x-4">
        <RouterLink to="/trivia">
          <button class="button-primary text-xl py-3 px-6 font-bold my-3">
            Start Trivia
          </button>
        </RouterLink>
        <RouterLink to="/category">
          <button class="button-secondary text-xl py-3 px-6 font-bold my-3">
            Explore Questions
          </button>
        </RouterLink>
      </div>
    </div>

    <!-- Right Content -->
    <div class="flex justify-center lg:justify-end">
      <img src="@/assets/hero.png" alt="hero-img" class="w-full max-w-md lg:max-w-lg">
    </div>
  </div>
</template>
