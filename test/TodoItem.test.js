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
        <input class="checkbox" type="checkbox" checked/>
        <span class="task">Learn templates</span>
      </label>
      <input class="edit-input hidden" type="text" value="Learn templates">
      <span class="edit">✎</span>
      <button class="save hidden">Save</button>
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
        <input class="checkbox" type="checkbox" />
        <span class="task">Learn forEach</span>
      </label>
      <input class="edit-input hidden" type="text" value="Learn forEach">
      <span class="edit">✎</span>
      <button class="save hidden">Save</button>
      <button class="remove">x</button>
    </li>
  `;
  //Act 
  const todoItem = new TodoItem({ todo });
  const html = todoItem.renderTemplate();
  //Assert
  assert.htmlEqual(html, expected);
});