import { defineStore } from "pinia";

export const useCourseStore = defineStore("courseStore", {
  id: "courseStore",
  state: () => ({
    detailsCourse: {},
  }),
  actions: {
    updateDetails(details) {
      this.detailsCourse = details;
    },
  },
});
