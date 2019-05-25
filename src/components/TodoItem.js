import Component from './Component.js';

class TodoItem extends Component {

  render() {
    const todoItem = this.renderDOM();

    const onRemove = this.props.onRemove;
    const todo = this.props.todo;

    const removeButton = todoItem.querySelector('button');

    removeButton.addEventListener('click', () => {
      onRemove(todo);
    });

    return todoItem;
  }

  renderTemplate() {
    const todo = this.props.todo;

    let checked = '';

    if(todo.completed) {
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