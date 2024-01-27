<template>
  <div @mouseenter="getData" class="background-grade">
    <div class="manager mx-auto col-xl-4 col-lg-4 col-md-5 col-sm-6 col-8 bg-light">
      <form @submit.prevent="verifyData">
        <div class="mx-auto m-4">
          <h2 class="text-center">Calificar alumno</h2>
        </div>
        <!-- Curso select -->
        <p class="text-center mb-1">Curso:</p>
        <select v-model="courseSelect" class="form-select mb-2" aria-label="Default select example" required>
          <option selected disabled required>Seleccione un curso</option>
          <option v-for="(value, key) in storageCourse" :key="key">{{ key }}</option>
        </select>
        <p class="text-center mb-1">Alumno:</p>
        <select v-model="userSelect" class="form-select mb-2" aria-label="Default select example">
          <option selected disabled required>Seleccione una alumno</option>
          <option v-for="(value, key) in storageUser" :key="key">{{ value.name }}</option>
        </select>
        <!-- Calificacion del alumno en el curso input -->
        <p class="text-center mb-1">Ingrese calificacion:</p>
        <div class="form-outline mb-4 d-flex justify-content-center">
          <input type="number" id="gradeInput" class="form-control" maxlength="2" v-model="gradeInput" required />
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
import { defineEmits, reactive, ref } from "vue";
const emit = defineEmits(["TogglePopUpAddGrade"]);
const userSelect = ref("");
const courseSelect = ref("");
const gradeInput = ref("");
//----------Cerrar modal----------//
const Close = () => {
  emit("TogglePopUpAddGrade");
};

//----------Obtener cursos y alumnos----------//
const storageCourse = reactive({});
const storageUser = reactive({});

const getData = () => {
  //cursos
  Object.entries(localStorage).forEach(([key, value]) => {
    value.includes("course") ? (storageCourse[key] = JSON.parse(value)) : null;
  });
  //Alumnos
  Object.entries(localStorage).forEach(([key, value]) => {
    value.includes("password") ? (storageUser[key] = JSON.parse(value)) : null;
  });
};

//----------Verificar inscripcion----------//
const verifyData = () => {
  //Verificacion de alumno inscrito
  Object.entries(localStorage).forEach(([key, value]) => {
    if (value.includes(userSelect.value) && value.includes(courseSelect.value)) {
      saveData(JSON.parse(value).idStudent, JSON.parse(value));
    }
  });
};
//----------Guardar calificacion-----------//
const saveData = (idStudent, data) => {
  data.grade = gradeInput.value;
  localStorage.setItem(idStudent, JSON.stringify(data));
  Close();
};
</script>

<style scoped>
.manager {
  border-radius: 25px;
  padding: 1rem;
}
.background-grade {
  background-color: rgba(0, 0, 0, 0.344);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.form-control {
  width: 30%;
}
</style>
