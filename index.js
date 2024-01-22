let loginButton = document.querySelector('#loginBtn');
let emailId = '';
let password = '';
loginButton.addEventListener('click', async function() {
    let email = document.querySelector('#email1');
    let pass = document.querySelector('#password1');
    const url = 'http://localhost:8090/login/verifyLogin';
    const loginRequest = {
        emailId: email.value,
        password: pass.value
    };
    let result = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)

    });
    console.log(result);
    let finalResult = await result.json();
    console.log(finalResult);
});