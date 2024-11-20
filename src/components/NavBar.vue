<script setup>
import { useRoute } from 'vue-router'; // Import useRoute to get the current route
const route = useRoute(); // Access the current route
</script>

<template>
  <div class="bg-purple-dark border-b-white flex">
    <!-- Logo -->
    <RouterLink to="/" class="text-white text-3xl font-extrabold px-3 ms-12">
      <img src="@/assets/logo.png" alt="trivium-logo" class="w-40">
    </RouterLink>

    <!-- Navigation Links -->
    <div class="ms-auto my-7 me-10">
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
    </div>
  </div>
</template>
