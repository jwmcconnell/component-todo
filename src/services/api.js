import findById from './find-by-id.js';

const api = {
  key: 'todos',
  save(todo) {
    let todos = api.getAll();
    todos.unshift(todo);
    const todoData = JSON.stringify(todos);
    localStorage.setItem(api.key, todoData);
  },
  get(id) {
    const todos = api.getAll();
    return findById(todos, id);
  },
  getAll() {
    const todoData = localStorage.getItem(api.key);
    let todos = JSON.parse(todoData);
    if(!todos) {
      todos = [];
    }
    return todos;
  },
  isEmpty() {
    const todoData = localStorage.getItem(api.key);
    let todos = JSON.parse(todoData);
    if(!todos) {
      return true;
    }
    return false;
  },
  remove(id) {
    let todos = api.getAll();
    let newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    const todoData = JSON.stringify(newTodos);
    localStorage.setItem(api.key, todoData);
  },
  update(newTodo) {
    let todos = api.getAll();

    const newTodos = todos.map(todo => {
      if(todo.id === newTodo.id) {
        return newTodo;
      }

      return todo;
    });

    const todoData = JSON.stringify(newTodos);
    localStorage.setItem(api.key, todoData);
  }
};

export default api;