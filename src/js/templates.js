export const rollTemplate = ({ id, title, total, weight, price, img, counter }) => {
    const initTotal = total - counter;
    return `
        <div class="col-md-6 parent" data-id=${id}>
        <div class="card mb-4">
            <img class="product-img" src="${img}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${title}</h5>
                <p><small class="text-muted">${initTotal} шт.</small></p>
                <div class="details-wrapper">
                    <div class="items">
                        <div class="items__control">-</div>
                        <div class="items__current">${counter}</div>
                        <div class="items__control">+</div>
                    </div>
                    <div class="price">
                        <div class="price__weight">${weight}г.</div>
                        <div class="price__currency">${price} ₽</div>
                    </div>
                </div>
                <button type="button" class="btn btn-cart btn-block btn-outline-warning">+ в корзину</button>
            </div>
        </div>
    </div>
    `
};


export const cartItemTemplate = ({
    id,
    counter,
    total,
    weight,
    price,
    img, 
    title }) => {
    const totalInit = total - counter;
        return `
            <div class="cart-item parent" data-id=${id}>
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${img}" alt="roll">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${title}</div>
                    <span><small class="text-muted">${totalInit} шт.</small></span>
                    <span class="cart-item__weight price__weight">/ ${weight}г.</span>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">
                        <div class="items items--small">
                            <div class="items__control">-</div>
                            <div class="items__current">${counter}</div>
                            <div class="items__control">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${price} ₽</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                </div>
            </div>
        </div>
        `;
};
