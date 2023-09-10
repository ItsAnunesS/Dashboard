<script setup>
definePageMeta({
  title: 'pages.title.about'
})

useHead({
  meta: [{ property: "og:title", content: "this is og title for about page" }]
})
</script>

<template>
  <h2>{{ $t('welcome') }}</h2>
</template>
