export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray[array.indexOf(value)] = appendString + value;
  }

  return newArray;
}
