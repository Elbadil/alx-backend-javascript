export default function cleanSet(set, startString) {
  const setString = [];

  if (startString.length === 0) {
    return '';
  }

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      setString.push(element.substring(startString.length));
    }
  }
  return setString.join('-');
}
