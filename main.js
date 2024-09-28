'use strict'

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const yearOfBirthInput = document.querySelector('#yearOfBirth');
const errorMessageDiv = document.querySelector('#error-message');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const yearOfBirth = yearOfBirthInput.value.trim();
    let errors = [];
    if (name === '') {
        errors.push('Введите имя');
        nameInput.style.border = '1px solid red';
    } else if (name.length < 2) {
        errors.push('Имя должно быть длиной не менее 2 символов.');
        nameInput.style.border = '1px solid red';
    } else {
        nameInput.style.border = '';
    }

    if (yearOfBirth === '') {
        errors.push('Введите год рождения');
        yearOfBirthInput.style.border = '1px solid red';
    } else if (yearOfBirth.length !== 4) {
        errors.push('Год рождения должен состоять ровно из 4 цифр.');
        yearOfBirthInput.style.border = '1px solid red';
    } else {
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(yearOfBirth);
        if (age < 18) {
            errors.push('Вам должно быть не менее 18 лет.');
            yearOfBirthInput.style = '1px solid red';
        } else {
            yearOfBirthInput.style.border = '';
        }
    }
    if (errors.length > 0) {
        errorMessageDiv.innerHTML = errors.join('<br>');
    } else {
        errorMessageDiv.innerHTML = 'Валидцаия пройдена';
    }
});