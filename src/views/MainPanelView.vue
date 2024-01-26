<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Panel principal</a>
        <RouterLink to="/">
          <button type="button" class="btn btn-danger">Salir</button>
        </RouterLink>
      </div>
    </nav>
  </header>
  <main class="container">
    <section class="row pt-3">
      <div class="options col-md-2 me-5">
        <button type="button" class="btn btn-info" @click.prevent="TogglePopUp">
          Agregar curso
        </button>
      </div>
      <div class="card col-md-9">No hay cursos</div>
    </section>
    <addCourse v-show="PopUp" v-on:TogglePopUp="TogglePopUp" />
  </main>
</template>

<script setup>
import addCourse from "../components/addCourse.vue";
import { ref } from "vue";
//----------Abrir modal----------//
const PopUp = ref(false);

const TogglePopUp = () => {
  PopUp.value = !PopUp.value;
};
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
