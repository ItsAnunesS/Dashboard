import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore();

  if (!authStore.isLoggedIn) {
    await authStore.fetchUser();
  }
});
