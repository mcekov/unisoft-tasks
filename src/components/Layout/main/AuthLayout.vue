<script setup lang="ts">
// import { supabase } from '@/lib/supabaseClient';

const { pageData } = storeToRefs(usePageStore());
</script>

<template>
  <TopNavbar />
  <main>
    <slot />
  </main>
</template>

<style scoped></style>
