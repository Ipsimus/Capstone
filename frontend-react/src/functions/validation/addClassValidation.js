
const MIN_STRING_LEN = 1;
const MAX_STRING_LEN = 250;

function isFieldValid(string){
    
    const strLen = (string.trim()).length;

    if(MIN_STRING_LEN <= strLen < MAX_STRING_LEN){
        return true;
    }
    return false;
}

function isNumberNotNegative(num){

    if(!isNaN(num)){
        
        if(0 <= num)
            return true;
    }
    return false;
}

function validateClassInput(inputName, inputValue){
    
    let isValid=true, errorMessage="";
        
    if (inputName === "class_name" ||
        inputName === "description" ||
        inputName === "teacher"
       ){
        
        if(!isFieldValid(inputValue)){
            errorMessage = "Make sure the input is between 1 - 250 characters inclusive!";
            isValid = false;
        } 
    }        
    if (inputName === "price" ||
        inputName === "member_price" ||
        inputName === "capacity"
        ){

        if(!isNumberNotNegative(inputValue)){
            errorMessage = "Make sure to use a number equal to or greater than zero!";
            isValid = false;
        }
    }    
    return [isValid, errorMessage];
}

export default validateClassInput;
export { isFieldValid, isNumberNotNegative };