const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}


// modal recherceh 


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
    const recherche = searchInput.value.trim();

    if (recherche !== "") {
        console.log("Recherche :", recherche);
    } else {
        console.log("Champ vide");
    }
});