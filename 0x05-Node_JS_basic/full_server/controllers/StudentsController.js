import readDatabase from '../utils';
const database = process.argv[2]


export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(database).then((obj) => {
        res.write('This is the list of our students\n');
        Object.entries(obj).forEach((ele) => {
          res.write(`Number of students in ${ele[0]}: ${ele[1].count}. List: ${ele[1].firstNames.toString().replace(/,/g, ', ')}\n`);
        });
        res.end();
      }).catch(() => res.status(500).send('Cannot load the database'));
  };

  static getAllStudentsByMajor(req, res) {
    if(req.params.major === 'CS' || req.params.major === 'SWE') {
      readDatabase(database).then((obj) =>{
        res.write(`List: ${obj[req.params.major].firstNames.toString().replace(/,/g, ', ')}`);
        res.end();
      }).catch((err) => res.status(500).send(`Cannot load the databse: ${err.message}`));
    } else {res.status(500).send('Major parameter must be CS or SWE');}
    
  }
};
