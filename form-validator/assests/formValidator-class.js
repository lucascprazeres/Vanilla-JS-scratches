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

};

console.log(Form.validatePasswordField('aaaaa@1111111'));