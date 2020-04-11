function Calculator() {
    const display = document.querySelector('.display');
    const resetSwitch = false;

    const getDisplayLen = () => {
        return display.nodeValue.length;
    };

    const enterEvent = () => {
        document.addEventListener('keyup', (e) => {
            const isEnterKey = e.key === 'Enter';

            if (isEnterKey) setUpResultDisplay();
        });
    };

    const clickEvent = () => {
        document.addEventListener('click', (e) => {
            const element = e.target;

            if (element.classList.contains('btn-clear')) clearDisplay();

            if (element.classList.contains('btn-bksp')) backspace();

            if (element.classList.contains('btn-equal')) setUpResultDisplay();
            
            if (element.classList.contains('btn-num')){
                if (resetSwitch) clearDisplay();
                setOnDisplay(element.innerText);
            }

            if (element.classList.contains('btn-op') || element.classList.contains('btn-dot')){
                setOnDisplay(element.innerText);
                resetSwitch = false;
            }
        })
    };

    const setOnDisplay = (string, concatenate=true) => {
        if (concatenate) {
            display.value += string;
            return;
        }
        display.value = string;
    };

    const clearDisplay = () => {
        display.value = '';
        display.placeholder = '';
        resetSwitch = false;
    };

    const backspace = () => {
        if (displayLen <= 1) {
            clearDisplay();
            return;
        }
        const newDisplay = display.value.slice(0, displayLen-1);
        setOnDisplay(newDisplay, false);
    };

    const arithmeticExecution = (expression) => {
        try{
            const result = eval(expression);
            if (Number(result)) 
                return result;

            return 'ERROR!';
        } catch {
            return 'ERROR!';
        }
    };

    const setUpResultDisplay = () => {
        const compResult = arithmeticExecution(display.value);
        setOnDisplay(compResult, false);
        resetSwitch = true;
    };

    this.init =  () => {
        clickEvent();
        enterEvent();
    };

}

const myCalculator = new Calculator();
myCalculator.init();