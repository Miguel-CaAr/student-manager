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
  <Courses />
</template>

<script setup>
import Courses from "../components/Courses.vue";
</script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
