import Component from './Component.js';

class AddTodo extends Component {

  render() {
    const form = this.renderDOM();

    const onAdd = this.props.onAdd;

    form.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(form);

      const newTodo = {
        task: formData.get('todo')
      };

      onAdd(newTodo);

      form.reset();
      document.activeElement.blur();
    });


    return form;
  }

  renderTemplate() {
    return /*html*/`
      <form>
        <label>What do you need to do?
          <input name="todo" type="text" required/>
        </label>
        <button id="add">Add</button>
      </form>
    `;
  }

}

export default AddTodo;