import { header } from "./header.js";
header("Faq");

const acc = document.querySelectorAll(".acordeon");

for (const check of acc) {
  check.addEventListener("click", function () {
    this.classList.toggle("active2");
    const desc = this.nextElementSibling;

    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
}
