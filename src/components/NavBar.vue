<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'; // Import ref to handle menu toggle
const route = useRoute();
const isMenuOpen = ref(false); // State for mobile menu toggle
</script>

<template>
  <div class="bg-purple-dark border-b-white flex flex-wrap items-center justify-between px-4 sm:px-10">
    <!-- Logo -->
    <RouterLink to="/" class="text-white text-3xl font-extrabold">
      <img src="@/assets/logo.png" alt="trivium-logo" class="w-32 sm:w-40">
    </RouterLink>

    <!-- Hamburger Menu for Mobile -->
    <button class="text-white text-2xl sm:hidden focus:outline-none" @click="isMenuOpen = !isMenuOpen"
      aria-label="Toggle menu">
      <span v-if="!isMenuOpen">☰</span>
      <span v-else>✖</span>
    </button>

    <!-- Navigation Links -->
    <nav :class="{
      'hidden sm:flex': !isMenuOpen,
      'flex flex-col sm:flex-row': isMenuOpen
    }" class="w-full sm:w-auto mt-4 sm:mt-0 space-y-3 sm:space-y-0 sm:space-x-6 text-center">
      <RouterLink to="/" class="nav-link" :class="{ 'bg-yellow': route.path === '/' }">
        Home
      </RouterLink>

      <RouterLink to="/trivia" class="nav-link" :class="{ 'bg-yellow': route.path === '/trivia' }">
        Play Trivia
      </RouterLink>

      <RouterLink to="/category" class="nav-link" :class="{ 'bg-yellow': route.path === '/category' }">
        Categories
      </RouterLink>

      <RouterLink to="/leaderboard" class="nav-link" :class="{ 'bg-yellow': route.path === '/leaderboard' }">
        Leaderboard
      </RouterLink>

      <RouterLink to="/about" class="nav-link" :class="{ 'bg-yellow': route.path === '/about' }">
        About
      </RouterLink>
    </nav>
  </div>
</template>
