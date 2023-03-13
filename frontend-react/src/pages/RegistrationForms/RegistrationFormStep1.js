import React, { useState, useContext } from "react";
import { useFormContext } from 'react-hook-form';
// import FormContext from "../../components/formContext/registrationFormContext";

function RegistrationFormStep1() {

    const methods = useFormContext();

    return (
        <div className="form-container">
            <h2>Member General Info</h2>
            <input
                {...methods.register('fName', { required: true })}
                name="fName"
                placeholder="Your First Name"
                type="text"
            />
            <br />
            <input
                {...methods.register('lName', { required: true })}
                name="lName"
                placeholder="Your Last Name"
                type="text"
            />
            <br />
            <input
                {...methods.register('pronouns', { required: true })}
                name="pronouns"
                placeholder="Your Pronouns"
                type="text"
            />
            <br />
            <input
                {...methods.register('OSUID', { required: true })}
                name="OSUID"
                placeholder="OSU ID Number"
                type="text"
            />
            <br />
            <input
                {...methods.register('phone', { required: true })}
                name="phone"
                placeholder="Phone Number"
                type="text"
            />
            <br />
            <input
                {...methods.register('email', { required: true })}
                name="email"
                placeholder="Email"
                type="email"
            />
            <br />
            <input
                {...methods.register('address', { required: true })}
                name="address"
                placeholder="Street Address"
                type="text"
            />
            <br />
            <input
                {...methods.register('city', { required: true })}
                name="city"
                placeholder="City"
                type="text"
            />
            <br />
            <input
                {...methods.register('state', { required: true })}
                name="state"
                placeholder="State"
                type="text"
            />
            <br />
            <input
                {...methods.register('zip', { required: true })}
                name="zip"
                placeholder="Zip Code"
                type="text"
            />
            <br />
        </div>
    )
}

export default RegistrationFormStep1;