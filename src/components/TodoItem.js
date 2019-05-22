import Component from './Component.js';

class TodoItem extends Component {

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
    </li>
    `;
  }

}

export default TodoItem;