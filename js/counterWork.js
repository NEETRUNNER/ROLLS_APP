// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
    console.log('Click window');
    // Обьявили переменную для счётчика
    let counter;

    console.log(event.target.dataset.action);

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обёртку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        
        // Находим див с числом счётчика
        counter = counterWrapper.querySelector('[data-counter]');
        console.log(true);
    }


    // Проверяем является ли елемент кнопкой плюс
    if (event.target.dataset.action === 'plus') {
        console.log('Plus');

        counter.innerText = ++counter.innerText;
    }


    // Проверяем является ли елемент кнопкой минус
    if (event.target.dataset.action === 'minus') {
        console.log('Minus');

        if (parseInt(counter.innerText) > 1) {
            // Изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {
            // Проверка на товар который находится в корзине
            console.log('In cart');
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // Отображение статуса корзины Пустая / Полная
            toggleCartStatus();
        }

        
    }

    // Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Пересчёт общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }

});