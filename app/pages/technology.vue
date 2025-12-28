<script setup>
import { onMounted, ref, computed } from "vue";
import { useGetDataStore } from "~/store/getData";

const store = useGetDataStore();

onMounted(() => {
  store.fetchData();
});

const activeIndex = ref(0);

const technology = computed(() => store.technology);

const activeTechnology = computed(() => {
  return technology.value?.[activeIndex.value];
});

const tabs = [
  { id: 0, number: 1 },
  { id: 1, number: 2 },
  { id: 2, number: 3 },
];
</script>

<template>
  <section
    class="lg:h-screen lg:bg-[url('/technology/background-technology-desktop.jpg')] md:bg-[url('/technology/background-technology-tablet.jpg')] bg-[url('/technology/background-technology-mobile.jpg')] pt-37 text-white"
  >
    <div class="lg:pl-55">
      <div class="pl-16 lg:pl-0">
        <h2 class="text-2xl">
          <span class="opacity-50 mr-4">03</span> SPACE LAUNCH 101
        </h2>
      </div>
      <div
        class="flex flex-col-reverse lg:flex-row justify-between py-8 items-center lg:pl-12"
      >
        <div class="flex flex-col lg:flex-row gap-7 mt-10">
          <div
            class="flex flex-row justify-center lg:justify-start lg:flex-col space-x-10 space-y-10"
          >
            <div v-for="t in tabs" :key="t.id">
              <div
                @click="activeIndex = t.id"
                class="flex items-center justify-center border h-14 w-14 rounded-full cursor-pointer"
                :class="
                  activeIndex === t.id
                    ? 'bg-white text-black'
                    : 'border-white text-white'
                "
              >
                {{ t.number }}
              </div>
            </div>
          </div>
          <div class="text-center lg:text-left">
            <h2 class="mb-6 text-xl md:text-5xl">THE TERMINOLOGY…</h2>
            <h1 class="text-4xl md:text-7xl uppercase mb-6">
              {{ activeTechnology?.name }}
            </h1>
            <p class="text-blue-200 leading-relaxed mb-8 max-w-136">
              {{ activeTechnology?.description }}
            </p>
          </div>
        </div>
        <div>
          <img
            :src="activeTechnology?.images.landscape"
            :alt="activeTechnology?.name"
            class="w-full lg:hidden h-[350px]"
          />
          <img
            :src="activeTechnology?.images.portrait"
            :alt="activeTechnology?.name"
            class="hidden lg:block h-[500px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
