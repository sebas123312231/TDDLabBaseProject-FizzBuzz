import fizzbuzz from "./fizzbuzz";

const numero = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const resultado = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numeroIngresado = Number.parseInt(numero.value, 10);

  resultado.textContent = fizzbuzz(numeroIngresado);
});
