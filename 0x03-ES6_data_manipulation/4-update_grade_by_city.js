/**
 * A function to return array of students grade by location
 */

export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (Array.isArray(getListStudents)) {
    const resArray = getListStudents
      .filter((obj) => obj.location === city)
      .map((o) => {
        for (const i of newGrades) {
          if (o.id === i.studentId) {
            o.grade = i.grade;
          } else {
            o.grade = 'N/A';
          }
        }
        return o;
      });
    return resArray;
  }
  return [];
}
