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
  const fileLines = fs.readFileSync(path).toString('utf-8').trim().split('\n');
  const fieldsCount = {};

  for (const i of fileLines.slice(1)) {
    if (!Object.keys(fieldsCount).includes(i.split(',').slice(-1).toString())) {
      fieldsCount[i.split(',').slice(-1).toString()] = {};
      fieldsCount[i.split(',').slice(-1).toString()].count = 1;
      fieldsCount[i.split(',').slice(-1).toString()].firstNames = new Array(i.split(',').slice(0, 1).toString());
    } else {
      fieldsCount[i.split(',').slice(-1).toString()].count += 1;
      fieldsCount[i.split(',').slice(-1).toString()].firstNames.push(i.split(',').slice(0, 1).toString());
    }
  }

  console.log(`Number of students: ${fileLines.length - 1}`);
  Object.entries(fieldsCount).forEach((ele) => console.log(`Number of students in ${ele[0]}: ${ele[1].count}. List: ${ele[1].firstNames.toString().replace(/,/g, ', ')}`));
};

module.exports = countStudents;
