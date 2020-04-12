class Box {
    constructor() {
        this.box = document.querySelector('textarea');
        this.control = document.querySelector('.border-control');
        this.catchInputChange();
        this.catchCopyAction();
    };

    catchInputChange() {
        this.control.addEventListener('input', () => {
           this.handleInputChange();
        });
    };

    catchCopyAction () {
        this.control.querySelector('.btn-copy').addEventListener('click', () => {
            this.copyToClipboard();
        })
    };

    handleInputChange () {
        this.cleanDisplay();
        const inputs = this.fetchAndReturnInputs();
        this.updateAllInputs(inputs);
    };

    copyToClipboard () {
        this.box.select();
        this.box.setSelectionRange(0, 99999);
        document.execCommand('copy');
    };

    fetchAndReturnInputs() {
        const horizontalInputs = [];
        const verticalInputs = [];
        for (let field of this.control.querySelectorAll('input')) {
            if (field.classList.contains('horizontal')) {
                const inputs = this.getRadiusFromRange(field.value);
                horizontalInputs.push(inputs[0]);
                horizontalInputs.push(inputs[1]);
            }
            if (field.classList.contains('vertical')) {
                const inputs = this.getRadiusFromRange(field.value);
                verticalInputs.push(inputs[0]);
                verticalInputs.push(inputs[1]);
            }
        }
        return [horizontalInputs, verticalInputs];

    };

    updateAllInputs ([horizontal, vertical]) {
        let borderRadius = ''
        for (let value of horizontal) {
            borderRadius += `${value}% `;
        }
        borderRadius += '/ '
        for (let value of vertical) {
            borderRadius += `${value}% `;
        }
        this.box.style.borderRadius = borderRadius;
        this.setCornerCssOnDisplay(borderRadius);
    }

    getRadiusFromRange(range) {
        const secondTerm = 100 - range;
        return [range, secondTerm];
        
    }

    setCornerCssOnDisplay (css) {
        this.box.value += `border-radius: ${css};`;
    };

    cleanDisplay() {
        this.box.value = '';
    };


    };

const box = new Box();