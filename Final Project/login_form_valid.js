"use strict"
function CheckPassword(inputtxt) 
{ 
    var passw=  /^[A-Za-z]\w{7,36}$/;
    if(inputtxt.value.match(passw)) { 
        return true;
    } 
    else { 
        alert('Try another password!');
        document.getElementById("errors").innerHTML = "First character of the password must be a letter!";
        document.getElementById("errors").style.color = "yellow";
        inputtxt.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)){
    return true;
    } 
    else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
    }
} 
function allLetter(uname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Name must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function checkMatch(passOr, passCo){
    if(passOr === passCo)
    {
        return true;
    }
    else{
        return false;
        alert("Passwords don't match!");
    }
}
function login(){
    var inputtxt = document.form1.password;
    var uemail = document.form1.email;

    CheckPassword(inputtxt);
    ValidateEmail(uemail);
}
function register(){
    var inputtxt = document.form2.password;
    var inputtxt2 = document.form2.confPassword;
    var uemail = document.form2.email;
    var uname = document.form2.firstName;
    var uname2 = document.form2.lastName;

    
    ValidateEmail(uemail);
    CheckPassword(inputtxt);
    allLetter(uname);
    allLetter(uname2);
    checkMatch(inputtxt,inputtxt2);
}

function ne(){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    request.open('GET', 'tickets.html', true);
    request.send();
}


