import TodoItem from '../src/components/TodoItem.js';
const test = QUnit.test;

QUnit.module('TodoItem');

test('Checked TodoItem', assert => {
  //Arrange
  const todo = {
    task: 'Learn templates',
    completed: true
  };

  const expected = /*html*/`
  <li>
    <label>
      <input type="checkbox" checked/>
      Learn templates
    </label>
    <button class="remove">x</button>
  </li>
  `;
  //Act 
  const todoItem = new TodoItem({ todo });
  const html = todoItem.renderTemplate();
  //Assert
  assert.htmlEqual(html, expected);
});

test('Unchecked TodoItem', assert => {
  //Arrange
  const todo = {
    task: 'Learn forEach',
    completed: false
  };

  const expected = /*html*/`
  <li>
    <label>
      <input type="checkbox" />
      Learn forEach
    </label>
    <button class="remove">x</button>
  </li>
  `;
  //Act 
  const todoItem = new TodoItem({ todo });
  const html = todoItem.renderTemplate();
  //Assert
  assert.htmlEqual(html, expected);
});