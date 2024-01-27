<template>
  <div class="background" @mouseenter="getData">
    <div class="manager mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-5 col-7 bg-light">
      <form>
        <div class="mx-auto m-4">
          <h2 class="text-center">Agregar estudiante</h2>
        </div>
        <!-- Nombre curso input -->
        <div class="form-outline mb-4">
          <input type="text" id="user" class="form-control" placeholder="Usuario" maxlength="30" required />
        </div>
        <select class="form-select mb-4" aria-label="Default select example">
          <option selected disabled required>Seleccione una materia</option>
          <option v-for="(value, key) in storage" :key="key">{{ key }}</option>
        </select>
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
import { defineEmits, onMounted, reactive } from "vue";
const emit = defineEmits(["TogglePopUpAddStudent"]);

//----------Cerrar modal----------//
const Close = () => {
  emit("TogglePopUpAddStudent");
};

//----------Obtener los cursos de localStorage----------//
const storage = reactive({});
const getData = () => {
  Object.entries(localStorage).forEach(([key, value]) => {
    value.includes("course") ? (storage[key] = JSON.parse(value)) : null;
  });
};

onMounted(() => {
  getData();
});
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
