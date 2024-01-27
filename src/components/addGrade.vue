<template>
  <div class="background">
    <div class="manager mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-5 col-7 bg-light">
      <form>
        <div class="mx-auto m-4">
          <h2 class="text-center">Calificar alumno</h2>
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
import { defineEmits } from "vue";
const emit = defineEmits(["TogglePopUpAddGrade"]);

//----------Cerrar modal----------//
const Close = () => {
  emit("TogglePopUpAddGrade");
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
