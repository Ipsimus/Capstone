import { useState } from "react";
import RegistrationFormStep1 from "./RegistrationFormStep1";
import RegistrationFormStep2 from "./RegistrationFormStep2";
import RegistrationFormStep3 from "./RegistrationFormStep3";

import {useForm, FormProvider } from "react-hook-form";


function RegistrationForm() {

    const [page, setPage] = useState(1);
    const methods = useForm();
    const { register, handleSubmit, setError, formState: { errors } } = methods;

    const onSubmit = (data, event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8080/students', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        console.log('data', data)
        
    }

    // WORKING HERE TO FIX THE ISSUE OF GETTING THE UPDATED TERM AND YEAR!!!
    fetch('http://127.0.0.1:8080/term', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then((data) => {
        
        const termObj = data.pop()
        console.log(termObj)
        const [year, term] = [termObj.year, termObj.term];
        

        return (
            <div>
            <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <center>
                <h1>{term} Term {year} - Student Membership - {page} / 3</h1>
                    {
                        page === 1 ? <RegistrationFormStep1 /> : 
                        page === 2 ? <RegistrationFormStep2 /> : 
                        <RegistrationFormStep3 />
                    }
                    <br />
                    {
                        page === 3 ?
                        <button type="Submit">Submit Registration</button> :
                        null
                    }
                </center>
            </form>
            </FormProvider>
            <center>
            {
                page !== 1 ? 
                <button onClick={()=>{
                    // Prevent Page going out of range. 
                    let nextPage = (page - 1) % 4;
                    if(nextPage === 0){
                        nextPage = 1;
                    }
                    setPage(nextPage);
                }}>Back</button> : 
                null
            }
            {
                page !== 3 ?
                <button onClick={()=>{
                    // Prevent Page going out of range. 
                    let nextPage = (page + 1) % 4;
                    if(nextPage === 0){
                        nextPage = 3;
                    }
                    setPage(nextPage);
                }}>Next</button> :
                null
            }
            </center>
            </div>
        )
    });
}

export default RegistrationForm;