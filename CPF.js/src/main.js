import './assets/css/style.css';
import './assets/css/reset.css';
import {CPF} from './modules/cpf';

function main() {
    const cpf = new CPF();

    const createCpfBtn = document.querySelector('#create-cpf-btn');
    const copyBtn = document.querySelector('#copy');
    const validationBtn = document.querySelector('#validation-btn');
    const validationInput = document.querySelector('.validation-section input');


    createCpfBtn.addEventListener('click', setNewCPF);
    copyBtn.addEventListener('click', copyToClipboard);
    validationBtn.addEventListener('click', displayValidation);
    validationInput.addEventListener('input', resetValidation);

    function setNewCPF () {
        const display = document.querySelector('.creation-section input');
        const newCPF = cpf.createCPF();
        display.value = newCPF;
        
    }

    function copyToClipboard() {
        const display = document.querySelector('.creation-section input');
        display.focus();
        display.select();
        document.execCommand('copy');
    }

    function createValidationDiv () {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result-div');
        if (cpf.validate(validationInput.value)) {
            resultDiv.innerHTML = "CPF válido!";
            resultDiv.classList.add('success-div');
        }
        else {
            resultDiv.innerHTML = "CPF inválido!";
            resultDiv.classList.add('failure-div');
        }
        return resultDiv;
    }

    function displayValidation() {
        resetValidation();
        const resultDiv = createValidationDiv();
        validationBtn.insertAdjacentElement('afterend', resultDiv);
        
    }

    function resetValidation() {
        const resultDiv = document.querySelector('.result-div');
        if (resultDiv)
            resultDiv.remove();
    }
}
main();