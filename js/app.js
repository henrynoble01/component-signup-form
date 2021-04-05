// let button1 = document.getElementById('button');
// let form = document.querySelector('#form');

// function onsubmit(e) {
    // e.preventDefault();
    // console.log(e);
    // alert("The form was submitted");

// }

// function hello(){
    // console.log("hello")
// }

// button1.addEventListener('click',onsubmit)


// form.addEventListener('submit',(e)=> onsubmit(e) )

// console.log(form)



const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstName === ''){
        addErrorTo('firstname', 'First Name is required');
    } else {
        removeErrorFrom('firstname');
    }

    if(lastName === ''){
        addErrorTo('lastname', 'Last Name is required');
    }else {
        removeErrorFrom('lastname');
    }

    if (email === '') {
        addErrorTo('email', 'Email is required');
    }else if (!isvalid(email)) {
         addErrorTo('email', 'Email is not valid');
    } else {
        removeErrorFrom('email');
    }

    // if (isvalid(email)) {
    //     addErrorTo('email', 'Email is not valid');
    // }

    if(password === ''){
        addErrorTo('password', 'password is required');
    }else {
        removeErrorFrom('password');
    }

    // alert(firstName + lastName + email + password);
});

function addErrorTo(field, message){
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small =  formControl.querySelector('small');
    small.innerText = message;
    // small.style.opacity ='1';
}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');

    const small =  formControl.querySelector('small');
    small.style.opacity ='0';
}

function isvalid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}