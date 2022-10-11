
const loginForm = async (event) => {
    event.preventDefault();

// cancel event if it cancelable

const username = document. querySelector('#log-in-value').value();
const password = document.querySelector('#password-value').value();

if (username && password) {
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json'},
    });

    if(response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}
};

const signupForm = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#user-signup').value();
    const password = document.querySelector('#pass-signup').value();

    if(username && password) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/blogs')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#button-signin')
    .addEventListener('submit', loginForm);

document
    .querySelector('#button-signup')
    .addEventListener('submit', signupForm);