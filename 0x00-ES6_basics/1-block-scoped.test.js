// 1-block-scoped.test.js
import taskBlock from './1-block-scoped';

test('taskBlock(true) should return [true, false]', () => {
  expect(taskBlock(true)).toEqual([true, false]);
});

test('taskBlock(false) should return [false, true]', () => {
  expect(taskBlock(false)).toEqual([false, true]);
});
