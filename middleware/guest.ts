import { useAuthStore } from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    if (authStore.isLoggedIn) {
        return navigateTo("/", { replace: true });
    }
})
