import Component from './Component.js';
import TodoItem from './TodoItem.js';
import api from '../services/api.js';

class TodoList extends Component {

  render() {
    const list = this.renderDOM();

    const todos = this.props.todos;
    const onRemove = this.props.onRemove;
    const toggleDone = this.props.toggleDone;

    todos.forEach(todo => {
      const todoItem = new TodoItem({ todo, onRemove, toggleDone });
      const todoItemDOM = todoItem.render();

      list.appendChild(todoItemDOM);
      if(!api.get(todo.id)) {
        api.save(todo);
      }
    });

    return list;
  }

  renderTemplate() {
    return /*html*/`
    <ul id="todos"></ul>
    `;
  }

}

export default TodoList;