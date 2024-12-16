const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function countStudents(path) {
  // try {
  //   await access(path)
  // } catch (err) {
  //   throw new Error('Cannot load the database')
  // }

  try {
    const filePath = resolve(path);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const fileLines = contents.split('\n');
    // console.log(contents);
    // console.log(fileLines)
    // console.log(typeof(contents));
    const fieldsCount = {};
    for (const i of fileLines.slice(1)) {
      if (!Object.keys(fieldsCount).includes(i.split(',').at(-1))) {
        fieldsCount[i.split(',').at(-1)] = {};
        fieldsCount[i.split(',').at(-1)][i.split(',').at(-1)] = 1;
        fieldsCount[i.split(',').at(-1)].firstNames = new Array(i.split(',').at(0));
      } else {
        fieldsCount[i.split(',').at(-1)][i.split(',').at(-1)] += 1;
        fieldsCount[i.split(',').at(-1)].firstNames.push(i.split(',').at(0));
      }
    }
    console.log(`Number of students: ${fileLines.length - 1}`);
    Object.values(fieldsCount).forEach((field) => console.log(`Number of students in ${Object.keys(field)[0]}: ${field[Object.keys(field)[0]]}. List: ${field.firstNames.toString().replace(/,/g, ', ')}`));
  } catch (err) {
    throw new Error('Cannot load the database');
    // console.error(err.message);
  }
}

module.exports = countStudents;
// countStudents('databas.csv')

// (async () => {try {
//   await countStudents('database.csv');
// } catch (err) {
//   console.error(err)
// }})();
