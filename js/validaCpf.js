function validaCpf(cpf) {
    let arrayMul;
    let arraySum
    let digit;

    function sanitizeCpf(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    function getArrayMultiplied(array, firstFactor) {
        const newArray = array.map(digit => {
            let newDigit = [digit].pop();
            newDigit = Number(newDigit);
            newDigit *= firstFactor;
            firstFactor--;

            return newDigit;
        });
        return newArray
    }

    function sum(array) {
        return array.reduce((result, digit) => result += digit, 0);
    }

    function getDigit(sum) {
        return 11 - sum % 11;
    }

    const cpfSanitized = sanitizeCpf(cpf);
    const cpfWithoutLast2 = cpfSanitized.slice(0, -2);
    const arrayFromCpf = Array.from(cpfWithoutLast2);

    //getting the first digit
    arrayMul = getArrayMultiplied(arrayFromCpf, 10);
    arraySum = sum(arrayMul);
    digit = getDigit(arraySum);

    arrayFromCpf.push(digit); 
    
    //getting second digit;

    arrayMul = getArrayMultiplied(arrayFromCpf, 11);
    arraySum = sum(arrayMul);
    digit = getDigit(arraySum);

    arrayFromCpf.push(digit);

    const finalCpf = arrayFromCpf.join('');

    return finalCpf === cpfSanitized;
}
console.log(validaCpf('705.484.450-52'));