import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {};

  const runtimeConfig = useRuntimeConfig()
  const backend_url = runtimeConfig.public.BACKEND_URL;
  const token = useCookie("XSRF-TOKEN");

  if (path.startsWith("/")) {
    path = path.slice(1);
  }

  if (token.value) {
    headers["X-XSRF-TOKEN"] = token.value as string;
  }

  console.log('useApiFetch', path, options, headers)
  return useFetch(backend_url + path, {
    lazy: true,
    server: false,
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
}
