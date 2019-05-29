import Component from './Component.js';

class AddTodo extends Component {

  render() {
    const dom = this.renderDOM();

    const form = dom.querySelector('form');

    const onFilter = this.props.onFilter;

    const filter = {
      search: '',
      status: ''
    };

    form.addEventListener('input', () => {
      const formData = new FormData(form);

      filter.search = formData.get('search');
      filter.status = formData.get('status');

      onFilter(filter);
    });

    return dom;
  }

  renderTemplate() {
    return /*html*/`
    <section>
      <form>
        <label>Search
          <input type="text" name="search"/>
        </label>
        <fieldset>
        <legend>Filter Tasks</legend>

          <label>All
            <input required checked name="status" value="all" type="radio" id="all">
          </label>

          <label>Completed
            <input required name="status" value="completed" type="radio" id="completed">
          </label>

          <label>Not Done
            <input required name="status" value="not-done" type="radio" id="not-done">
          </label>

        </fieldset>
      </form>
    </section>
    `;
  }

}

export default AddTodo;