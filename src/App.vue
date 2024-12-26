<script setup lang="ts">
const errorStore = useErrorStore();

onErrorCaptured((error) => {
  errorStore.setError({ error });
});
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />
    <RouterView v-else />
  </AuthLayout>
</template>

<style scoped></style>
