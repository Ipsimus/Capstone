import React, { useState } from "react";
import validateClassInput from "../functions/validation/addClassValidation";

function AddClassForm() {

    const [classInfo, setClass] = useState({
        class_name: "",
        description: "",
        price: 0,
        member_price: 0,
        teacher: "",
        date: "",
        time: "",
        capacity: 0
    });
    const [errorMessage, setErrorMessage] = useState({
        class_name: "",
        description: "",
        price: "",
        member_price: "",
        teacher: "",
        date: "",
        time: "",
        capacity: ""
    })

    function handleSubmit(event){ 
        event.preventDefault();
        alert("Your class is being added. Please click the classes button to see your new class")
        fetch('https://garzacao-capstone.uc.r.appspot.com/classes', {
            method: 'post',
            headers: {'Content-Type':'application/json', "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify({
                "name": classInfo.class_name.trim(),
                "description": classInfo.description.trim(),
                "price": classInfo.price,
                "member_price": classInfo.member_price,
                "teacher": classInfo.teacher.trim(),
                "date": classInfo.date,
                "time": classInfo.time,
                "capacity": classInfo.capacity
                })
            }
        );
    };

    function handleChange(event){
        const {name, value} = event.target;

        const [isValid, errorMessage] = validateClassInput(name, value)

        setClass((prevClassValue) => {
            return {
                ...prevClassValue,
                [name]: value
            };
        });

        setErrorMessage((prevErrorValue) => {
            return {
                ...prevErrorValue,
                [name]: errorMessage
            };
        });
    }

    return (
        <div id="add class">
        <h1>Add a Class:</h1>
        <form onSubmit={handleSubmit}>
            <input 
                name="class_name"
                onChange={handleChange}
                placeholder="Class Name" 
                type="text" 
                value={classInfo.class_name}
            />
            <br />
            <input 
                name="description"
                onChange={handleChange}
                placeholder="Class Description" 
                type="text" 
                value={classInfo.description}
            />
            <br />
            <input 
                name="price"
                onChange={handleChange}
                placeholder="Price" 
                type="number" 
                value={classInfo.price}
            />
            <br />
            <input 
                name="member_price"
                onChange={handleChange}
                placeholder="Member Price" 
                type="number" 
                value={classInfo.member_price}
            />
            <br />
            <input 
                name="teacher"
                onChange={handleChange}
                placeholder="Class Teacher" 
                type="text" 
                value={classInfo.teacher}
            />
            <br />
            <input 
                name="date"
                onChange={handleChange}
                placeholder="date" 
                type="date" 
                value={classInfo.date}
            />
            <br />
            <input 
                name="time"
                onChange={handleChange}
                placeholder="time" 
                type="time" 
                value={classInfo.time}
            />
            <br />
            <input 
                name="capacity"
                onChange={handleChange}
                placeholder="Capacity" 
                type="number" 
                value={classInfo.capacity}
            />
            <br />
            <button type="Submit">Add Class</button>
        </form>
        </div>
    )
}

export default AddClassForm;
