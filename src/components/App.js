import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import filterTodo from '../filter-todo.js';
import api from '../services/api.js';

import todos from '../../data/todos.js';

class App extends Component {

  render() {
    const dom = this.renderDOM();

    if(api.isEmpty()) {
      todos.forEach(todo => {
        api.save(todo);
      });
    }

    const header = new Header();
    const headerDOM = header.render();

    const filter = new Filter({
      onFilter: (filter) => {
        const newTodos = filterTodo(filter, api.getAll());
        todoList.update({ todos: newTodos });
      }
    });
    const filterDOM = filter.render();

    const todoList = new TodoList({
      todos: api.getAll(),
      onRemove: (todoToRemove) => {

        api.remove(todoToRemove.id);

        todoList.update({ todos: api.getAll() });
      },
      onUpdate: (todoToUpdate) => {

        api.update(todoToUpdate);

        todoList.update({ todos: api.getAll() });
        filter.update();
      }
    });
    const todoListDOM = todoList.render();

    const addTodo = new AddTodo({
      onAdd: (newTodo) => {
        api.save(newTodo);
        todoList.update({ todos: api.getAll() });
        filter.update();
      }
    });
    const addTodoDOM = addTodo.render();

    const main = dom.querySelector('main');

    dom.insertBefore(headerDOM, main);
    main.appendChild(filterDOM);
    main.appendChild(addTodoDOM);
    main.appendChild(todoListDOM);

    return dom;
  }

  renderTemplate() {
    return /*html*/`
    <div>
      <main></main>
    </div>
    `;
  }

}

export default App;