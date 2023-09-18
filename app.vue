<script setup lang="ts">
useSchemaOrg([
  defineWebSite({
    name: 'AnunesS',
  }),
  defineWebPage(),
]);

const getCookieLocale = () => {
  const { locale } = useI18n();

  switch(locale.value) {
    case 'en':
      return 'en';
    case 'pt':
      return 'pt';
    default:
      return 'en';
  }
}

const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const title = computed(() => t('system.title'));
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <GeneralTheWarning />
      <NuxtLayout>
        <CookieControl :locale="getCookieLocale()" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
