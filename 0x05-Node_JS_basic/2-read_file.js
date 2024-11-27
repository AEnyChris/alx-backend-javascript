const fs = require('fs')

let countStudents = function (path) {
  try {
    if ((!fs.existsSync(path)) | !(fs.statSync(path).isFile())) {
      throw new Error('Cannot load the database');
    }
  } catch (error){
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(path).toString('utf-8').split('\n')
  console.log(`Number of students: ${fileLines.length - 1}`)
  console.log(fileLines)
};


countStudents('./database.csv');