class Cpf {
    //constructor goes here

    static validate(cpfInput) {

        if (!cpfInput) throw new Error('Missing Value!');
        if (this.isSenquence(cpfInput)) throw new Error("Can't validate sequences!");

        const sanitizedCpf = this.sanitize(cpfInput);

        if (!sanitizedCpf) throw new TypeError('Value must be a cpf string!');

        const cpfWithouLast2Digits = sanitizedCpf.slice(0, -2);
        const arrayFromcpfPrefix = Array.from(cpfWithouLast2Digits);

        let arrayMul = this.decreasingMult(arrayFromcpfPrefix, 10);
        let sumFromArray = this.sumAllElements(arrayMul);
        let digit = this.getDigitFromSum(sumFromArray);

        arrayFromcpfPrefix.push(digit);

        arrayMul = this.decreasingMult(arrayFromcpfPrefix, 11);
        sumFromArray = this.sumAllElements(arrayMul);
        digit = this.getDigitFromSum(sumFromArray);

        arrayFromcpfPrefix.push(digit);

        const generatedCpfNumbers = arrayFromcpfPrefix.join('');

        return generatedCpfNumbers === sanitizedCpf;
    };

    static sanitize(string) {
        return string.replace(/\D+/g, '');
    };

    static decreasingMult(array, firstFactor) {
        const newArray = array.map(element => {
            let elementCopy = Number([element].pop());
            elementCopy *= firstFactor;
            firstFactor--;

            return elementCopy;
        });

        return newArray;
    };

    static sumAllElements(array) {
        return array.reduce( (sumResult, element) => {
            sumResult += Number(element);
            return sumResult
        },0);
    }

    static getDigitFromSum(sum) {
        const newDigit = 11 - sum % 11;
        return newDigit > 9 ? 0 : newDigit;
    }

    static isSenquence(string) {
        const seq = string[0].repeat(string.length);
        return string === seq;
    }
}

console.log(Cpf.validate('018.462.442-85'));