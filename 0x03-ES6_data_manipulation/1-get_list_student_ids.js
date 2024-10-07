/**
 * A function to return ids
 */

export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    const resArray = getListStudents.map((obj) => obj.id);
    return resArray;
  }
  return [];
}
