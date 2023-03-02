import React, { useState } from "react"
import isIdValid, {isNameValid, isEmailValid} from "../functions/validation/addStudentValidation";

function UpdateRegistrationYearForm() {

    const [userInfo, setUser] = useState({
        Year: "Year"
    });

    return (
        <div>
            <div id="update year">
                <h1>Update Registrtaion Year:</h1>
                <p>Enter the year to update the student registration form.</p>
                <form>
                    <input 
                        name="year"
                        placeholder="Year" 
                        type="text" 
                        value={userInfo.year}
                    />
                    <br/>
                    <button type="Submit">Update Registration Year</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateRegistrationYearForm;