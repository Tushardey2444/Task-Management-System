let loginButton = document.querySelector('#loginBtn');
let emailid = '';
let Password = '';



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
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginRequest)

    });
    // let r = await result.text();
    // console.log(r);
    let details = await getDetails(result.status, email, pass);

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
        let res = await otherInfo.json();
        return res;
    }
}