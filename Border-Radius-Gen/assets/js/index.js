class Box {
    constructor() {
        this.box = document.querySelector('textarea');
        this.control = document.querySelector('.border-control');
        this.catchSubmit();
        this.catchCopyAction();
    };

    catchSubmit() {
        this.control.addEventListener('submit', e => {
           this.handleSubmit(e);
        });
    };

    catchCopyAction () {
        this.control.querySelector('.btn-copy').addEventListener('click', () => {
            this.copyToClipboard();
        })
    };

    handleSubmit (e) {
        e.preventDefault();
        this.cleanDisplay();
        for (let corner of this.control.querySelectorAll('input')) {
            this.updateCorner(corner.id);
        }
    };

    copyToClipboard () {
        this.box.select();
        this.box.setSelectionRange(0, 99999);
        document.execCommand('copy');
    };

    updateCorner(corner) {
        const inputValue = this.getInputValue(corner);
        switch (corner) {
            case 'top-left':
                this.box.style.borderTopLeftRadius = `${inputValue}px`;
                break;
            case 'top-right':
                this.box.style.borderTopRightRadius = `${inputValue}px`;
                break;
            case 'bottom-right':
                this.box.style.borderBottomRightRadius = `${inputValue}px`;
                break;
            case 'bottom-left':
                this.box.style.borderBottomLeftRadius = `${inputValue}px`;
                break;
            default:
                return;
        }
        this.setCornerCssOnDisplay(corner, inputValue);
    };

    setCornerCssOnDisplay (corner, value) {
        if (!value) value = 0;
        this.box.value += `border-${corner}-radius: ${value}px\n`
    };

    cleanDisplay() {
        this.box.value = '';
    };


    getInputValue(corner) {
        return this.control.querySelector(`#${corner}`).value;
    };

}

const box = new Box();