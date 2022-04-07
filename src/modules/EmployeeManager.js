const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
  //be sure your amployees have good data and related to a lmployee and customer
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
  .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees?_expand=location`)
  .then(res => res.json())
}

export const deleteEmployee = id => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const updateEmployee  = (editedEmployee) => {
	return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedEmployee)
	}).then(data => data.json());
}