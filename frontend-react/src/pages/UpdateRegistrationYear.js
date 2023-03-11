import React, { useState } from "react"

function UpdateRegistrationYearForm() {

    const curYear = new Date().getFullYear();

    const [termInfo, setTerm] = useState({
        year: curYear,
        term: "Fall"
    });

    function handleChange(event){
        const {value, name} = event.target;

        setTerm((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8080/term', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(termInfo)
        })
        .then((response)=>{
            console.log(response);
            if(response.status !== 204){
                console.log(response.Error);
                return alert(response.Error);
            }
            alert("The Year and Term have been updated successfully!");
        })
    }

    return (
        <div>
            <div id="update_term">
                <h1>Update Registration Year:</h1>
                <pre>{JSON.stringify(termInfo, undefined, 2)}</pre>
                <p>Enter the year to update the student registration form.</p>
                <form onSubmit={handleSubmit}>
                    <label>Enter a Year: </label>
                    <input 
                        name="year"
                        onChange={handleChange}
                        placeholder="Year" 
                        type="number" 
                        value={termInfo.year}
                        min={ curYear - 1 }
                        max={ curYear + 1 }
                        required={true}
                    />
                    <br />
                    <br />
                    <label>Choose a Term: </label>
                    <select id="term" name="term" onChange={handleChange} value={termInfo.term} required={true}>
                        <option value="Fall">Fall</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                    </select>
                    <br />
                    <br />
                    <button type="Submit">Update Term & Year</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateRegistrationYearForm;