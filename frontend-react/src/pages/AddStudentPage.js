import React, { useState } from "react"
import isIdValid, {isNameValid, isEmailValid} from "../functions/validation/addStudentValidation";

function AddStudentForm() {

    const [userInfo, setUser] = useState({
        id: "",
        name: "",
        email: ""
    });
    const [errorMessage, setErrorMessage] = useState({
        id: "",
        name: "",
        email: ""
    })
    
    function addErrorMessage(inputName, userObj){
        
        let errorMessage;

        switch (inputName){
            case 'id':
                errorMessage = "ID must be all numbers 0-9";
                break;
            case 'name':
                errorMessage = "Name must be all letters 'a-z' & A-Z' without any spaces at the beginning or end.";
                break;
            case 'email':
                errorMessage = "Unusually formatted email address used!";
                break;
            default:
                errorMessage = "unknown error";
                console.log(userObj);
        }
        
        setErrorMessage((prevMessage) => {
            return {
                ...prevMessage,
                [inputName]: errorMessage
            };
        });
    }

    function clearErrorMessage(inputName){
        setErrorMessage((prevMessage) => {
            return {
                ...prevMessage,
                [inputName]: ""
            };
        });
    }

    function addStudentValidation(userObj){
        let isError = false;

        if(!isIdValid(userObj)){
            addErrorMessage('id', userObj);
            isError = true;
        } else{
            clearErrorMessage('id');
        }
        if(!isNameValid(userObj)){
            addErrorMessage('name', userObj);
            isError = true;
        } else{
            clearErrorMessage('name');
        }
        if(!isEmailValid(userObj)){
            addErrorMessage('email', userObj);
            isError = true;
        } else{
            clearErrorMessage('email');
        }
        return isError
    }


    function handleSubmit(event) {
        event.preventDefault()
        if(addStudentValidation(userInfo)){
            return;
        }
        
        fetch('https://garzacao-capstone.uc.r.appspot.com/students', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "OSUID": userInfo.id,
                "name": userInfo.name,
                "email": userInfo.email
            })
        })
        .then((response)=>{
            console.log(response);
            // If there is not a success then its alerts with the Error message from the server. 
            if(response.status !== 201){
                console.log(response.Error);
                return alert(response.Error)
            }
            // Otherwise success was returned. 
            alert("Your student has just been added. Please click the students button to see your new student")
        })
        
    }

    function handleChange(event){
        const {value, name} = event.target;

        setUser((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div>
            <div id="add student">
                <h1>Add a Student:</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        name="id"
                        onChange={handleChange}
                        placeholder="ID" 
                        type="text" 
                        value={userInfo.id}
                    />
                    <p>{errorMessage.id}</p>
                    <br/>
                    <input 
                        name="name"
                        onChange={handleChange}
                        placeholder="Name" 
                        type="text"
                        value={userInfo.name} 
                    />
                    <p>{errorMessage.name}</p>
                    <br/>
                    <input 
                        name="email"
                        onChange={handleChange}
                        placeholder="Email" 
                        type="email" 
                        required={true}
                        value={userInfo.email}
                    />
                    <p>{errorMessage.email}</p>
                    <br />
                    <button type="Submit">Add Student</button>
                </form>
            </div>
        </div>
    )
}

export default AddStudentForm;
