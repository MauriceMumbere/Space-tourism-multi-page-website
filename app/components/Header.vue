<script setup>
import { ref } from "vue";

const open = ref(false);

function toggleMenu() {
  open.value = !open.value;
}
</script>

<template>
  <header class="fixed left-0 right-0">
    <div
      class="flex justify-between items-center py-4 px-4 lg:py-8 md:px-0 md:pl-15 lg:pl-20 relative"
    >
      <!-- Ligne décorative -->
      <div
        class="absolute hidden lg:block h-[1.5px] bg-white/8 w-[560px] top-[68px] left-[200px] z-10"
      ></div>

      <!-- Logo -->
      <NuxtLink to="/">
        <img src="/shared/logo.svg" alt="Logo" />
      </NuxtLink>

      <!-- Toggle menu mobile -->
      <div class="md:hidden">
        <img
          src="/shared/icon-hamburger.svg"
          alt="menu toggle"
          class="cursor-pointer"
          @click="toggleMenu"
        />
      </div>

      <!-- Menu desktop -->
      <div class="hidden md:block w-[600px] lg:w-[800px]">
        <ul
          class="flex justify-end md:space-x-8 lg:space-x-20 text-white bg-white/5 backdrop-blur-md pr-15 lg:px-25 py-6"
        >
          <li>
            <NuxtLink
              to="/"
              class="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-[-21px] before:h-0.5 before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition before:duration-300 hover:before:scale-x-100"
              active-class="before:scale-x-100"
              >00 Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/destination"
              class="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-[-21px] before:h-0.5 before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition before:duration-300 hover:before:scale-x-100"
              active-class="before:scale-x-100"
              >01 Destination</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/crew"
              class="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-[-21px] before:h-0.5 before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition before:duration-300 hover:before:scale-x-100"
              active-class="before:scale-x-100"
              >02 Crew</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/technology"
              class="relative pb-1 before:content-[''] before:absolute before:left-0 before:bottom-[-21px] before:h-0.5 before:w-full before:bg-white before:scale-x-0 before:origin-left before:transition before:duration-300 hover:before:scale-x-100"
              active-class="before:scale-x-100"
              >03 Technology</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- Menu mobile -->
    <div
      v-if="open"
      class="md:hidden w-[70%] h-screen bg-white/5 backdrop-blur-md text-white absolute top-0 right-0 z-20 p-8"
    >
      <div class="flex justify-end">
        <img
          src="../assets/shared/icon-close.svg"
          alt="menu toggle"
          class="cursor-pointer"
          @click="toggleMenu"
        />
      </div>

      <ul class="flex flex-col space-y-6 py-6 mt-12">
        <li><NuxtLink to="/" @click="open = false">00 Home</NuxtLink></li>
        <li>
          <NuxtLink to="/destination" @click="open = false"
            >01 Destination</NuxtLink
          >
        </li>
        <li><NuxtLink to="/crew" @click="open = false">02 Crew</NuxtLink></li>
        <li>
          <NuxtLink to="/technology" @click="open = false"
            >03 Technology</NuxtLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>
