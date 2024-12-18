const { createServer } = require('http');
const fs = require('fs');
// const countStudents = require('./3-read_file_async.js');

const hostname = '127.0.0.1';
const port = 1245;
const database = process.argv[2];

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

      res([fieldsCount, fileLines.length - 1]);
    }
  });
});

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello Holberton School!');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    countStudents(database).then((obj) => {
      res.write(`Number of students: ${obj[1]}\n`);
      Object.entries(obj[0]).forEach((ele) => {
        res.write(`Number of students in ${ele[0]}: ${ele[1].count}. List: ${ele[1].firstNames.toString().replace(/,/g, ', ')}\n`);
      });
      res.end();
    }).catch((error) => res.end(error));
    res.write('This is the list of our students\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
