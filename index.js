let loginButton = document.querySelector('#loginBtn');
let emailId = '';
let password = '';
loginButton.addEventListener('click', async() => {
    let email = document.querySelector('#email1');
    let pass = document.querySelector('#password1');
    let result = await fetch('http://localhost:8090/login/verifyLogin', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailId: email.value,
            password: pass.value
        })
    });
    let finalResult = await result.json();
    console.log(finalResult);
});