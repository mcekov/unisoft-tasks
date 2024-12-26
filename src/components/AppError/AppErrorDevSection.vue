<script setup lang="ts">
import Button from 'primevue/button';
import { Icon } from '@iconify/vue';

defineProps<{
  message: string;
  customCode: number;
  code: string;
  statusCode: number;
  hint: string | null;
  details: string;
}>();
</script>

<template>
  <div>
    <Icon icon="lucide:triangle-alert" class="text-red-500 text-7xl m-auto" />
    <h1 class="error__code">{{ customCode || code }}</h1>
    <p class="error__code" v-if="statusCode">Status Code: {{ statusCode }}</p>
    <p class="error__msg">{{ message }}</p>
    <p v-if="hint">{{ hint }}</p>
    <p v-if="details">{{ details }}</p>
    <div class="error-footer">
      <p class="error-footer__text">You'll find lots to explore on the home page.</p>
      <RouterLink to="/">
        <Button
          class="max-w-36 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          label="Back to Home"
        />
      </RouterLink>
    </div>
  </div>
</template>
