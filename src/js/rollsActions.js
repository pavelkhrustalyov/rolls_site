import { targetNodes } from './target';
import { cartItemTemplate } from './templates';
import { findRoll, getSum, calcItems } from './utils';
import { state } from './state';
import DOM from './elements';

export const calcRolls = (target) => calcItems(targetNodes(target), state.rolls);

export const calcInCart = (target) => {
    calcItems(targetNodes(target), state.cart, 'cart');
    const sum = getSum(state.cart);
    renderCart(sum);
};

export const renderCart = (sum) => {
    if (state.cart.length > 0) {
        Array.from(DOM.fullCartContainer.children).forEach(item => item.remove());

        document.querySelector('.cart_full-wrap').style.display = 'block';
        DOM.emptyCart.style.display = 'none';
        DOM.fullCartContainer.style.display = 'block';
        DOM.totalPrice.textContent = sum;
        const template = state.cart.map(item => cartItemTemplate(item)).join(' ');
        DOM.fullCartContainer.insertAdjacentHTML('beforeend', template);

    } else {
        Array.from(DOM.fullCartContainer.children).forEach(item => item.remove());
        document.querySelector('.cart_full-wrap').style.display = 'none';
        DOM.emptyCart.style.display = 'block';
        state.cart = [];
    }
};

export const addToCart = (target) => {
    const { id } = targetNodes(target);

    const exist = state.cart.findIndex(item => item.id === id);
    const roll = findRoll(state.rolls, id);

    if (exist === -1)  {
        state.cart.push(roll);
    } else {
        state.cart[exist] = roll;
    }

    const sum = getSum(state.cart);
    renderCart(sum);
};

