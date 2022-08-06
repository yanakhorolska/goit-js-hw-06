const decrementButton = document.querySelector('[data-action="decrement"]');

const incrementButton = document.querySelector('[data-action="increment"]');

const total = document.querySelector('#value');

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

decrementButton.addEventListener('click', function () {
    counter.decrement();
    total.textContent = counter.value;
})

incrementButton.addEventListener('click', function () {
    counter.increment();
    total.textContent = counter.value;
})