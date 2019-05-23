function filterTodo(filter, todos) {

  filter = {
    search: filter.search.toLowerCase(),
    status: filter.status.toLowerCase()
  };

  return todos.filter(todo => {
    const search = todo.task.toLowerCase().includes(filter.search);

    let status = true;

    if(filter.status === 'completed') {
      status = todo.completed === true;
    } else if(filter.status === 'not-done') {
      status = todo.completed === false;
    }

    return search && status;
  });
}

export default filterTodo;