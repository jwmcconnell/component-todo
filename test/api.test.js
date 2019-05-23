import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');

const key = 'test-todos';
api.key = key;

let date = Date.now();
const todo0 = {
  id: 'Learn APIs' + date,
  task: 'learn APIs',
  completed: false
};
const todo1 = {
  id: 'Learn forEach' + date,
  task: 'learn forEach',
  completed: true
};
const todo2 = {
  id: 'Learn for...of' + date,
  task: 'learn for...of',
  completed: false
};

test('round trip todo data', assert => {
  localStorage.removeItem(key);
  //arrange
  let date = Date.now();
  const expected = {
    id: 'Learn APIs' + date,
    task: 'learn APIs',
    completed: false
  };
  //act
  api.save(expected);
  const result = api.get(expected.id);
  //assert
  assert.deepEqual(result, expected);
});

test('Save multiple get a specific one', assert => {
  localStorage.removeItem(key);
  //arrange

  //act
  api.save(todo0);
  api.save(todo1);
  api.save(todo2);
  const result = api.get(todo2.id);
  //assert
  assert.deepEqual(result, todo2);
});

test('Test isEmpty returns true', assert => {
  localStorage.removeItem(key);
  //arrange
  const expected = true;
  //act
  const result = api.isEmpty();
  //assert
  assert.deepEqual(result, expected);
});

test('Test isEmpty returns false', assert => {
  localStorage.removeItem(key);
  //arrange

  let date = Date.now();
  const todo = {
    id: 'Learn APIs' + date,
    task: 'learn APIs',
    completed: false
  };
  const expected = false;
  //act
  api.save(todo);
  const result = api.isEmpty();
  //assert
  assert.deepEqual(result, expected);
});

test('Save multiple remove a specific one', assert => {
  localStorage.removeItem(key);
  //arrange

  //act
  api.save(todo0);
  api.save(todo1);
  api.save(todo2);
  api.remove(todo1.id);
  const result = api.getAll();
  //assert
  assert.deepEqual(result, [todo2, todo0]);
});

test('Save multiple remove an item that doesn`t exist', assert => {
  localStorage.removeItem(key);
  //arrange

  //act
  api.save(todo0);
  api.save(todo1);
  api.save(todo2);
  api.remove('Learn something');
  const result = api.getAll();
  //assert
  assert.deepEqual(result, [todo2, todo1, todo0]);
});

test('Save multiple update a todo to completed', assert => {
  localStorage.removeItem(key);
  //arrange
  const newTodo = {
    id: todo0.id,
    task: todo0.task,
    completed: true
  };
  //act
  api.save(todo0);
  api.save(todo1);
  api.save(todo2);
  api.update(newTodo);
  const result = api.getAll();
  //assert
  assert.deepEqual(result, [todo2, todo1, newTodo]);
});

test('Save multiple update a todo that doesn`t exist', assert => {
  localStorage.removeItem(key);
  //arrange
  const newTodo = {
    id: 'non existant',
    task: todo0.task,
    completed: true
  };
  //act
  api.save(todo0);
  api.save(todo1);
  api.save(todo2);
  api.update(newTodo);
  const result = api.getAll();
  //assert
  assert.deepEqual(result, [todo2, todo1, todo0]);
});