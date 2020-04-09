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
        errorDiv.classList.add('err');
        element.appendChild(errorDiv);
        console.log(errorDiv);
    };

};

const button = document.querySelector('.btn-enviar');
const nameGroup = document.querySelector('.name-group');
const lastNameGroup = document.querySelector('.lastname-group');
const userGroup = document.querySelector('.user-group');
const passwordGroup = document.querySelector('.password-group');

//validating 'nome'
button.addEventListener('click', function (e) {
    e.preventDefault();

    if (!Form.validateRegularField(nameGroup.querySelector('#nome').value)) {
        Form.setErrorMessage(nameGroup, "Você deve preencher todos os campos!");
    }

    if (!Form.validateRegularField(lastNameGroup.querySelector('#sobrenome').value)) {
        Form.setErrorMessage(lastNameGroup, "Você deve preencher todos os campos!");
    }

    if (!Form.validateUserField(userGroup.querySelector('#user').value)) {
        Form.setErrorMessage(userGroup, "Você deve preencher todos os campos!");
    }

    if (!Form.validatePasswordField(passwordGroup.querySelector('#senha').value)) {
        Form.setErrorMessage(passwordGroup, "Você deve preencher todos os campos!");
    }
});
