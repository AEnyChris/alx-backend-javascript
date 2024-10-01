export default function createReportObject(employeesList) {
  const newObject = {
    allEmployees: { ...employeesList },

    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return newObject;
}
