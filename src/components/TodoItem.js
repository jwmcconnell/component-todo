import Component from './Component.js';

class TodoItem extends Component {

  render() {
    const todoItem = this.renderDOM();

    const onRemove = this.props.onRemove;
    const toggleDone = this.props.toggleDone;
    const todo = this.props.todo;

    const removeButton = todoItem.querySelector('button');
    const checkbox = todoItem.querySelector('input');

    removeButton.addEventListener('click', () => {
      onRemove(todo);
    });

    checkbox.addEventListener('input', () => {
      toggleDone(todo);
    });

    return todoItem;
  }

  renderTemplate() {
    const todo = this.props.todo;

    let checked = '';

    if (todo.completed) {
      checked = 'checked';
    }

    return /*html*/`
    <li>
      <label>
        <input type="checkbox" ${checked}/>
        ${todo.task}
      </label>
      <button class="remove">x</button>
    </li>
    `;
  }

}

export default TodoItem;