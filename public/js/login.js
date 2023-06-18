
const signupSubmit = document.querySelector('#signupSubmit');
const signupUsername = document.getElementById('signupUsername');
const signupPassword = document.getElementById('signupPassword');
const signupPasswordConfirm = document.getElementById('signupPasswordConfirm');

const loginSubmit = document.querySelector('#loginSubmit');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');


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
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json'}
        });
        console.log(username);
    console.log(password);
        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Sign up failed');
        }
    } else {
        alert('Fill out all fields');
    }

}


const commitLoginIn = async () => {
    let username = loginUsername.value.trim()
    let password = loginPassword.value.trim()

    if(username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: { 'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Login failed');
        }
    } else {
        alert('Missing field');
    }
}



signupSubmit.addEventListener("click", commitSignUp);
loginSubmit.addEventListener("click", commitLoginIn);