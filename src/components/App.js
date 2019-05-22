import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';

import todos from '../../data/todos.js';

class App extends Component {

  render() {
    const dom = this.renderDOM();

    const header = new Header();
    const headerDOM = header.render();

    const todoList = new TodoList({ todos });
    const todoListDOM = todoList.render();

    const addTodo = new AddTodo();
    const addTodoDOM = addTodo.render();

    const main = dom.querySelector('main');

    dom.insertBefore(headerDOM, main);
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