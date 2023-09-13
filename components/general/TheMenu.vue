<script setup lang="ts">
</script>

<template>
  <nav class="daisyui-navbar bg-base-100">
    <div class="flex-none">
      <label for="dashboard-drawer" class="lg:hidden daisyui-btn daisyui-btn-square daisyui-btn-ghost daisyui-swap daisyui-swap-rotate">

        <input type="checkbox" />

        <svg class="daisyui-swap-off fill-current inline-block w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

        <svg class="daisyui-swap-on fill-current inline-block w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>

      </label>
    </div>
    <div class="flex-1">
      <a class="daisyui-btn daisyui-btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <div class="daisyui-dropdown daisyui-dropdown-end">
        <label tabindex="0" class="daisyui-btn daisyui-btn-ghost daisyui-btn-circle daisyui-avatar">
          <div class="w-10 rounded-full">
            <img src="" />
          </div>
        </label>
        <ul tabindex="0" class="daisyui-menu daisyui-menu-sm daisyui-dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="daisyui-badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
