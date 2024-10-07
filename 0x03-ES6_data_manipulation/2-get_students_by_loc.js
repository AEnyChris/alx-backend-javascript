/**
 * A function to return objects of specified location
 */

export default function getStudentsByLocation(getListStudents, city) {
  if (Array.isArray(getListStudents)) {
    const resArray = getListStudents
      .filter((obj) => obj.location === city);
    return resArray;
  }
  return [];
}
