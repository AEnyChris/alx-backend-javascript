export default function cleanset(set, startString) {
  let resArr = '';
  if (startString) {
    resArr = [...set]
      .filter((text) => text.startsWith(startString))
      .map((text) => text.slice(startString.length))
      .join('-');
  }
  return resArr;
}
