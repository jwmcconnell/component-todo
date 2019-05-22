import Component from './Component.js';

class AddTodo extends Component {

  renderTemplate() {
    return /*html*/`
      <form>
        <label>What do you need to do?
          <input name="todo" type="text"/>
        </label>
        <button id="add">Add</button>
      </form>
    `;
  }

}

export default AddTodo;