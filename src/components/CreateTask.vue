<template>
  <h1>To-do list vue js (composition)</h1>
  <div class="create-container">
    <!-- Créer une nouvelle tache  -->

    <form action="" @submit.prevent="addTask">
      <label for="todo">Nouvelle tâche</label>
      <input
        type="text"
        name="todo"
        id="todo"
        v-model="newTask"
        class="form-control"
      />

      <input type="submit" value="Ajouter" class="btn btn-success" />
    </form>
  </div>

  <!-- Afficher le nombre de tâches + supprimer toutes les taches -->

  <OptionTask
    v-if="taskList.length >= 1"
    :taskList="taskList"
    :deleteAll="deleteAll"
  ></OptionTask>

  <!-- Afficher la liste de tâches -->
  <div class="display-container" v-if="taskList.length >= 1">
    <ul>
      <display-task
        v-for="(item, index) in taskList"
        :key="index"
        :newTask="item"
        :taskList="taskList"
        :index="index"
        :deleteTask="deleteTask"
        :listener="listener"
      >
      </display-task>
    </ul>
  </div>
</template>

<script setup>
/* Imports */

import { useToDo } from "@/composables/useToDo";
import DisplayTask from "@/components/DisplayTask";
import OptionTask from "@/components/OptionTask";

const { newTask, taskList, addTask, deleteAll, deleteTask, index, listener } =
  useToDo("", []);
</script>

<style>
.create-container {
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  padding: 5%;
}

input {
  margin: 2%;
}
</style>
