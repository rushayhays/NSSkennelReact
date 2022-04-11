import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './animal/AnimalCard.js'
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"
import { LocationCard } from "./location/LocationCard"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerDetail } from "./customer/CustomerDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { LocationEditForm } from "./location/LocationEditForm"
import { EmployeeEditForm } from "./employee/EmployeeEditForm"
import { CustomerEditForm } from "./customer/CustomerEditForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute>} />
                <Route exact path="/animals/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />
                <Route path="/animals/:animalId/edit" element={<PrivateRoute><AnimalEditForm /></PrivateRoute>} />

                {/* Render the customer list when http://localhost:3000/customers */}
                <Route path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
                <Route path="/customers/:customerId" element={<CustomerDetail />} />
                <Route path="/customers/:customerId/edit" element={<PrivateRoute><CustomerEditForm /></PrivateRoute>} />

                {/* Render the employee list when http://localhost:3000/employees */}
                <Route exact path="/employees" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                <Route exact path="/employees/:employeeId" element={<EmployeeDetail />} />
                <Route path="/employees/:employeeId/edit" element={<PrivateRoute><EmployeeEditForm /></PrivateRoute>} />

                {/* Render the location list when http://localhost:3000/locations */}
                <Route path="/locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
                <Route exact path="/locations/:locationId" element={<LocationDetail />} />
                <Route path="/locations/:locationId/edit" element={<PrivateRoute><LocationEditForm /></PrivateRoute>} />


            </Routes>
        </>
    )
}