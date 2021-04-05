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

    alert(first + last + email + password);
});