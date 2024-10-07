/**
 * A function to return array of students grade by location
 */

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (Array.isArray(getListStudents)) {
    const resArray = getListStudents
      .filter((obj) => obj.location === city)
      .map((o) => {
        for (const i of newGrades) {
          if (i.studentId === o.id) {
            return { ...o, grade: i.grade };
          }
        }
        return { ...o, grade: 'N/A' };
      });
    return resArray;
  }
  return [];
}
