<script setup>
import TheFooter from '@/components/TheFooter.vue';

</script>

<template>
  <main class="bg-gray-100 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-purple text-white py-16 px-8 text-center shadow-lg">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold mb-4">About Us</h1>
        <p class="text-lg">
          Welcome to **Trivium**, your ultimate trivia destination! Dive into a world of knowledge and fun.
        </p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-purple mb-8 text-center">Why Choose Trivium?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/categorize.png" alt="categorize"
              class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-2">Diverse Categories</h3>
            <p class="text-gray-600">
              Explore over 20+ categories ranging from Science & Nature to Entertainment and Sports.
            </p>
          </div>
          <!-- Feature 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/test-passed.png" alt="test-passed"
              class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-2">Leaderboard</h3>
            <p class="text-gray-600">
              Challenge your friends and climb the leaderboard with your knowledge skills.
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/idea.png" alt="idea"
              class="mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-2">Exciting Quizzes</h3>
            <p class="text-gray-600">
              Test your knowledge with over 10,000+ questions and expand your horizons.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="bg-purple text-white py-16 px-8">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Meet the Creator</h2>
        <p class="text-lg mb-6">
          Trivium was built with passion and a love for knowledge. Our goal is to create a fun and
          educational experience for everyone!
        </p>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div
            class="bg-white text-purple rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-4 shadow-lg flex items-center justify-center">
            <img width="500" height="500" src="https://img.icons8.com/avantgarde/100/user-male-circle.png"
              alt="user-male-circle" />
          </div>
          <div>
            <h3 class="text-xl font-semibold">John Doe</h3>
            <p>Developer & Trivia Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <TheFooter class="border-t-2 border-white" />
</template>
