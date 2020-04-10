class Form {
    //constructor goes here

    static validateRegularField(string) {
        return string ? {val:true} : {val:false,err:'No fields can be empty'};
    }

    static validateUserField(string) {
        if (!string) {
            return {
                val: false,
                err: 'No field can be empty!'
            };
        }   
        if (!this.isInRange(string, 3, 12)) {
            return {
                val: false,
                err: 'Field must contain between 3 and 12 caracters'
            }
        }
        if (!this.isAlphaNum(string))

        return {val: true};
    };

    static validatePasswordField(string) {
        if (!string) {
            return {
                val:false,
                err:'No fields can be empty'
            };
        }
        if (!this.isInRange(string, 6, 12)) {
            return {
                val:false,
                err:'Field must contain between 6 and 12 caracters'
            }; 
        }
        return {val:true};

    };

    static validateCPFField(cpfString) {
        return Cpf.validate(cpfString) ? {val:true} : {val:false,err:'No fields can be empty'};
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
    //class will be used here
});
