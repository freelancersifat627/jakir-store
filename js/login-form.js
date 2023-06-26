document.getElementById('login-btn').addEventListener('click' , function(){
    // console.log('login btn clicked');
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    // console.log(email);
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    // console.log(email , password);
    if(email === 'jakirstor@gmail.com' && password === '123456'){
        // console.log('valid user');
        window.location.href = "./bank.html";
    }
    else{
        // console.log('invalid user');
        alert('Enter right Email or password');
    }
})