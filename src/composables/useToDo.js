import { ref, reactive } from "vue";

export function useToDo(intialNewTask, intialTaskList) {
  /* State */
  const newTask = ref(intialNewTask);
  const taskList = reactive(intialTaskList);

  /* Methods */
  function addTask() {
    taskList.push(newTask.value);
    newTask.value = null;
  }

  function deleteAll() {
    taskList.length = 0;
  }

  function deleteTask(index) {
    taskList.splice(index, 1);
    console.log(index);
  }

  return {
    newTask,
    taskList,
    addTask,
    deleteAll,
    deleteTask,
  };
}
