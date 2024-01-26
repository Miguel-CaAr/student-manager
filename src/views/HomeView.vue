<template>
  <div class="position-relative p-3 vh-100 text-center bg-body-tertiary">
    <div class="col-md-6 mx-auto my-5">
      <h1 class="display-3 fw-bold">Plataforma Escolar</h1>
      <h3 class="fw-normal mt-3 text-muted mb-3">Bienvenido</h3>
    </div>
    <Login />
  </div>
</template>

<script setup lang="ts">
import Login from "../components/Login.vue";
// import { onMounted } from "vue";

// onMounted(() => {
//   addTeacher();
// });

// //----------Agregar maestro de prueba----------//
// const addTeacher = () => {
//   const loginData = {
//     user: "profesor",
//     password: "123",
//   };
//   localStorage.setItem("user", JSON.stringify(loginData));
// };
</script>

<style scoped></style>
