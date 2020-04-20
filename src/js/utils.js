export const findRoll = (arr, id) => {
    const index = arr.findIndex(r => r.id === id);
    return arr[index];
};

export const getSum = (arr) => {
    return arr.reduce((acc, item) => {
        return acc += (item.price * item.counter);
    }, 0);
};

const renderCalc = ({ weight, price, counter, roll, total }) => {
    counter.textContent = roll.counter;
    price.textContent = (roll.counter * roll.price) + '₽';
    weight.textContent = (roll.counter * roll.weight) + 'г.';
    total.textContent = (roll.total - roll.counter) + ' шт.';
};

export const calcItems = ({ 
    symbol,
    id,
    total,
    counter,
    weight,
    price }, arr, type = 'rolls') => {

    const roll = findRoll(arr, id);
    const supportRoll = findRoll(arr, id);
    const oldTotal = supportRoll.total;

    const index = arr.findIndex(item => item.id === id);

    const dataForRender = {
        counter,
        weight,
        price,
        roll,
        total
    };

    if (symbol === '-') {
        if (roll.counter <= 1 && type === 'cart') {
            arr.splice(index, 1);
            renderCalc(dataForRender);
            return;
        }

        if (roll.counter <= 1 && type !== 'cart') return;
        roll.counter -= 1;
        renderCalc(dataForRender);

    } else {
        if (roll.counter >= oldTotal) return;
        roll.counter += 1;
        renderCalc(dataForRender);
    }
};