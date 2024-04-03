// Пример создания счётчика

// Отслеживаем елементы в нашем HTML документе
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Отслеживаем клик на кнопку с помощью addEventListener
btnMinus.addEventListener('click', function () {
    console.log('Minus click');
    // Проверяем чтобы счётчик был больше единицы
    if (parseInt(counter.innerText) > 1) {
        // Изменяем текст в счетчике уменьшая его на 1
        counter.innerText = --counter.innerText;
    }

});

// Отслеживаем клик на кнопку с помощью addEventListener
btnPlus.addEventListener('click', function () {
    console.log('Plus click');
    counter.innerText = ++counter.innerText;
});


/* Для одной ячейки(Чтобы понимать как всё работает) */