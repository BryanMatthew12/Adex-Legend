function formSubmitted(event){
    let usernameTxt = document.getElementById('usernameTxt')
    let username = usernameTxt.value

    let password = document.getElementById('passwordTxt').value
    let confirmPassword = document.getElementById('confiirmPasswordTxt').value
    let email = document.getElementById('emailTxt').value

    let maleRadio = document.getElementById('male').checked
    let femaleRadio = document.getElementById('female').checked

    let checkBox = document.getElementById('checkBox').checked

    if (password !== confirmPassword){
        alert('password must match with each other')
    }
    else if (username.length < 10){
        alert('username length must atleast be 1 character(s)')
    }
    else if (password !== confirmPassword){
        alert('password must match with each other')
    }
    else if (!email.endsWith('@gmail.com')){
        alert('email must ends with @gmail.com')
    }
    else if(!maleRadio && femaleRadio){
        alert('please select your gender')
    }
    else if (!checkBox){
        alert('you must agree with the terms and conditions')
    }
    else{
        alert('successfully registered')
    }

    event.preventDefault


}