export default function taskBlock(trueOrFalse) {
  const task = 'I prefer const when I can.';
  const task2 = 'But sometimes let is needed.';

  if (trueOrFalse) {
    return [task, task2];
  }
  return [task2, task];
}
