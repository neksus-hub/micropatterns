const input = document.getElementById("input");
const p = document.getElementById("p");

const inputValue = function () {
  p.textContent = input.value;
  console.log(input.value);
};

const start = function () {
  input.addEventListener("change", () => {
    setTimeout(inputValue, 2000);
  });
};

start();
