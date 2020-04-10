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
        this.validateExplictAndEmptyFields();
        this.validatePasswordFields();
    };

    validateExplictAndEmptyFields () {
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

            if (field.id === "nome" || field.id === "sobrenome")
                validFlag = !this.validateName(field);

            if (field.id === "cpf")
                validFlag = this.validateCpf(field);

            if (field.id === "user")
                validFlag = this.validateUser(field);
        }

        return validFlag;
    };

    validatePasswordFields () {
        let validFlag = true;

        const password = this.formulario.querySelector('#senha');
        const confirmPassword = this.formulario.querySelector('#senha-confirm');

        for (let element of this.formulario) {
            if (element.classList.contains('err-text'))
                element.remove();
        }

        if (password.value.length < 6 || password.value.length > 12)
            this.setErrorMessage(password, 'Esse campo deve conter entre 6 e 12 caracteres!');

        if (confirmPassword.value !== password.value)
            this.setErrorMessage(confirmPassword, 'Senhas devem ser iguais!');

        else if (confirmPassword.value.length < 6 || confirmPassword.value.length > 12)
            this.setErrorMessage(confirmPassword, 'Esse campo deve conter entre 6 e 12 caracteres!');
    };

    validateName (nameField) {
        if(!nameField.value.match(/^[a-zA-Z]+$/g)) {
            const label = nameField.previousElementSibling.innerText;
            this.setErrorMessage(nameField, `Campo "${label}" deve conter somente letras!`)   
        }
    };

    validateCpf (cpfField) {
        if (!Cpf.validate(cpfField.value))
            this.setErrorMessage(cpfField, 'CPF inválido!');
        console.log(Cpf.validate(cpfField.value));
    };

    validateUser (userField) {
        if (userField.value.length < 3 || userField.value.length > 12)
            this.setErrorMessage(userField, 'Esse campo deve conter entre 3 e 12 caracteres!')
        else if (!userField.value.match(/^[a-zA-Z0-9]+$/))
            this.setErrorMessage(userField, 'Campo "Usuário" deve conter somente letras e números!');
    };

    setErrorMessage (element, msg) {
        const errDiv = document.createElement('div');
        errDiv.classList.add('err-text');
        errDiv.innerText = msg;
        element.insertAdjacentElement('afterend', errDiv);
    };
};

const myForm = new validateForm();