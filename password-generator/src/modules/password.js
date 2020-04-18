export default function createNewPassword ({len, number=false, lower=false, upper=false, specialChar=false}) {
    
    if (len<4 || len>30) 
        throw new RangeError('Password must contain beetween 4 and 30 chars!')
    if (!(number||lower||upper||specialChar))
        throw new Error('You must activate at least one the options!')

    let newPassword = '';
    let i=0;
    while (i < len) {
        if(number) {
            newPassword += getRandomNumber();
            i++
        }
        if (lower) {
            newPassword += getLowerLetter();
            i++;
        }
        if (upper) {
            newPassword += getUpperLetter();
            i++;
        }
        if (specialChar) {
            newPassword += getSpecialChar();
            i++;
        }
    }

    return newPassword;

    function getRandomNumber(min=0, max=9) {
        return Math.floor(Math.random() * (max-min) + min);
    }

    function getLowerLetter() {
        const charCode = getRandomNumber(97, 122);
        return String.fromCharCode(charCode);
    }

    function getUpperLetter() {
        const charCode = getRandomNumber(65, 90);
        return String.fromCharCode(charCode);
    }

    function getSpecialChar () {
        const options = "+-=_!@#$%&*()?|\/<>{}[]:;";
        const index = getRandomNumber(0, options.length-1);
        return options[index];
    }
}