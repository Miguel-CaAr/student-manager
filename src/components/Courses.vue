<template>
  <main class="container">
    <section class="row pt-3">
      <div class="options col-md-2 me-5">
        <button type="button" class="btn btn-info" @click.prevent="TogglePopUp">
          Agregar curso
        </button>
      </div>
      <div class="col-md-9 d-flex flex-row-reverse flex-wrap justify-content-between gap-3">
        <div class="card" style="width: 18rem" v-for="(value, key) in storage" :key="key">
          <div class="card-body">
            <h5 class="card-title text-primary">{{ key }}</h5>
            <p class="card-text">
              {{ value.description }}
            </p>
            <p class="card-text text-secondary">
              Finalizacion del curso: {{ value.finishDate }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <addCourse v-show="PopUp" v-on:TogglePopUp="TogglePopUp" />
  </main>
</template>

<script setup>
import addCourse from "./addCourse.vue";
import { reactive, ref } from "vue";
//----------Abrir modal----------//
const PopUp = ref(false);

const TogglePopUp = () => {
  PopUp.value = !PopUp.value;
};
//----------Obtener los cursos de localStorage----------//
const storage = reactive({});
Object.entries(localStorage).forEach(([key, value]) => {
  value.includes("course") ? (storage[key] = JSON.parse(value)) : null;
});
</script>

<style scoped></style>
