import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './Employee.js';
import { getAllEmployees, getEmployeeById, deleteEmployee } from '../../modules/EmployeeManager';


export const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    // use the setAmployees function to update state
    return getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  // got the amployees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  //This handles deleteing an employee
  const handleDeleteEmployee = id => {
    deleteEmployee(id)
    .then(() => getAllEmployees().then(setEmployees));
  };

  // Finally we use .map() to "loop over" the amployees array to show a list of amployee cards
  return(
    <div className="container-cards">
      {employees.map(employee =>
        <EmployeeCard key={employee.id} employee={employee} />
      )}
    </div>
  );
};