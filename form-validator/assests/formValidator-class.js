class Form {
    //constructor goes here

    static validateRegularField(string) {
        return string ? true : false;
    }

    static validateUserField(string) {
        if (!string || !this.isInRange(string, 3, 12) || !this.isAlphaNum(string))
            return false;

        return true;
    };

    static validatePasswordField(string) {
        if (!string || !this.isInRange(string, 6, 12))
            return false;
        
        return true;

    };

    static validateCPFField(inputField) {
        const inputValue = inputField.value;
        return Cpf.validate(inputValue);
    };
    
    static isInRange(inputValue, min, max) {
        return min <= inputValue.length && inputValue.length <= max;
    }

    static isAlphaNum(string) {
        const alphaNumExp = /^[a-zA-Z-0-9]+$/;
        return string.match(alphaNumExp);
    }

    static setErrorMessage(element, errorMsg) {
        const errorDiv = document.createElement('div');

        errorDiv.innerText = errorMsg;
        element.appendChild(errorDiv);
        console.log(errorDiv);
    };

};

const nameField = document.querySelector('#nome');
const lastNameField = document.querySelector('#sobrenome');
const CpfField = document.querySelector('#cpf');
const userField = document.querySelector('#user');
const passwordField = document.querySelector('#senha');
const confirmPasswordField = document.querySelector('#senha-confirm');
const button = document.querySelector('.btn-enviar');

const nameDiv = document.querySelector('.input-group');

console.log(button);

//validating 'nome'
button.addEventListener('click', function (e) {
    e.preventDefault();

    if (!Form.validateRegularField(nameField.value))
        Form.setErrorMessage(nameDiv, "Você deve preencher todos os campos!");
});
