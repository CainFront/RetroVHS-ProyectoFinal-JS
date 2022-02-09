/*========================================
         JS HTML PELICULAS
=========================================*/

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

const fetchData = async () => {
  try {
    const res = await fetch("../productos.json");
    const data = await res.json();
    // console.log(data);
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
};

// usamos forEach por el JSON
const pintarCards = (data) => {
  console.log(data);
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.title;
    templateCard.querySelector("p").textContent = "$" + producto.precio;
    templateCard.querySelector("img").setAttribute("src", producto.imagen);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};
