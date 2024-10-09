export const weakMap = new WeakMap();

export default function queryAPI(obj) {
  if (!weakMap.has(obj)) {
    weakMap.set(obj, 0);
  }

  const count = weakMap.get(obj) + 1;
  weakMap.set(obj, count);
  if (count >= 5) {
    throw Error('Endpoint load is high');
  }
}
