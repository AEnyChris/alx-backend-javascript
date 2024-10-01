export default function createIteratorObject(report) {
  const arrays = Object.values(report.allEmployees);
  let newArray = [];
  for (const arr of arrays) {
    newArray = newArray.concat(arr);
  }

  return newArray;
}
