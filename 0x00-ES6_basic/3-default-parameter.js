export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  const expansion1989Value = typeof expansion1989 !== 'undefined' ? expansion1989 : 89;
  const expansion2019Value = typeof expansion2019 !== 'undefined' ? expansion2019 : 19;
  return initialNumber + expansion1989Value + expansion2019Value;
}
