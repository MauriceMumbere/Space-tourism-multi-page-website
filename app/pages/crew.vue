<script setup>
import { onMounted, ref, computed } from "vue";
import { useGetDataStore } from "~/store/getdata";

const store = useGetDataStore();

onMounted(() => {
  store.fetchData();
});

const activeIndex = ref(0);

const crew = computed(() => store.crew);

const activeTechnology = computed(() => {
  return crew.value?.[activeIndex.value];
});

const tabs = [
  { id: 0, number: 1 },
  { id: 1, number: 2 },
  { id: 2, number: 3 },
  { id: 3, number: 4 },
];
</script>

<template>
  <section
    class="lg:h-screen lg:bg-[url('/crew/background-crew-desktop.jpg')] md:bg-[url('/crew/background-crew-tablet.jpg')] bg-[url('/crew/background-crew-mobile.jpg')] pt-37 text-white bg-no-repeat bg-cover"
  >
    <div class="lg:w-[79%] lg:m-auto px-5 lg:px-0">
      <div
        class="flex flex-col lg:flex-row justify-between gap-10 py-8 items-center"
      >
        <!-- Contents -->
        <div class="space-y-32">
          <!-- Title -->
          <div class="text-center md:text-left">
            <h2 class="text-2xl"><span>02</span> MEET YOUR CREW</h2>
          </div>
          <!-- contenue -->
          <div class="text-center lg:text-left">
            <h2 class="mb-6 text-xl lg:text-4xl uppercase">
              {{ activeTechnology?.role }}
            </h2>
            <h1 class="text-3xl md:text-7xl uppercase mb-6">
              {{ activeTechnology?.name }}
            </h1>
            <p class="text-blue-200 leading-relaxed mb-8 max-w-136">
              {{ activeTechnology?.bio }}
            </p>
          </div>
          <!-- all Tabs -->
          <div class="flex justify-center lg:justify-start space-x-10">
            <div v-for="t in tabs" :key="t.id">
              <div
                @click="activeIndex = t.id"
                class="border h-4 w-4 rounded-full cursor-pointer"
                :class="
                  activeIndex === t.id
                    ? 'bg-white text-black'
                    : 'border-white text-white'
                "
              ></div>
            </div>
          </div>
        </div>
        <!-- Images -->
        <div>
          <img
            :src="activeTechnology?.images.png"
            :alt="activeTechnology?.webp"
            class="h-[400px] lg:h-[550px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
