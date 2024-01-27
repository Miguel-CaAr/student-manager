<template>
  <div class="background">
    <div class="details mx-auto col-xl-7 col-lg-8 col-md-9 col-sm-10 col-11 bg-light">
      <form>
        <div class="mx-auto m-4">
          <h2>{{ data.nameCourse }}</h2>
        </div>
        <p>{{ data.description }}</p>
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
              <tr>
                <td>miguelcastro</td>
                <td>Hector Miguel Castro Arredondo</td>
                <td>10</td>
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
import { defineEmits, watch, ref } from "vue";
import { useCourseStore } from "@/stores/courseStore";
//----------Cerrar modal----------//
const emit = defineEmits(["TogglePopUpDetails"]);

const Close = () => {
  emit("TogglePopUpDetails");
};
//----------Obtener datos-----------//
const $courseStore = useCourseStore();
const data = ref({});
const updateData = () => {
  data.value = $courseStore.detailsCourse;
};
//Aqui se observan cambios en el store de pina
watch(
  () => $courseStore.detailsCourse,
  () => {
    updateData();
  }
);
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
