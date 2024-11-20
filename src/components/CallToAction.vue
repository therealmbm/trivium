<template>
  <section class="bg-purple-dark py-10 text-center text-white">
    <h2 class="text-3xl sm:text-4xl font-bold mb-4">Ready to Challenge Yourself?</h2>
    <p class="text-lg sm:text-xl mb-6">Join thousands of trivia enthusiasts and test your knowledge today!</p>
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
      <RouterLink to="/trivia"
        class="bg-yellow text-purple-dark font-bold py-3 px-6 rounded-md shadow-md hover:bg-yellow-600 hover:text-white transition duration-300">
        Start Playing
      </RouterLink>
      <RouterLink to="/"
        class="bg-white text-purple-dark font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-300 transition duration-300">
        Create Account
      </RouterLink>
    </div>
  </section>
</template>
