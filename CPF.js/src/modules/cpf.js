export class CPF {

    createCPF() {
        let newCPF = '';
        for (let i=0; i<9; i++) { //obtaining prefix
            newCPF += CPF.createDigit();
        }
        newCPF += this.getSufixFrom(newCPF);
        newCPF = this.format(newCPF);
        return newCPF;
    }

    format(cpf) {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    }
    validate(cpf) {
        if (!cpf) return false;
        if (CPF.isSenquence(cpf)) return false;
        if (cpf.match(/[a-zA-Z!@#$%^&*(),?":{}|<>]/g)) return false;
        
        const prefix = this.getPrefixFrom(cpf);
        const validCPF = prefix + this.getSufixFrom(prefix);

        return CPF.sanitize(cpf) === validCPF;
    };
     getPrefixFrom(cpf) {
        return CPF.sanitize(cpf).slice(0, -2);
    };

     getSufixFrom(cpf) {
        if (cpf.length > 9) return CPF.sanitize(cpf).slice(-2);
        const digit1 = CPF.createDigit(cpf);
        const digit2 = CPF.createDigit(cpf+digit1);
        const sufix = digit1+digit2;

        return sufix;
    }

    static sanitize(input) {
        return input.replace(/\D+/g, '');
    };

    static createDigit(incompleteCpf) {
        if (!incompleteCpf || incompleteCpf.length < 9) {
            const randomDigit = Math.floor(Math.random() * 9);
            return randomDigit.toString();
        }
        //sufix
        let factor = incompleteCpf.length + 1;
        let sum = 0;
        for (let i in incompleteCpf) {
            sum += incompleteCpf[i] * factor;
            factor--;
        }
        const newDigit = 11 - (sum % 11);
        return newDigit > 9 ? 0 : String(newDigit);
    }

    static isSenquence(string) {
        const seq = string[0].repeat(string.length);
        return string === seq;
    }
};
