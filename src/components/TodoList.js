import Component from './Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {

  render() {
    const list = this.renderDOM();

    const todos = this.props.todos;
    const onRemove = this.props.onRemove;

    todos.forEach(todo => {
      const todoItem = new TodoItem({ todo, onRemove });
      const todoItemDOM = todoItem.render();
      list.appendChild(todoItemDOM);
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