export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
    // This block-scoped `task` and `task2` only exist here
  }

  return [task, task2];
}
