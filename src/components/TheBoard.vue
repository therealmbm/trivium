<script setup>
import leaderboardData from '@/leaderboard.json';
import { computed } from 'vue';

// Sort leaderboard data by score in descending order
const sortedLeaderboard = computed(() => {
  return [...leaderboardData].sort((a, b) => b.score - a.score); // Assuming scores are numeric
});

// Add rank to each entry after sorting
const leaderboardWithRank = computed(() => {
  return sortedLeaderboard.value.map((entry, index) => ({
    ...entry,
    rank: index + 1 // Set rank based on position in the sorted array
  }));
});
</script>

<template>
  <div class="leaderboard m-4 sm:m-10">
    <!-- Header Section -->
    <header class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
      <img width="80" height="80" src="https://img.icons8.com/avantgarde/100/medal.png" alt="medal" />
      <h1 class="font-bold text-3xl sm:text-5xl text-purple py-4">LEADERBOARD</h1>
      <img width="80" height="80" src="https://img.icons8.com/avantgarde/100/medal.png" alt="medal" />
    </header>

    <!-- Leaderboard Table -->
    <div class="board m-4 sm:m-10 w-full sm:w-2/3 place-self-center text-center">
      <table class="table-auto w-full text-white bg-purple rounded-lg shadow-md">
        <thead class="bg-purple-dark">
          <tr>
            <th class="px-4 py-2 text-sm sm:text-xl">Rank</th>
            <th class="px-4 py-2 text-sm sm:text-xl">Player</th>
            <th class="px-4 py-2 text-sm sm:text-xl">Score</th>
          </tr>
        </thead>
        <tbody class="bg-purple">
          <!-- Loop through sorted leaderboard with rank -->
          <tr v-for="entry in leaderboardWithRank" :key="entry.rank">
            <td class="px-4 py-2 text-xs sm:text-md">{{ entry.rank }}</td>
            <td class="px-4 py-2 text-xs sm:text-md">{{ entry.player }}</td>
            <td class="px-4 py-2 text-xs sm:text-md">{{ entry.score }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
