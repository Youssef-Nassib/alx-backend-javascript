export default function taskBlock(trueOrFalse) {
  const task = false; // Using 'const' since we don't want it to be re-assigned outside the block
  const task2 = true; //the same here

  if (trueOrFalse) {
    const task = true; //using const so this will be just in if block
    const task2 = false; //the same for this
  }

  return [task, task2];
}
