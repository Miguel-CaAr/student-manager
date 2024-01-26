<template>
  <div class="background">
    <div class="register mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-5 col-7 bg-light">
      <form v-on:submit.prevent="saveUser">
        <div class="mx-auto m-4">
          <h2>Registro</h2>
        </div>
        <!-- Usuario input -->
        <div class="form-outline mb-4">
          <input
            type="text"
            id="userRegister"
            class="form-control"
            placeholder="Usuario"
            maxlength="15"
            v-model="user"
            required
          />
        </div>
        <!-- Nombre input -->
        <div class="form-outline mb-4">
          <input
            type="text"
            id="nameRegister"
            class="form-control"
            placeholder="Nombre"
            maxlength="50"
            v-model="name"
            required
          />
        </div>
        <!-- Fecha de nacimiento input -->
        <div class="form-outline mb-4">
          <input type="date" id="birthdate" class="form-control" v-model="date" required />
        </div>
        <!-- Contraseña input -->
        <div class="form-outline mb-4">
          <input
            type="password"
            id="passRegister"
            class="form-control"
            placeholder="Contraseña"
            maxlength="100"
            v-model="password"
            required
          />
        </div>
        <!-- Cerrar button -->
        <button v-on:click="Close" type="button" class="btn btn-danger btn-block mb-4 me-2">
          Cancelar
        </button>
        <!-- Guardar registro input -->
        <button v-on:click="Close" type="submit" class="btn btn-success btn-block mb-4 ms-2">
          Aceptar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
//----------Cerrar modal----------//
const emit = defineEmits(["TogglePopUp"]);

const Close = () => {
  emit("TogglePopUp");
};
//----------Datos del formulario-----------//
const user = ref("");
const name = ref("");
const date = ref("");
const password = ref("");

const saveUser = () => {
  const registrationData = {
    user: user.value,
    name: name.value,
    date: date.value,
    password: password.value,
  };
  localStorage.setItem(user.value, JSON.stringify(registrationData));

  user.value = "";
  name.value = "";
  date.value = "";
  password.value = "";
};
</script>

<style scoped>
.register {
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
