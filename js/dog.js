import { header } from "./header.js";
header("Dog");
const inputDOM = document.querySelector("input");
const btnPhoto = document.querySelector(".getPhotoBtn");
const btnBreeds = document.querySelector(".getDogBtn");
const errorDom = document.querySelector(".error");
btnPhoto.addEventListener("click", getDog);

function getDog() {
  const inputVal = inputDOM.value.toLocaleLowerCase();
  console.log(inputVal);

  const url = `https://dog.ceo/api/breed/${inputVal}/images/random`;
  async function getImage() {
    try {
      const response = await fetch(url);
      console.log(response);

      if (!response.ok) {
        throw new Error("ivyko klaida");
      }
      const imgJson = await response.json();
      console.log(imgJson);
      const image = imgJson.message;
      console.log(image);

      const img = document.createElement("img");
      img.src = image;

      document.querySelector(".dogPhotos").appendChild(img);
    } catch (error) {
      console.error("Sudas:", error.message);
      errorDom.style.display = "block";
      errorDom.textContent = "sudas viens du trys" + error.message;
      setTimeout(() => {
        errorDom.style.display = "none";
      }, 2000);
    }
  }
  getImage();
}
