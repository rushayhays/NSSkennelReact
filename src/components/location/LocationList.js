import React, { useState, useEffect } from 'react';
//import the components we will need
import { LocationCard } from "./LocationCard"
import { getAllLocations, getLocationById, deleteLocation } from '../../modules/LocationManager';

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    // use the setLocation function to update state
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  // got the location from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  //This will handle deleting a location
  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
  };

  // Finally we use .map() to "loop over" the aocation array to show a list of aocation cards
  return(
    <div className="container-cards">
      {locations.map(location =>
        <LocationCard key={location.id} location={location} />
      )}
    </div>
  );
};