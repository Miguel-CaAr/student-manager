<template>
  <main class="container-fluid p-2">
    <section class="row pt-3">
      <div class="col-md-2">
        <ul class="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px" data-bs-theme="light">
          <li class="text-center">Opciones</li>
          <li>
            <a class="dropdown-item rounded-2" href="#" type="button" @click.prevent="TogglePopUp">Agregar curso </a>
          </li>
          <li>
            <a class="dropdown-item rounded-2" href="#" type="button" @click.prevent="TogglePopUpAddStudent">Agregar alumno</a>
          </li>
          <li>
            <a class="dropdown-item rounded-2" href="#" type="button" @click.prevent="TogglePopUpAddGrade">Calificar alumno</a>
          </li>
        </ul>
      </div>
      <div class="col-md-10 d-flex flex-row-reverse flex-wrap gap-3">
        <template v-for="(value, key) in storage" :key="key">
          <template v-if="value.createdBy.includes($userStore.user)">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title text-primary">{{ key }}</h5>
                <p class="card-text">
                  {{ value.description }}
                </p>
                <p class="card-text text-secondary">Finalizacion del curso: {{ value.finishDate }}</p>
                <div class="text-center">
                  <p>
                    <a href="#" @click.prevent="TogglePopUpDetails" @click="sendDetails(value)">Detalles</a>
                  </p>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </section>
    <addCourse v-show="PopUp" v-on:TogglePopUp="TogglePopUp" v-on:GetCourses="GetCourses" />
    <detailsCourse v-show="PopUpDetails" v-on:TogglePopUpDetails="TogglePopUpDetails" />
    <addStudent v-show="PopUpAddStudent" v-on:TogglePopUpAddStudent="TogglePopUpAddStudent" />
    <addGrade v-show="PopUpAddGrade" v-on:TogglePopUpAddGrade="TogglePopUpAddGrade" />
  </main>
</template>

<script setup>
import addCourse from "./addCourse.vue";
import detailsCourse from "./detailsCourse.vue";
import addStudent from "./addStudent.vue";
import addGrade from "./addGrade.vue";
import { onMounted, reactive, ref } from "vue";
import { useCourseStore } from "@/stores/courseStore";

const $courseStore = useCourseStore();
//----------Abrir modal----------//
const PopUp = ref(false);
const PopUpDetails = ref(false);
const PopUpAddStudent = ref(false);
const PopUpAddGrade = ref(false);

const TogglePopUp = () => {
  PopUp.value = !PopUp.value;
};

const TogglePopUpDetails = () => {
  PopUpDetails.value = !PopUpDetails.value;
};

const TogglePopUpAddStudent = () => {
  PopUpAddStudent.value = !PopUpAddStudent.value;
};

const TogglePopUpAddGrade = () => {
  PopUpAddGrade.value = !PopUpAddGrade.value;
};
//----------Obtener los cursos de localStorage----------//
const storage = reactive({});

const GetCourses = () => {
  Object.entries(localStorage).forEach(([key, value]) => {
    value.includes("course") ? (storage[key] = JSON.parse(value)) : null;
  });
};

//-----------Enviar detalles del curso----------//

const sendDetails = (courseDetails) => {
  $courseStore.updateDetails(courseDetails);
};
//------------Obtener usuario-----------//
import { useUserStore } from "@/stores/userStore";
const $userStore = useUserStore();

onMounted(() => {
  GetCourses();
});
</script>

<style scoped>
.dropdown-item:hover {
  background-color: #5b95fe;
}
</style>
