const remoteURL = "http://localhost:8088"

//This will need work if it is to be used at all
export const getLocationById = (locationId) => {
  //be sure your locations have good data
  return fetch(`${remoteURL}/locations/${locationId}`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

export const deleteLocation = id => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const updateLocation  = (editedLocation) => {
	return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedLocation)
	}).then(data => data.json());
}