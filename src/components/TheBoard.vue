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
  <div class="leaderboard m-10">
    <header class="flex place-self-center">
      <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/medal.png" alt="medal" />
      <h1 class="font-bold text-5xl text-purple py-4">LEADERBOARD</h1>
      <img width="100" height="100" src="https://img.icons8.com/avantgarde/100/medal.png" alt="medal" />
    </header>
    <div class="board m-10 w-2/3 place-self-center text-center">
      <table class="table-auto w-full text-white bg-purple">
        <thead class="bg-purple-dark">
          <tr>
            <th class="px-4 py-2 text-xl">Rank</th>
            <th class="px-4 py-2 text-xl">Player</th>
            <th class="px-4 py-2 text-xl">Score</th>
          </tr>
        </thead>
        <tbody class="bg-purple">
          <!-- Loop through sorted leaderboard with rank -->
          <tr v-for="entry in leaderboardWithRank" :key="entry.rank">
            <td class="px-4 py-2 text-md">{{ entry.rank }}</td>
            <td class="px-4 py-2 text-md">{{ entry.player }}</td>
            <td class="px-4 py-2 text-md">{{ entry.score }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
