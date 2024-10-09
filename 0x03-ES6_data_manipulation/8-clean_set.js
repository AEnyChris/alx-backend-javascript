export default function cleanset(set, startString) {
  if (!startString || !set || !(set instanceof Set) || !(typeof startString === 'string')) {
    return '';
  }
  return [...set]
    .filter((text) => (typeof text === 'string') && text.startsWith(startString))
    .map((text) => text.slice(startString.length))
    .join('-');
}
