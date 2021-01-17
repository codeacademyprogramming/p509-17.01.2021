const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const endpoint = 'https://cors-anywhere.herokuapp.com/https://www.cbar.az/currencies/17.01.2020.xml';

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  // fetch(`${endpoint}/${currency_one}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const rate = data.rates[currency_two];
  //     rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
  //     amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
  //   });

  fetch(endpoint)
    .then((res) => res.text())
    .then((text) => new window.DOMParser().parseFromString(text, 'text/html'))
    .then((data) => {
      console.log(data);

      // const rate = data.rates[currency_two];

      const rate = data.querySelector(`[Code="${currency_two}"] Value:last-child`).innerHTML;
      console.log(rate);
      rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

calculate();

currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});
