<template>
  <div class="mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-5 col-7 bg-light">
    <form>
      <!-- Usuario input -->
      <div class="form-outline mb-4">
        <input
          type="text"
          id="user"
          class="form-control"
          placeholder="Nombre de usuario"
          v-model="user"
          required
        />
      </div>
      <!-- Contraseña input -->
      <div class="form-outline mb-4">
        <input
          type="password"
          id="password"
          class="form-control"
          placeholder="Contraseña"
          v-model="password"
          required
        />
      </div>
      <!-- Ingresar button -->
      <button v-on:click="verifyUser" type="button" class="btn btn-primary btn-block mb-4">
        Ingresar
      </button>
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
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
const $userStore = useUserStore();
const router = useRouter();
//----------Abrir modal----------//
const PopUp = ref(false);

const TogglePopUp = () => {
  PopUp.value = !PopUp.value;
};
//----------Validacion del inicio de sesion----------//
const user = ref("");
const password = ref("");
const verifyUser = () => {
  const loginData = {
    user: user.value,
    password: password.value,
  };
  const storedRecords = JSON.parse(localStorage.getItem(user.value || {}));
  if (storedRecords?.password === loginData.password) {
    $userStore.updateUser(user.value);
    router.push("/MainPanel");
  } else {
    alert("No se encuentra el usuario o la contraseña es incorrecta");
  }
};
</script>

<style lang="scss" scoped></style>
