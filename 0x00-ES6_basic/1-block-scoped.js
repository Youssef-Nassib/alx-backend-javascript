export default function taskBlock(trueOrFalse) {
  const task = false; // Using 'const' since we don't want it to be re-assigned outside the block
  const task2 = true; //the same here

  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
