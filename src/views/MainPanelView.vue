<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Panel principal</a>
      </div>
    </nav>
  </header>
  <main class="container">
    <section class="row pt-5">
      <div class="options col-md-3 me-5">
        <div class="card p-3">opcion 1 quiza agregar materia</div>
        <div class="card p-3">opcion 2 quiza agregar gestionar alumnos</div>
        <div class="card p-3">opcion 3 no se</div>
        <div class="card p-3">opcion 4 no se</div>
      </div>
      <div class="card col-md-8">No hay cursos</div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
.options {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
