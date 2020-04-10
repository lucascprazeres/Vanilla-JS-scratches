class validateForm {
    constructor () {
        this.formulario = document.querySelector('.register-form');
        this.eventTrigger();
    };

    eventTrigger () {
        this.formulario.addEventListener('submit', e => {
        this.handleSubmit(e);
        });
    };

    handleSubmit (e) {
        e.preventDefault();
        this.validateExplictFields();
    };

    validateExplictFields () {
        let validFlag = true;

        for (let field of this.formulario.querySelectorAll('div')) {
            if (field.classList.contains('err-text'))
                field.remove();
        }
        for (let field of this.formulario.querySelectorAll('input')) {
            const label = field.previousElementSibling.innerText;
            if (!field.value) {
                this.setErrorMessage(field, `Campo "${label}" deve ser preenchido!`);
                validFlag = false;
                continue;
            }

            if (field.id === "nome" || field.id === "sobrenome") {
                if(!this.validateName(field)) validFlag = false;
            }

            if (field.id === "cpf") {
                if (!this.validateCpf(field)) validFlag = false;
            }
        }

        return validFlag;
    };

    validateName (nameField) {
        if(!nameField.value.match(/^[a-zA-Z]+$/g)) {
            const label = nameField.previousElementSibling.innerText;
            this.setErrorMessage(nameField, `Campo ${label} só deve conter letras!`)   
        }
    }

    validateCpf (cpfField) {
        if (!Cpf.validate(cpfField.value))
            this.setErrorMessage(cpfField, 'CPF inválido!');
    }

    setErrorMessage (element, msg) {
        const errDiv = document.createElement('div');
        errDiv.classList.add('err-text');
        errDiv.innerText = msg;
        element.insertAdjacentElement('afterend', errDiv);
    }
};

const myForm = new validateForm();