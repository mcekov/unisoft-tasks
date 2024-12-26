<script setup lang="ts">
import Button from 'primevue/button';

import { storeToRefs } from 'pinia';
import { usePageStore } from '@/stores/page';

const { pageData } = storeToRefs(usePageStore());
const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
};
</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex gap-2 justify-between px-6 items-center">
    <div>
      <ul v-if="authStore.isAuthenticated" class="flex gap-4">
        <li>
          <RouterLink to="/" class="text-sm font-medium hover:text-green-500 hover:underline"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/profile" class="text-sm font-medium hover:text-green-500 hover:underline"
            >Profile</RouterLink
          >
        </li>
      </ul>
    </div>
    <Button v-if="authStore.isAuthenticated" @click="handleLogout" class="text-sm font-medium"
      >Logout</Button
    >
  </nav>
</template>
