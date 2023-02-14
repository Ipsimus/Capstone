
function isIdValid(userObj){
    /**
     * Title:Regex that accepts only numbers (0-9) and NO characters [duplicate]
     * Author:Michael Liu
     * Source: https://stackoverflow.com/questions/19715303/regex-that-accepts-only-numbers-0-9-and-no-characters
     */
    const idPattern = /^[0-9]+$/;
    return idPattern.test(userObj.id);
}

function isNameValid(userObj){
    /**
     * Title: Regular expression pattern to validate name field
     * Author: Chris Neilsen
     * Source: https://stackoverflow.com/questions/11501860/regular-expression-pattern-to-validate-name-field
     */
    const namePattern = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
    return namePattern.test(userObj.name);
}

function isEmailValid(userObj){
    /**
     * Title: JavaScript: HTML Form - email validation
     * Author: w3resource
     * Source: https://www.w3resource.com/javascript/form/email-validation.php
     */
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(userObj.email);
}

export default isIdValid;
export { isNameValid, isEmailValid };