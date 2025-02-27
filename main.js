// Descrizione;
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const divEl = document.querySelector(".display");
const listEl = document.querySelector(".list");
const btnEl = document.querySelector(".btn");
console.log(divEl, listEl, btnEl);

btnEl.addEventListener("click", function () {
  function generateEmail() {
    listEl.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      fetch("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => response.json())
        .then((data) => {
          const email = data.response;
          console.log(email);

          listEl.insertAdjacentHTML("beforeend", `<li>${email}</li>`);
        })
        .catch((error) => console.error("error", error));
    }
  }

  generateEmail();
});
