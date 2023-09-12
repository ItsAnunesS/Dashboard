<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';

definePageMeta({
  layout: "blank",
  middleware: ["guest"],
});

const form: Ref<CredentialsType> = ref({
  email: "test@example.com",
  password: "password",
})

const isLoading = ref(false);
const error = ref('');
const success = ref('');
const authStore = useAuthStore();

async function handleLogin() {
  if (isLoading.value) {
    return;
  }

  if (authStore.isLoggedIn) {
    return navigateTo("/");
  }

  const {pending, error} = await authStore.login(form.value);

  isLoading.value = pending.value;

  if (!error.value && !pending.value) {
    success.value = "Login successful";
    return navigateTo("/");
  }
}
</script>

<template>
  <div class="flex h-screen justify-center items-center">
    <div class="daisyui-card m-4 w-full sm:w-96 bg-neutral text-neutral-content">
      <div class="daisyui-card-body items-center text-center justify-center">
        <h2 class="daisyui-card-title">It's AnunesS</h2>
        <form @submit.prevent="handleLogin" class="daisyui-card-actions justify-end">
          <div class="daisyui-form-control w-full">
            <label for="username" class="daisyui-label">
              <span class="daisyui-label-text">What is e-mail?</span>
            </label>
            <input id="username" v-model="form.email" type="text" placeholder="Type here" class="daisyui-input daisyui-input-bordered w-full" />
          </div>
          <div class="daisyui-form-control w-full">
            <label for="password" class="daisyui-label">
              <span class="daisyui-label-text">What is your password?</span>
            </label>
            <input id="password" v-model="form.password" type="password" placeholder="Type here" class="daisyui-input daisyui-input-bordered w-full" />
          </div>
          <button type="submit" class="mt-4 mx-auto daisyui-btn daisyui-btn-block daisyui-btn-md">
            Login
          </button>
        </form>
        <div v-if="error" class="daisyui-alert daisyui-alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{{ error }}</span>
        </div>
        <div v-if="success" class="daisyui-alert daisyui-alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{{ success }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
