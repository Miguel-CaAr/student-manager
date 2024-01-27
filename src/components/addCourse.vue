<template>
  <div class="background">
    <div class="manager mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-5 col-7 bg-light">
      <form v-on:submit.prevent="saveCourse">
        <div class="mx-auto m-4">
          <h2 class="text-center">Agregar curso</h2>
        </div>
        <!-- Nombre curso input -->
        <div class="form-outline mb-4">
          <input type="text" id="nameCourse" class="form-control" placeholder="Nombre" maxlength="30" v-model="nameCourse" required />
        </div>
        <!-- Descripcion curso input -->
        <div class="form-outline mb-4">
          <input type="text" id="descriptionCourse" class="form-control" placeholder="Descripción" maxlength="64" v-model="description" required />
        </div>
        <!-- Fecha de finalizacion curso input -->
        <div class="form-outline mb-4">
          <input type="date" id="finishDate" class="form-control" v-model="finishDate" required />
        </div>
        <div class="d-flex justify-content-center">
          <!-- Cerrar button -->
          <button v-on:click="Close" type="button" class="btn btn-danger mb-4 me-2">Cancelar</button>
          <!-- Guardar registro input -->
          <button type="submit" class="btn btn-success mb-4 ms-2">Aceptar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { useUserStore } from "@/stores/userStore";
const $userStore = useUserStore();
const emit = defineEmits(["TogglePopUp", "GetCourses"]);

//----------Cerrar modal----------//
const Close = () => {
  emit("TogglePopUp");
  emit("GetCourses");
};

//-----------Agregar curso----------//
const nameCourse = ref("");
const description = ref("");
const finishDate = ref("");

const saveCourse = () => {
  const courseData = {
    course: true,
    createdBy: $userStore.user,
    nameCourse: nameCourse.value,
    finishDate: finishDate.value,
    description: description.value,
  };
  localStorage.setItem(nameCourse.value, JSON.stringify(courseData));

  nameCourse.value = "";
  description.value = "";
  finishDate.value = "";
  Close();
};
</script>

<style scoped>
.manager {
  border-radius: 25px;
  padding: 1rem;
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
