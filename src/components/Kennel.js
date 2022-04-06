import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"

import { EmployeeCard } from "./employee/Employee"
import { CustomerCard } from "./customer/Customer"
import { PropsAndState } from "./PropsAndState"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Checkbox } from "./checkbox"

export const Kennel = () => (
    <>
         <NavBar />
        <ApplicationViews />
        <Checkbox/>
    </>
)