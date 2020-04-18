import './assets/css/style.css';
import createNewPassword from "./modules/password.js";

function main() {
    const display = document.querySelector('.display');
    const lenInput = document.querySelector('#len');
    const numberInput = document.querySelector('#number');
    const lowerInput = document.querySelector('#lower');
    const upperInput = document.querySelector('#upper');
    const specialCharInput = document.querySelector('#special');
    const activationBtn = document.querySelector('#activate-btn');

    activationBtn.addEventListener('click', handleClick);

    function handleClick() {
        resetDisplay();
        try {
            const password = createNewPassword({
                len: lenInput.value,
                number: numberInput.checked,
                lower: lowerInput.checked,
                upper: upperInput.checked,
                specialChar: specialCharInput.checked
            });
            setStringOnDisplay(password);
        } catch (err) {
            display.style.color = "var(--error-color)";
            if (err instanceof RangeError) {
                setStringOnDisplay("Senha deve conter entre 4 e 30 caracteres!");
            }
            else if (err instanceof Error){
                setStringOnDisplay("Você deve marcar ao menos uma opção!");
            }
        } 
    }

    function setStringOnDisplay (string) {
        display.innerText = string;
    }
    function resetDisplay() {
        display.style.color = "var(--primary-color)";
    }
}
main();
