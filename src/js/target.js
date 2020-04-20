export const targetNodes = (target) => {
    const symbol = target.textContent,
          parent = target.closest('.parent'),
          id = +parent.dataset.id,
          total = parent.querySelector('.text-muted'),
          counter = parent.querySelector('.items__current'),
          weight = parent.querySelector('.price__weight'),
          price = parent.querySelector('.price__currency');
    return {
        symbol,
        parent,
        id,
        total,
        counter,
        weight,
        price
    }
}