let loginButton = document.querySelector('#loginBtn');
let emailid = '';
let Password = '';

loginButton.addEventListener('click', async function() {
    let email = document.querySelector('#email1');
    let pass = document.querySelector('#password1');

    let result = await fetch('http://localhost:8090/login/verifyLogin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailId: email.value,
            password: pass.value
        })

    });
    let details = await getDetails(result.status, email, pass);
    console.log(details);
});

async function getDetails(status, email, pass) {
    if (status === 200) {
        emailid = email.value;
        Password = pass.value;
        let otherInfo = await fetch('http://localhost:8090/login/registrationDetails', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailId: emailid,
                password: Password
            })
        })
        console.log(otherInfo);
        let res = await otherInfo.json();
        return res;
    }
}