import DOM from './elements';
import { state } from './state';

export const onSubmitForm = () => {

    DOM.numberInput.addEventListener('change', onChangeInput);
    function onChangeInput() {
        const regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        const valid = regExp.test(DOM.numberInput.value);
        const err = DOM.numberInput.nextElementSibling;

        if (!valid) {
            const wrap = DOM.numberInput.parentNode;
            const error = DOM.numberInput.dataset.error;
            DOM.numberInput.style.border = '2px solid red';
            const template = `<div class="error">${error}</div>`;
            wrap.insertAdjacentHTML('beforeend', template);
            if (err) err.remove();
        } else {
            DOM.numberInput.style.border = '1px solid deepskyblue';
            if (err) err.remove();
        }
    
        return valid;
    };

    const isValid = onChangeInput();

    if (!isValid) return;

    submitFromServer();
    DOM.numberInput.value = '';

}


function submitFromServer() {
    console.log(state.cart);
    state.cart = [];
    document.querySelector('.cart_full-wrap').style.display = 'none';
    alert('Спасибо за заказ!');
}


