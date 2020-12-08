const warning = document.querySelector('.warning');
const name = document.querySelector('.name');
const lastname = document.querySelector('.last-input');
const password = document.querySelector('.password-input');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const country = document.querySelector('.country');
const city = document.querySelector('.city');
const phonenum = document.querySelector('.phonenum');
const input = document.querySelector('.input');
const secondpass = document.querySelector('.second-pass');

submit.addEventListener('click', function () {
    let warnings = [];
    if (name.value == '' || password.value == '' || secondpass.value == '' || phonenum.value == '' || city.value == '' || country.value == '' || email.value == '') {
        warnings.push("fill in every section");
    }

    if (password.value.length <= 6) {
        warnings.push('password must be longer than 6 characters')

    } else if (password.value.length >= 20) {
        warnings.push('password must be shorter than 20 characters')
    }

    var letters = /^[A-Za-z]+$/;
    var num = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/;
    if (password.value.match(letters) == password.value.match(num) !== password.value == '') {
        warnings.push('password is normal (when contains numbers)')
        return true;
    }
    if (password.value.match(letters) !== password.value.match(num)) {
        warnings.push('poor password')
    }

    if (password.value !== secondpass.value) {
        warnings.push('reenter password')
    }
    if (phonenum.value.match(num)) {
        return true;
    } else {
        warnings.push(' enter phone number')
    }

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.match(pattern)) {
        warnings.push(' email address correct')
    } else {
        warnings.push(' enter  valid email address')
    }
    alert(warnings.join(','));

});


var nametrans = document.querySelector('.first-name');
var passwordtrans = document.querySelector('.password');
var secondpasstrans = document.querySelector('.secondpass');
var countrytrans = document.querySelector('.countrytrans');
var citytrans = document.querySelector('.citytrans');
var numbertrans = document.querySelector('.numbertrans');
var emailtrans = document.querySelector('.emailtrans');
var submittrans = document.querySelector('.submittrans');

const trans2 = [
    {
        NameEng: 'Name',
        NameGeo: 'სახელი',
        PasswordEng: 'Password',
        PasswordGeo: 'პაროლი',
        RenterPasswordEng: 'Renter Password',
        RenterPasswordGeo: 'პაროლის შემოწმება',
        CountryEng: 'Country',
        CountryGeo: 'ქვეყანა',
        CityEng: 'City',
        CityGeo: 'ქალაქი',
        PhoneNumberEng: 'Phone Number',
        PhoneNumberGeo: 'ტელეფონის ნომერი',
        EmailEng: 'Email',
        EmailGeo: 'ემაილი',
        SubmitEng: 'Submit',
        SubmitGeo: 'გაგზავნა',


    }
]
document.querySelector('.geo').addEventListener('click', function () {
    document.querySelector('.language').textContent = "ენა";
    nametrans.textContent = trans2[0].NameGeo;
    passwordtrans.textContent = trans2[0].PasswordGeo;
    secondpasstrans.textContent = trans2[0].RenterPasswordGeo;
    countrytrans.textContent = trans2[0].CountryGeo;
    citytrans.textContent = trans2[0].CityGeo;
    numbertrans.textContent = trans2[0].PhoneNumberGeo;
    emailtrans.textContent = trans2[0].EmailGeo;
    submittrans.textContent = trans2[0].SubmitGeo;

});


document.querySelector('.eng').addEventListener('click', function () {
    document.querySelector('.language').textContent = "LANG";
    nametrans.textContent = trans2[0].NameEng;
    passwordtrans.textContent = trans2[0].PasswordEng;
    secondpasstrans.textContent = trans2[0].RenterPasswordEng;
    countrytrans.textContent = trans2[0].CountryEng;
    citytrans.textContent = trans2[0].CityEng;
    numbertrans.textContent = trans2[0].PhoneNumberEng;
    emailtrans.textContent = trans2[0].EmailEng;
    submittrans.textContent = trans2[0].SubmitEng;

});















