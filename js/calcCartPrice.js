// Подсчёт стоимости товаров в корзине
function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    console.log(cartItems);

    const totalPriceEl = document.querySelector('.total-price');

    const deliveryCost = document.querySelector('.delivery-cost');

    const cartDelivery = document.querySelector('[data-cart-delivery]');

    const freeDelivery = document.querySelector('.freeDelivery');

    let totalPrice = 0;

    cartItems.forEach(function (item) {
        console.log(item);

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        console.log(currentPrice);

        totalPrice += currentPrice;

    })

    console.log(totalPrice);

    // Отображаем цену на странице
    totalPriceEl.innerText = totalPrice;

    // Скрываем или показываем блок со стоимостью доставки
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (totalPrice > 0) {
        freeDelivery.classList.add('none');
    } else {
        freeDelivery.classList.remove('none');
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₴';
    }

}
