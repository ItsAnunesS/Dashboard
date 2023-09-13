export function usePages<T>() {
  const pages = ref<PageInterface[]>([
    {
      title: "Home",
      url: "/",
      id: "index"
    },
    {
      title: "About",
      url: "/about",
      id: "about"
    },
    {
      title: "Contact",
      url: "/contact",
      id: "contact"
    }
  ] as PageInterface[]);

  return {
    pages
  }
}
