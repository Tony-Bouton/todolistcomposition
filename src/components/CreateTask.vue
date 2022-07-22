<template>
  <div class="wrapper">
    <!-- Créer une nouvelle tache  -->

    <form action="" @submit.prevent="addTask">
      <label for="todo">Nouvelle tache</label>
      <input type="text" name="todo" id="todo" v-model="newTask" />

      <input type="submit" value="Ajouter" />
    </form>
  </div>

  <!-- Afficher le nombre de tâches + supprimer toutes les taches -->

  <OptionTask :taskList="taskList" :deleteAll="deleteAll"></OptionTask>

  <!-- Afficher la liste de tâches -->
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
</template>

<script setup>
/* Imports */

import { useToDo } from "@/composables/useToDo";
import DisplayTask from "@/components/DisplayTask";
import OptionTask from "@/components/OptionTask";

const { newTask, taskList, addTask, deleteAll, deleteTask, index, listener } =
  useToDo("", []);
</script>

<style></style>
