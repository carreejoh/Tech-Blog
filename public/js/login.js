
const signupSubmit = document.querySelector('#signupSubmit');

const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');


// const commitSignUp = async () => {
    

// }

const commitSignUp = async () => {
    let username = signupUsername.value.trim()
    let password = signupPassword.value.trim()
    let passwordConfirm = signupPasswordConfirm.value.trim()

    if(password !== passwordConfirm) {
        alert('Passwords do not match!');
        return;
    }
    if(username && password) {
        const response = await fetch('/')
    }

}

signupSubmit.addEventListener("click", commitSignUp);