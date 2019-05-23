import Component from './Component.js';

class AddTodo extends Component {

  renderTemplate() {
    return /*html*/`
      <form>
        <label>Search
          <input type="text" name="search"/>
        </label>
        <fieldset>
        <legend>Filter Tasks</legend>

          <label>All
            <input required name="state" value="all" type="radio" id="all">
          </label>

          <label>Completed
            <input required name="state" value="completed" type="radio" id="completed">
          </label>

          <label>Not Done
            <input required name="state" value="not-done" type="radio" id="not-done">
          </label>

        </fieldset>
      </form>
    `;
  }

}

export default AddTodo;