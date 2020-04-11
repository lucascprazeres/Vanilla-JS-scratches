class Box {
    constructor() {
        this.box = document.querySelector('.output-box');
        this.control = document.querySelector('.border-control');
        this.setInputBtn = document.querySelector('#btn-set');

        this.catchSubmit();
    };

    catchSubmit() {
        this.control.addEventListener('submit', e => {
           this.handleSubmit(e);
        });
    };

    handleSubmit (e) {
        e.preventDefault();
        this.updateCorner();
    };

    updateCorner() {
        this.box.style.borderTopLeftRadius = `${this.getInputValue('left-top')}px`;
        this.box.style.borderTopRightRadius = `${this.getInputValue('right-top')}px`;
        this.box.style.borderBottomRightRadius = `${this.getInputValue('right-bottom')}px`;
        this.box.style.borderBottomLeftRadius = `${this.getInputValue('left-bottom')}px`;
    };

    getInputValue(corner) {
        return this.control.querySelector(`#${corner}`).value;
    };

}

const box = new Box();