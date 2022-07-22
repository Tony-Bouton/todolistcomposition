<template>
  <div class="wrapper">
    <form action="" @submit.prevent="addTask">
      <label for="todo">Nouvelle tache</label>
      <input type="text" name="todo" id="todo" v-model="newTask" />

      <input type="submit" value="Ajouter" />
    </form>
  </div>

  <OptionTask :taskList="taskList" :deleteAll="deleteAll"></OptionTask>

  <ul>
    <display-task
      v-for="(item, index) in taskList"
      :key="index"
      :newTask="item"
      :taskList="taskList"
      :index="index"
      :deleteTask="deleteTask"
    >
    </display-task>
  </ul>
</template>

<script setup>
/* Imports */

import { useToDo } from "@/composables/useToDo";
import DisplayTask from "@/components/DisplayTask";
import OptionTask from "@/components/OptionTask";

const { newTask, taskList, addTask, deleteAll, deleteTask, index } = useToDo(
  "",
  []
);
</script>

<style></style>
