import Component from './Component.js';

class TodoItem extends Component {

  renderTemplate() {
    const todo = this.props.todo;

    return /*html*/`
    <li>
      <label>
        <input type="checkbox" ${todo.checked}/>
        ${todo.task}
      </label>
  </li>
    `;
  }

}

export default TodoItem;