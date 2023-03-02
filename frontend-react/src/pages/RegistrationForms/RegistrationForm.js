import { useState } from "react";
import RegistrationFormStep1 from "./RegistrationFormStep1";
import RegistrationFormStep2 from "./RegistrationFormStep2";
import RegistrationFormStep3 from "./RegistrationFormStep3";

import {useForm, FormProvider } from "react-hook-form";


function RegistrationForm() {

    const [page, setPage] = useState(1);
    const methods = useForm();
    const { register, handleSubmit, errors } = methods;

    return (
        <div>
        <FormProvider {...methods}>
        <form>
            <center>
            <h3>Multi step register form Step {page} / 3</h3>
                {
                    page === 1 ? <RegistrationFormStep1 /> : 
                    page === 2 ? <RegistrationFormStep2 /> : 
                    <RegistrationFormStep3 />
                }
                <br />
                {
                    page === 3 ?
                    <button onSubmit={handleSubmit((data)=> console.log(JSON.stringify(data)))} type="Submit">Submit Registration</button> :
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