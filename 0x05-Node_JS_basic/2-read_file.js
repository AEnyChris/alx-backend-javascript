const fs = require('fs');

const countStudents = (path) => {
  // Throw error if file does not exist of path is not a file
  try {
    if ((!fs.existsSync(path)) || !(fs.statSync(path).isFile())) {
      throw new Error('Cannot load the database');
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Read file and process each line to save count of each field
  // and corresponding first name of associated student into an object
  const fileLines = fs.readFileSync(path).toString('utf-8').split('\n');
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
    // console.log(i.split(',').at(-1))
  }
  console.log(`Number of students: ${fileLines.length - 1}`);
  Object.values(fieldsCount).forEach((field) => console.log(`Number of students in ${Object.keys(field)[0]}: ${field[Object.keys(field)[0]]}. List: ${field.firstNames.toString().replace(/,/g, ', ')}`));
  // console.log(Object.keys(fieldsCount));
  // console.log(fileLines);
};

module.exports = countStudents;
