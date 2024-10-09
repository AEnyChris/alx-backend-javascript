/**
* Contains all codes for the project
*/

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
firstName: 'Christian',
lastName: 'Achobe',
age: 35,
location: 'Nigeria'
}

const student2: Student = {
firstName: 'Gift',
lastName: 'Inalegwu',
age: 26,
location: 'Nigeria'
}

const studentsList = [ student1, student2 ];

const table = document.createElement('table');

const headerRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.append(firstNameHeader, locationHeader);

table.appendChild(headerRow);

studentsList.forEach((item) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = item.firstName;

  const locationCell  = document.createElement('td');
  locationCell.textContent = item.location;

  row.append(firstNameCell, locationCell);

  table.appendChild(row);
  });
 
document.body.appendChild(table);
