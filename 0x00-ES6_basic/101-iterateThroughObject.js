export default function iterateThroughObject(reportWithIterator) {
  let stringOut = "";
  for (const name of reportWithIterator) {
    if ((reportWithIterator.length - reportWithIterator.indexOf(name)) === 1) {
	stringOut = stringOut.concat(name);
    } else {
      stringOut = stringOut.concat(name, ' | ');
    }
  }

  return stringOut;
}
