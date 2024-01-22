//Login *****************************

let loginButton = document.querySelector('#loginBtn');
let emailid = '';
let Password = '';

loginButton.addEventListener('click', async() => {
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
    if (details !== undefined) {

    }
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


//Registration***************************************
let registerButton = document.querySelector('#registerBtn');

registerButton.addEventListener('click', async() => {

    let name = document.querySelector('#fullName');
    let phone = document.querySelector('#phoneNo');
    let dob = document.querySelector('#dateOfBirth');
    let email = document.querySelector('#Email');
    let pass = document.querySelector('#Pass');

    let result = await fetch('http://localhost:8090/register/registerUser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName: name.value,
            phoneNumber: phone.value,
            dob: dob.value,
            emailId: email.value,
            password: pass.value
        })
    })
    if (result.status === 201) {
        let head = document.querySelector('#messageHead');
        head.textContent = 'Success'
        let body = document.querySelector('#messageBody');
        body.textContent = 'Registered Successfully';
        let foot = document.querySelector('#messageFoot');
        foot.textContent = 'Login'
        foot.classList.add('btn');
        foot.classList.add('btn-outline-success');
        foot.setAttribute("data-bs-toggle", "modal");
        foot.setAttribute("data-bs-target", "#loginModal");
        foot.setAttribute("data-bs-dismiss", "modal");

    } else {
        let head = document.querySelector('#messageHead');
        head.textContent = 'Failed'
        let body = document.querySelector('#messageBody');
        body.textContent = 'User is already registered';
        let foot = document.querySelector('#messageFoot');
        foot.textContent = 'Ok'
        foot.classList.add('btn');
        foot.classList.add('btn-outline-danger');
        foot.setAttribute("data-bs-dismiss", "modal");
    }
});