<template>
  <div class="background">
    <div class="details mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-5 col-7 bg-light">
      <form>
        <div class="mx-auto m-4">
          <h2>Detalles</h2>
        </div>
        <!-- Cerrar button -->
        <div class="d-flex justify-content-center">
          <button v-on:click="Close" type="button" class="btn btn-danger mb-4 me-2">
            Cerrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
//----------Cerrar modal----------//
const emit = defineEmits(["TogglePopUpDetails"]);

const Close = () => {
  emit("TogglePopUpDetails");
};
</script>

<style scoped>
.details {
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
