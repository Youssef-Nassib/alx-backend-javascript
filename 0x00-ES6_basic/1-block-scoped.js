export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; //using const so this will be just in if block
    const task2 = false; //the same for this
  }

  return [task, task2];
}
