/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(task) {
    this.todoList.push(task);
  }
  remove(index) {
    this.todoList.splice(index, 1);
  }
  update(index, todo) {
    const res = this.todoList[index];
    if (res) {
      this.todoList.splice(index, 1, todo);
    }
  }
  getAll() {
    return this.todoList;
  }
  get(index) {
    const res = this.todoList[index];
    if (!res) {
      return null;
    }
    return res;

  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
