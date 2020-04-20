import { rollTemplate } from './templates';
import { calcRolls, addToCart, calcInCart } from './rollsActions';
import { state } from './state';
import DOM from './elements';
import { onSubmitForm } from './checkout';

const renderRolls = () => {
    const template = state.rolls.map(roll => rollTemplate(roll)).join(' ');
    DOM.rollsContainer.insertAdjacentHTML('beforeend', template);
};

document.addEventListener('DOMContentLoaded', (e) => {

    renderRolls();

    DOM.rollsContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('items__control')) {
            calcRolls(target);
        }
        if (target.classList.contains('btn-cart')) {
            addToCart(target);
        }
    });

    DOM.fullCartContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('items__control')) {
            calcInCart(e.target);
        }
    });

    DOM.form.addEventListener('submit', (e) => {
        e.preventDefault();
        onSubmitForm();
    });
});