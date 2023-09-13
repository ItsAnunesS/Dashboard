export function useSiteState() {
  const isLoading = ref(false);

  function __setLoading(value: boolean) {
    isLoading.value = value;
  }

  function load() {
    __setLoading(true);
  }

  function unLoad() {
    __setLoading(false);
  }

  return {
    isLoading,
    load,
    unLoad,
  }
}
