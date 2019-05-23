import Component from './Component.js';

class TodoItem extends Component {

  render() {
    const todoItem = this.renderDOM();

    const onRemove = this.props.onRemove;
    const toggleDone = this.props.toggleDone;
    const onUpdate = this.props.onUpdate;
    const todo = this.props.todo;

    const removeButton = todoItem.querySelector('.remove');
    const checkbox = todoItem.querySelector('.checkbox');
    const edit = todoItem.querySelector('.edit');
    const editInput = todoItem.querySelector('.edit-input');
    const task = todoItem.querySelector('.task');
    const save = todoItem.querySelector('.save');

    removeButton.addEventListener('click', () => {
      onRemove(todo);
    });

    checkbox.addEventListener('input', () => {
      todo.completed = !todo.completed;
      onUpdate(todo);
    });

    edit.addEventListener('click', () => {
      editInput.classList.remove('hidden');
      save.classList.remove('hidden');
      task.classList.add('hidden');
      edit.classList.add('hidden');
    });

    save.addEventListener('click', () => {
      editInput.classList.add('hidden');
      save.classList.add('hidden');
      task.classList.remove('hidden');
      edit.classList.remove('hidden');

      todo.task = editInput.value;

      onUpdate(todo);
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
        <input class="checkbox" type="checkbox" ${checked}/>
        <span class="task">${todo.task}</span>
      </label>
      <input class="edit-input hidden" type="text" value="${todo.task}">
      <span class="edit">✎</span>
      <button class="save hidden">Save</button>
      <button class="remove">x</button>
    </li>
    `;
  }

}

export default TodoItem;