const signupbutton=document.getElementById('signupButton');
const signinbutton =document.getElementById('signinButton');
const signinform=document.getElementById('signin');
const signupform=document.getElementById('signup');

signupbutton.addEventListener('click',function(){
    signinform.style.display="none";
    signupform.style.display="block";
})

signinbutton.addEventListener('click',function(){
    signupform.style.display="none";
    signinform.style.display="block";
})