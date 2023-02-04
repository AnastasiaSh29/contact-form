import  Validator from './Validator.js';

const form = document.querySelector('.form');
const firstName = form.querySelector('.form__firstName');
const lastName = form.querySelector('.form__lastName');
const email = form.querySelector('.form__email');

const validationConfig = {
    buttonSubmitSelector: '.form__btn-submit',
    buttonInvalidClass: 'form__btn-submit_invalid',
    inputInvalidClass: 'form__input_invalid',
    inputErrorClass: 'input-error',
    error: '.error',
    InputForm: '.form__input'
};



const validate = new Validator(validationConfig, form);

validate.enableValidation();

// -------------------------------------------------------------------------------------
// Tests

// console.log("isEmail--------------");
// console.log("aa@aa", validate.isEmail('aa@aa'));
// console.log("aa@aa.c", validate.isEmail('aa@aa.c'));
// console.log("aa@aa.com", validate.isEmail('aa@aa.com'));

// console.log("isRequired--------------");
// console.log("firstName", validate.isRequired(firstName));
// console.log("lastName", validate.isRequired(lastName));
// console.log("email", validate.isRequired(email));

// console.log("isDate---------------");
// console.log("100", validate.isDate(100));
// console.log("234", validate.isDate("234"));
// console.log("hello", validate.isDate("hello"));
// console.log("25 Feb 2018", validate.isDate("25 Feb 2018"));
// console.log("25-Feb-2018", validate.isDate("25-Feb-2018"));
// console.log("25/Feb/2018", validate.isDate("25/Feb/2018"));
// console.log("2009-11-10T07:00:00+0000", validate.isDate("2009-11-10T07:00:00+0000"));