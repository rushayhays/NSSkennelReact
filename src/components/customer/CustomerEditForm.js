import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager"



export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {customerId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...customer };
    stateToChange[evt.target.id] = evt.target.value;
    setCustomer(stateToChange);
  };

  const updateExistingCustomer = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // default values for eustomerId and customerId
    // if you already have these components/modules in place, you will need to include the correct information
    const editedCustomer = {
      id: customerId,
      name: customer.name,
      address: customer.address,
      email: customer.email
    };

  //pass the editedEustomer object to the database
  updateCustomer(editedCustomer)
    .then(() => navigate("/customers")
    )
  }

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        setCustomer(customer);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={customer.address}
            />
            <label htmlFor="location">Address</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={customer.email}
            />
            <label htmlFor="location">Email</label>
          </div>
          {/* Be sure to include customer and customer */}
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}