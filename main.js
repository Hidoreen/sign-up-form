const form = document.getElementById('signup');
const firstName = document.getElementById('firstName')
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const submit = document.querySelector('.submitBtn');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs () {
    //check input values

    const firstNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(firstNameValue === ''){

        setError(firstName, 'FirstName can not be blank');
    } else{
        setSuccess(firstName);
    }

    if(emailValue === ''){
        setError(input, 'Email can not be blank')
    } else if(!isEmail(emailValue)){
        setError(input, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password can not be empty');
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === ''){
        setError(password, 'Password can not be empty');
    } else if(confirmPasswordValue !== passwordValue){
        setError(confirmPassword, 'Paaword did not match');
    }
    else {
        setSuccess(password);
    }

}

function setError(input, message){
    const box = input.parentElement;
    const small = box.querySelector('small');
    
    small.innerText = message;

    box.className = 'box error';
}

function setSuccess(input){
    const box = input.parentElement;
    box.className = 'box success';

}

function isEmail(){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

