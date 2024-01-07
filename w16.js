const btn = document.getElementById('submitBtn');
const input = document.querySelectorAll('.input');
const form = document.forms.myForm;
const userName = form.elements.userName;
const email = form.elements.userEmail;
const age = form.elements.age;
const female = form.elements.female;
const male = form.elements.male;
const prof = form.elements.prof;
const password = form.elements.password;
const agree = form.elements.agree;

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let hasError = false;
    btn.disabled = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(userName.value === ' '){
        document.getElementById('userError').textContent = 'Введите имя';
        hasError = true;
    }
    if(emailRegex.test(email.value)===false){
        document.getElementById('emailError').textContent = 'Некорректная почта';
        hasError = true;
    }
    if(age.value = ''){
        document.getElementById('ageError').textContent = 'Введите возраст';
        hasError = true;
    }
    if(!female.checked && !male.checked){
        document.getElementById('genderError').textContent = 'Выберите пол';
        hasError = true;
    }
    if(!prof){
        document.getElementById('profError').textContent = 'Выберите хотя бы один пункт';
        hasError = true;
    }
    if(password.value = ''){
        document.getElementById('passwordError').textContent = 'Введите пароль';
        hasError = true;
    }
    if(!agree.checked){
        document.getElementById('agreeError').textContent = 'Необходимо согласие с условиями';
        hasError = true;
    }
    if( hasError === false){
        btn.disabled = false;
        console.log(userName.value);
        console.log(email.value);
        console.log(age.value);
        console.log(female.value);
        console.log(male.value);
        console.log(prof.value);
        console.log(password.value);
        form.reset();
      
    }


});

input.forEach(function(input){
    input.addEventListener('focus', function (){
        input.style.border = '1px solid blue';
    });
    input.addEventListener('blur',function(){
        input.style.border = '1px solid grey';
    })
})
