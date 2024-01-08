export default function cleanSet(set, startString) {
  const setString = [];

  if (
    startString.length === 0
    || typeof startString !== 'string'
    || typeof set !== 'object') {
    return '';
  }

  for (const element of set) {
    if (element.startsWith(startString)) {
      setString.push(element.slice(startString.length));
    }
  }
  return setString.join('-');
}
