//Login *****************************

let loginButton = document.querySelector('#loginBtn');
let emailid = '';
let Password = '';

function openModal(){
    $('#messageModal').modal('show');
}
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
        let loginRegister=document.querySelector('.loginRegister');
        loginRegister.style.display='none';
        let showDiv=document.querySelector('.showDiv');
        showDiv.style.display='flex';
        let emailList=document.querySelector('.emailList h5');
        emailList.textContent=emailid;
        email.value='';
        pass.value='';
        let NAME=document.getElementById('NAME');
        NAME.value=details.fullName;
        let CONTACT=document.getElementById('CONTACT');
        CONTACT.value=details.phoneNumber;
        let DOB=document.getElementById('DOB');
        DOB.value=details.dob;

    } else {
        let header=document.getElementById('messageHead');
        header.textContent='Failed';
        let body=document.getElementById('messageBody');
        body.textContent='Invalid Email Or Password';
        let footer=document.getElementById('messageFoot');
        footer.textContent='Ok';
        footer.classList.add('btn');
        footer.classList.add('btn-danger');
        footer.setAttribute("data-bs-dismiss","modal");
        openModal();
        email.value='';
        pass.value='';
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
        foot.classList.remove('btn');
        foot.classList.remove('btn-outline-danger');
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
        foot.classList.remove('btn');
        foot.classList.remove('btn-outline-success');
        foot.classList.add('btn');
        foot.classList.add('btn-outline-danger');
        foot.setAttribute("data-bs-dismiss", "modal");
        foot.removeAttribute("data-bs-toggle", "modal");
        foot.removeAttribute("data-bs-target", "#loginModal");
    }
    name.value = '';
    phone.value = '';
    dob.value = '';
    email.value = '';
    pass.value = '';
});