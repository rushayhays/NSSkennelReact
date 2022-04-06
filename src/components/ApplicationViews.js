import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './animal/AnimalCard.js'
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"
import { LocationCard } from "./location/LocationCard"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalList />} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route path="/employees" element={<EmployeeList />} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={<LocationList />} />

            </Routes>
        </>
    )
}