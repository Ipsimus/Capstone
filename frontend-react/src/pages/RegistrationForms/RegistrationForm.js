import { useState } from "react";
import useFetch from "react-fetch-hook";
import { API_URL } from "../../App";
import RegistrationFormStep1 from "./RegistrationFormStep1";
import RegistrationFormStep2 from "./RegistrationFormStep2";
import RegistrationFormStep3 from "./RegistrationFormStep3";

import {useForm, FormProvider } from "react-hook-form";

function RegistrationForm(){

    const [page, setPage] = useState(1);

    const methods = useForm();
    const { register, handleSubmit, setError, formState: { errors } } = methods;
    
    const { isLoading, error,  data } = useFetch(API_URL + '/term');
    // console.log(isLoading, data);

    const onSubmit = (upload, event) => {
        event.preventDefault();
        fetch(API_URL + '/students', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(upload)
        })
        .then((res)=>{
            if(res.status !== 201){
                console.log(res?.Error);
                return alert("I'm sorry we encountered an issue!");
            }
            alert("Your information was sent successfully!");
            console.log('upload', upload)
        })
    }

    if(isLoading) return <div><p>"Loading Please Wait!</p></div>
    if(error){
        console.log(error);
        return <div><p>"I'm sorry an erorr occurred!"</p></div>
    }
    return (
        <div>
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <center>
            <h1> {data?.[0].term} Term {data?.[0].year} - Student Membership - {page} / 3</h1>
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
}

export default RegistrationForm;