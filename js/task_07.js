const rangeControlRef = document.querySelector('#font-size-control');
const textContentRef = document.querySelector('#text');

rangeControlRef.addEventListener('input', event => {
  textContentRef.style.fontSize = `${event.target.value}px`;
});
