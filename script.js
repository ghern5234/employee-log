// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const collectEmployees = function () {
  const employees = [];

  const employee = createEmployee();
  employees.push(employee);

  while (confirm("Would you like to add another employee?")) {
    employees.push(createEmployee);
  }

  return employes;
};

function createEmployee() {
  const employee = {
    firstName: "",
    lastName: "",
    salary: 0,
  };

  employee.firstName = prompt("Employee's first name");
  employee.lastName = prompt("Employee's last name");
  employee.salary = prompt("Employee's salary");

  if (isNaN(employee.salary)) {
    employee.salary = 0;
  } else {
    employee.salary = parseInt(employee.salary);
  }

  return employee;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function (event) {
  event.preventDefault();
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);

// // Collect employee data
// const collectEmployees = function () {
//   // TODO: Get user input to create and return an array of employee objects

//   //array
//   const employees = [];
//   let keepAdding = true;

//   while (keepAdding) {
//     //something for user input
//     let firstName = window.prompt("Please provide first name");
//     let lastName = window.prompt("Please provide your last name ");
//     let salary = window.prompt("Please provide your salary");

//     //objects for employees
//     const employeeObject = {
//       firstName: firstName,
//       lastName: lastName,
//       salary: salary,
//     };

//     employees.push(employeeObject);

//     keepAdding = window.confirm("Would you like to add another employee?");
//   }
// };
