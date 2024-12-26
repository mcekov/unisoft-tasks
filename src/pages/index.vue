<script setup lang="ts">
usePageStore().pageData.title = 'Home';
</script>

<template>
  <section class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-6xl font-bold">Home Page</h1>
    <RouterLink to="/profile" class="hover:text-indigo-500 hover:underline mt-2"
      >Go to your profile</RouterLink
    >
  </section>
</template>

<style></style>
