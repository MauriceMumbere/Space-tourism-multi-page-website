<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useGetDataStore } from "~/store/getData";

const store = useGetDataStore();
onMounted(() => {
  store.fetchData();
});
const activeIndex = ref(0);
const destinations = computed(() => store.destinations);
const activeDestination = computed(() => {
  return destinations.value?.[activeIndex.value];
});
</script>

<template>
  <section
    class="lg:h-screen bg-[url('/destination/background-destination-desktop.jpg')] pt-37 text-white"
  >
    <div class="lg:w-[75%] m-auto px-4 md:px-16 lg:px-0">
      <h2 class="text-2xl">
        <span class="opacity-50 mr-4">01</span> PICK YOUR DESTINATION
      </h2>
      <div
        class="flex flex-col lg:flex-row py-18 justify-between items-center px-12"
      >
        <div>
          <div v-if="activeDestination">
            <img
              :src="activeDestination.images.png"
              :alt="activeDestination.name"
              class="w-[445px]"
            />
          </div>
        </div>
        <div class="max-w-[445px] text-center lg:text-left mt-15 lg:mt-0">
          <div
            class="flex justify-center lg:justify-start space-x-8 mb-8 uppercase tracking-widest"
          >
            <button
              v-for="(d, index) in destinations"
              :key="d.name"
              @click="activeIndex = index"
              class="pb-2 border-b-2 border-transparent hover:border-white/50 cursor-pointer"
              :class="{
                'border-white': activeIndex === index,
              }"
            >
              {{ d.name }}
            </button>
          </div>
          <div v-if="activeDestination">
            <h1 class="text-8xl uppercase mb-6">
              {{ activeDestination.name }}
            </h1>
            <p class="text-blue-200 leading-relaxed mb-8">
              {{ activeDestination.description }}
            </p>
            <hr class="border-white/20 mb-8" />
            <div
              class="flex justify-center lg:justify-start space-x-16 uppercase"
            >
              <div>
                <p class="text-sm text-blue-200">Avg. distance</p>
                <p class="text-2xl">{{ activeDestination.distance }}</p>
              </div>
              <div>
                <p class="text-sm text-blue-200">Est. travel time</p>
                <p class="text-2xl">{{ activeDestination.travel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
