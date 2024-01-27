<template>
  <div class="background" @mouseenter="GetUsers">
    <div class="details mx-auto col-xl-7 col-lg-8 col-md-9 col-sm-10 col-11 bg-light">
      <form>
        <div class="mx-auto m-4">
          <h2>{{ courses.nameCourse }}</h2>
        </div>
        <p>{{ courses.description }}</p>
        <!-- Tabla usuarios -->
        <div class="table-container">
          <table class="table">
            <thead>
              <th class="text-center" colspan="3">Alumnos</th>
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Nombre</th>
                <th scope="col">Calificacion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, key) in storage" :key="key">
                <template v-if="value.enrolled.includes(courses.nameCourse)">
                  <td>{{ value.userStudent }}</td>
                  <td>{{ value.nameStudent }}</td>
                  <td>{{ value.grade }}</td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Cerrar button -->
        <div class="d-flex justify-content-center">
          <button v-on:click="Close" type="button" class="btn btn-danger mb-4 me-2">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, watch, ref, reactive } from "vue";
import { useCourseStore } from "@/stores/courseStore";
//----------Cerrar modal----------//
const emit = defineEmits(["TogglePopUpDetails"]);

const Close = () => {
  emit("TogglePopUpDetails");
};
//----------Obtener datos-----------//
const $courseStore = useCourseStore();
const courses = ref({});
const updateCourses = () => {
  courses.value = $courseStore.detailsCourse;
};
//Aqui se observan cambios en el store de pina
watch(
  () => $courseStore.detailsCourse,
  () => {
    updateCourses();
  }
);
//----------Obtener los usuarios de localStorage----------//
const storage = reactive({});

const GetUsers = () => {
  Object.entries(localStorage).forEach(([key, value]) => {
    value.includes("grade") ? (storage[key] = JSON.parse(value)) : null;
  });
};
</script>

<style scoped>
.details {
  border-radius: 25px;
  padding: 1rem;
}
.table-container {
  max-height: 50vh; /* Ajusta la altura máxima según tus necesidades */
  overflow: auto;
}
.background {
  background-color: rgba(0, 0, 0, 0.344);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
