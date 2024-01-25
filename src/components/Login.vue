<template>
  <div class="mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-5 col-7 bg-light">
    <form>
      <!-- Usuario input -->
      <div class="form-outline mb-4">
        <input type="text" id="user" class="form-control" placeholder="Usuario" />
      </div>
      <!-- Contraseña input -->
      <div class="form-outline mb-4">
        <input type="password" id="pass" class="form-control" placeholder="Contraseña" />
      </div>
      <!-- Ingresar button -->
      <button type="button" class="btn btn-primary btn-block mb-4">Ingresar</button>
      <!-- Registrar buttons -->
      <div class="text-center">
        <p><a href="#" @click.prevent="TogglePopUp">Registrarse</a></p>
      </div>
    </form>
  </div>
  <Register v-show="PopUp" v-on:TogglePopUp="TogglePopUp" />
</template>

<script setup>
import { ref } from "vue";
import Register from "./Register.vue";

const PopUp = ref(false);

const TogglePopUp = () => {
  PopUp.value = !PopUp.value;
};
</script>

<style lang="scss" scoped></style>
