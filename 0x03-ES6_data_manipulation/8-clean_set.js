export default function cleanset(set, startString) {
  if (!startString || !set || !(set instanceof Set) || !(typeof startString === 'string')) {
    return '';
  }
  return [...set]
    .filter((text) => text.startsWith(startString) && (typeof text === 'string'))
    .map((text) => text.slice(startString.length))
    .join('-');
}
