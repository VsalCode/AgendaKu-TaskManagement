// CRUD untuk addTask

class Task {
  constructor() {
    this.tasks = this.getTask();
  }

  getTask() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  saveTask(taskData) {
    const newTaskData = {
      id: Date.now(),
      isCompleted: false,
      ...taskData, // merge all data from taskData from 'addTask.js'
    };

    this.tasks.push(newTaskData);
    localStorage.setItem("tasks", JSON.stringify(this.tasks)); // Fixed typo here

    return {
      success: true,
    };
  }

  completeTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id == taskId);

    if (index !== -1) {
      this.tasks[index].isCompleted = true;
      this.updateLocalStorage();
    }
  }

  deleteTask(taskId) {
    const index = this.tasks.findIndex((task) => task.id == taskId);

    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
