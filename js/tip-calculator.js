export function tipCalculator() {
  const word = document.querySelector("input");
  const button = document.querySelector(".btn");
  const resultTip = document.querySelector(".tip");
  const resultTotal = document.querySelector(".total");
  const tipValue = document.querySelector("#tipAmount");
  button.addEventListener("click", tipCalculator);
  let bill = word.value;
  const tip = tipValue.value;
  console.log(bill);
  console.log(tip);
  resultTip.innerHTML = "Tip €" + (bill * (tip / 100)).toFixed(2);
  resultTotal.innerHTML =
    "Total €" + (bill * (tip / 100) + parseInt(bill)).toFixed(2);
}
