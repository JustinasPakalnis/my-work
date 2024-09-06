import { header } from "./header.js";
header("Pop-Up");

const btn = document.querySelector("#btn");
const modalContent = document.querySelector(".modalContent");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modalContent.classList.add("slideUp");
  setTimeout(() => {
    modalContent.classList.remove("slideUp");
    modal.style.display = "none";
  }, 400);
}
