<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { defineForm, field } from 'vue-yup-form';
import * as yup from 'yup';
import Logo from '@/assets/Logo.svg';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

usePageStore().pageData.title = 'Sign in';

const authStore = useAuthStore();

const formData = defineForm({
  username: field('', yup.string().required()),
  password: field('', yup.string().required()),
});

const handleSubmit = () => {
  try {
    authStore.signin(formData.username.$value, formData.password.$value);
  } catch (error) {
    alert(error);
  }
};

onMounted(() => {
  authStore.resetError();
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <header class="flex justify-center">
        <Logo />
      </header>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
      <p class="mt-2 text-center text-sm text-gray-600 max-w">
        Don't have account?
        <RouterLink
          to="#"
          class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >Sign up</RouterLink
        >
      </p>
    </div>

    <div class="max-w-md mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-16 shadow rounded-lg sm:px-10">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <div>
              <InputText
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                v-model="formData.username.$value"
                placeholder="Johm Doe"
                name="username"
                type="text"
                required
              />

              <span v-if="formData.username.$error" class="text-red-500">{{
                formData.username.$error.message
              }}</span>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <InputText
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                v-model="formData.password.$value"
                placeholder="Password"
                name="username"
                type="password"
                required
              />

              <span v-if="formData.password.$error" class="text-red-500">{{
                formData.password.$error.message
              }}</span>
            </div>
          </div>

          <div>
            <Button type="submit" class="w-full flex shadow-sm text-sm font-medium">
              Sign up
            </Button>
          </div>
          <ErrorAlert v-if="authStore.error" :message="authStore.error" />
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>
