export default function cleanSet(set, startString) {
  const setString = [];

  if (startString.length === 0) {
    return '';
  }

  for (const element of set) {
    if (startString === element.substring(0, startString.length)) {
      setString.push(element.substring(startString.length));
    }
  }
  return setString.join('-');
}
