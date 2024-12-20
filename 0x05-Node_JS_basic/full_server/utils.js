import { readFile } from 'fs';

const readDatabase = (path) => new Promise((res, rej) => {
  readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      rej(err);
    }

    if (data) {
      const fileLines = data.trim().split('\n');
      const fieldsCount = {};

      // Process each line extracting the right data
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

      // Sort fields object keys alphabetically
      const soretdFieldsCount = Object.keys(fieldsCount).sort().reduce((acc, key) => {
        acc[key] = fieldsCount[key];
        return acc;
      }, {});

      res(soretdFieldsCount);
    }
  });
});

export default readDatabase;
// readDatabase('databae.csv').then((data) => console.log(data));
