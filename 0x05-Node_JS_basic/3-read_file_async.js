const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

async function countStudents(path) {
  try {
    const filePath = resolve(path);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    const fileLines = contents.trim().split('\n');
    const fieldsCount = {};

    for (const i of fileLines.slice(1)) {
      if (!Object.keys(fieldsCount).includes(i.split(',').at(-1))) {
        fieldsCount[i.split(',').at(-1)] = {};
        fieldsCount[i.split(',').at(-1)].count = 1;
        fieldsCount[i.split(',').at(-1)].firstNames = new Array(i.split(',').at(0));
      } else {
        fieldsCount[i.split(',').at(-1)].count += 1;
        fieldsCount[i.split(',').at(-1)].firstNames.push(i.split(',').at(0));
      }
    }

    console.log(`Number of students: ${fileLines.length - 1}`);
    Object.entries(fieldsCount).forEach((ele) => console.log(`Number of students in ${ele[0]}: ${ele[1].count}. List: ${ele[1].firstNames.toString().replace(/,/g, ', ')}`));
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
