export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
    // These are block-scoped and will NOT overwrite the outer constants
  }

  return [task, task2];
}
