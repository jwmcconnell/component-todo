import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');

const key = 'test-stats';
api.key = key;

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
  //act
  api.save(todo0);
  api.save(todo1);
  api.save(todo2);
  const result = api.get(todo2.id);
  //assert
  assert.deepEqual(result, todo2);
});