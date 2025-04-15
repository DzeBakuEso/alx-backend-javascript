export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    // These are block-scoped and will NOT overwrite the outer constants
  }

  return [task, task2];
}
