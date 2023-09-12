import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();
  const token = useCookie("XSRF-TOKEN");

  let headers: any = {
    accept: "application/json",
    referer: config.public.APP_URL,
  };

  if (!path.startsWith("/")) {
    path = "/" + path;
  }

  if (token.value) {
    headers["X-XSRF-TOKEN"] = token.value as string;
  }

  console.log('useApiFetch', path, options, headers)
  return useFetch(config.public.API_URL + path, {
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
