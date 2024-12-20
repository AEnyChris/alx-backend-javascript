const fs = require('fs');

const countStudents = (path) => new Promise((res, rej) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      rej(new Error('Cannot load the database'));
    }

    if (data) {
      const fileLines = data.trim().split('\n');
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
      res(1);
    }
  });
});

module.exports = countStudents;
