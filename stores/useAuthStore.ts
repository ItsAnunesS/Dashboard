import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserType | null>(null);
  const isLoggedIn = computed(() => !!user.value);
  const loading = ref(false);

  async function fetchUser() {
    const {pending, data, error} = await useApiFetch("/api/user");
    user.value = data.value as UserType;
  }

  async function logout() {
    await useApiFetch("/logout", { method: "POST" });
    user.value = null;
    navigateTo("/login");
  }

  async function login(credentials: CredentialsType) {
    await useApiFetch("/sanctum/csrf-cookie");

    const login = await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();
    return login;
  };

  return { user, isLoggedIn, loading, fetchUser, login, logout }
});
