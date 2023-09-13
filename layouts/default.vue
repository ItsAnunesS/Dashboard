<script setup lang="ts">
const localePath = useLocalePath();
const { isLoading } = useSiteState();
</script>

<template>
  <div>
    <GeneralTheMenu />
    <div class="daisyui-drawer lg:daisyui-drawer-open">
      <input id="dashboard-drawer" type="checkbox" class="daisyui-drawer-toggle" />
      <div class="daisyui-drawer-content flex flex-col">
        <main class="p-2">
          <slot />
        </main>
        <GeneralTheFooter />
      </div>
      <div class="daisyui-drawer-side">
        <label for="dashboard-drawer" class="daisyui-drawer-overlay"></label>
        <ul class="daisyui-menu p-4 w-2/3 md:w-72 min-h-full bg-base-200 text-base-content">
          <li v-for="page in usePages().pages.value">
            <NuxtLink :to="localePath({ name: page.id })">
              {{ page.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
