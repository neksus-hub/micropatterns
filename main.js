const input = document.getElementById("input");
const p = document.getElementById("p");

const debounce = (fn, ms) => {
  let timeOut;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeOut);
    timeOut = setTimeout(fnCall, ms);
  };
};

inputValue = debounce(inputValue, 300);

function inputValue() {
  p.textContent = input.value;
  console.log(input.value);
}

input.addEventListener("keyup", inputValue);
