{
  /* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div> */
}

const decButtonRef = document.querySelector('[data-action = decrement]');
const incButtonRef = document.querySelector('[data-action = increment]');
const valueRef = document.querySelector('#value');

let counterValue = Number(valueRef.textContent);

const increment = () => {
  counterValue += 1;

  valueRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;

  valueRef.textContent = counterValue;
};

incButtonRef.addEventListener('click', increment);
decButtonRef.addEventListener('click', decrement);
