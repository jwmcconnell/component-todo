import findById from './find-by-id.js';

const api = {
  key: 'todos',
  save(todo) {
    let todos = api.getAll();
    todos.push(todo);
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
  }
};

export default api;