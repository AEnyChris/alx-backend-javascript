/**
 * update Map
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot Process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
