import { defineStore } from "pinia";
export const useGetDataStore = defineStore("getData", {
  state: () => ({
    destinations: [],
    crew: [],
    technology: [],
  }),

  actions: {
    async fetchData() {
      const res = await fetch("/data.json");
      const json = await res.json();
      this.destinations = json.destinations;
      this.crew = json.crew;
      this.technology = json.technology;
    },
  },
});
