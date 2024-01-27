<template>
  <main class="container">
    <section class="row pt-3">
      <div class="options col-md-2">
        <button type="button" class="btn btn-info" @click.prevent="TogglePopUp">
          Agregar curso
        </button>
      </div>
      <div class="col-md-10 p-0 d-flex flex-row-reverse flex-wrap gap-3">
        <div class="card" style="width: 18rem" v-for="(value, key) in storage" :key="key">
          <div class="card-body">
            <h5 class="card-title text-primary">{{ key }}</h5>
            <p class="card-text">
              {{ value.description }}
            </p>
            <p class="card-text text-secondary">
              Finalizacion del curso: {{ value.finishDate }}
            </p>
            <div class="text-center">
              <p>
                <a href="#" @click.prevent="TogglePopUpDetails" @click="sendDetails(value)"
                  >Detalles</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <addCourse v-show="PopUp" v-on:TogglePopUp="TogglePopUp" v-on:GetCourses="GetCourses" />
    <detailsCourse v-show="PopUpDetails" v-on:TogglePopUpDetails="TogglePopUpDetails" />
  </main>
</template>

<script setup>
import addCourse from "./addCourse.vue";
import detailsCourse from "./detailsCourse.vue";
import { onMounted, reactive, ref } from "vue";
import { useCourseStore } from "@/stores/courseStore";
const $courseStore = useCourseStore();
//----------Abrir modal----------//
const PopUp = ref(false);
const PopUpDetails = ref(false);

const TogglePopUp = () => {
  PopUp.value = !PopUp.value;
};

const TogglePopUpDetails = () => {
  PopUpDetails.value = !PopUpDetails.value;
};
//----------Obtener los cursos de localStorage----------//
const storage = reactive({});

const GetCourses = () => {
  Object.entries(localStorage).forEach(([key, value]) => {
    value.includes("course") ? (storage[key] = JSON.parse(value)) : null;
  });
};

//-----------Enviar detalles del curso----------//

const sendDetails = (courseDetails) => {
  $courseStore.updateDetails(courseDetails);
};

onMounted(() => {
  GetCourses();
});
</script>

<style scoped></style>
