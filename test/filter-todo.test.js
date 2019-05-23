import filterTodo from '../src/filter-todo.js';

const test = QUnit.test;

QUnit.module('Filter Todo');

const todos = [
  {
    task: 'Learn templates',
    completed: true
  },
  {
    task: 'Learn forEach',
    completed: false
  },
  {
    task: 'Learn map',
    completed: false
  }
];

test('Filter based on text search', assert => {
  //Arrange
  const filter = {
    search: 'TeM',
    status: 'all'
  };
  //Act 
  const result = filterTodo(filter, todos);
  //Assert
  assert.deepEqual(result, [todos[0]]);
});

test('Filter based on status filter completed', assert => {
  //Arrange
  const filter = {
    search: '',
    status: 'completed'
  };
  //Act 
  const result = filterTodo(filter, todos);
  //Assert
  assert.deepEqual(result, [todos[0]]);
});

test('Filter on both search and not-done', assert => {
  //Arrange
  const filter = {
    search: 'each',
    status: 'not-done'
  };
  //Act 
  const result = filterTodo(filter, todos);
  //Assert
  assert.deepEqual(result, [todos[1]]);
});

test('Filter on both search and not-done get an empty array', assert => {
  //Arrange
  const filter = {
    search: 'for...of',
    status: 'not-done'
  };
  //Act 
  const result = filterTodo(filter, todos);
  //Assert
  assert.deepEqual(result, []);
}); 