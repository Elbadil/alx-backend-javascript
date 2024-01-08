export default function hasValuesFromArray(set, arr) {
  const trueOrFalse = [];
  for (const num of arr) {
    trueOrFalse.push(set.has(num));
  }
  for (const answer of trueOrFalse) {
    if (answer === false) {
      return false;
    }
  }
  return true;
}
