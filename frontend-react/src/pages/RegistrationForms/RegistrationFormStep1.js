import React, { useState, useContext } from "react";
import { useFormContext } from 'react-hook-form';
// import FormContext from "../../components/formContext/registrationFormContext";

function RegistrationFormStep1() {

    // const { register, handleSubmit, errors } = useForm();
    // const [userInfo, setUserInfo] = useState();

    // const onSubmitData = (data) => {

    //     setUserInfo(data);
    //     console.log(data);

    // }

    const methods = useFormContext();

    return (
        <div className="form-container">
            <pre>{JSON.stringify(methods.getValues(), undefined, 2)}</pre>
            <h1>Registration Form:</h1>
            <input
                {...methods.register('name', { required: true })}
                name="name"
                placeholder="Your Name"
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
                {...methods.register('id', { required: true })}
                name="id"
                placeholder="Current OSU ID Number"
                type="text"
            />
            <br />
            <input
                {...methods.register('phoneNumber', { required: true })}
                name="phoneNumber"
                placeholder="Phone Number"
                type="int"
            />
            <br />
            <input
                {...methods.register('streetAddress', { required: true })}
                name="streetAddress"
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
                {...methods.register('zipCode', { required: true })}
                name="zipCode"
                placeholder="Zip Code"
                type="text"
            />
            <br />
        </div>
    )
}


// function handleSubmit(event){ 
//     event.preventDefault();
//     alert("Thank you for submitting. OSU Crafter Center will process your registration.")
//     fetch('https://garzacao-capstone.uc.r.appspot.com/registrationForm', {
//         method: 'post',
//         headers: {'Content-Type':'application/json', "Access-Control-Allow-Origin": "*"},
//         body: JSON.stringify({
//             "name": this.name.value,
//             "pronouns": this.pronouns.value,
//             "OSUID": this.OSUID.value,
//             "phoneNumber": this.phoneNumber.value,
//             "streetAddress": this.streetAddress.value,
//             "city": this.city.value,
//             "state": this.state.value,
//             "zipCode": this.zipCode.value
//             })
//         }
//     );
// };

export default RegistrationFormStep1;