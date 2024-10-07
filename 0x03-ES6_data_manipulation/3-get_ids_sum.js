/**
 * A function to return sum of ids
 */

export default function getStudentsByLocation(getListStudents) {
  if (Array.isArray(getListStudents)) {
    const idSum = getListStudents.reduce((acc, obj) => acc + obj.id, 0);
    return idSum;
  }
  return [];
}
