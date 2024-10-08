/**
 * creates a new Map with given values
 */

export default function groceriesList() {
  const grocMap = new Map();
  grocMap.set('Apples', 10);
  grocMap.set('Tomatoes', 10);
  grocMap.set('Pasta', 1);
  grocMap.set('Rice', 1);
  grocMap.set('Banana', 5);

  return grocMap;
}
