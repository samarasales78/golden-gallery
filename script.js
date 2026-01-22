const drawings = [
  {
    title: "Basílica de Santa Maria della Salute - Veneza, Itália",
    image: "img/arquitetura.jpeg",
    category: "arquitetura",
    year: "2024"
  },
  {
    title: "Lua Inferior Cinco e Muzan Kibutsuji",
    image: "img/demonslayer.jpeg",
    category: "anime",
    year: "2025"
  },
  {
    title: "Carpas (koi) japonesas",
    image: "img/carpas.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "O Estranho Mundo de Jack",
    image: "img/timburton.jpeg",
    category: "ilustracao",
    year: "2025"
  },
  {
    title: "I  will always choose you - Damon Salvatore",
    image: "img/tvd.jpeg",
    category: "ilustracao",
    year: "2024"
  },
  {
    title: "Coliseu - Itália",
    image: "img/arquitetura2.jpeg",
    category: "arquitetura",
    year: "2024"
  },
  {
    title: "El Pilar, Zaragoza - Espanha",
    image: "img/arquiteturaazul.jpeg",
    category: "arquitetura",
    year: "2025"
  },
  {
    title: "Amelie de Xsbel",
    image: "img/amelie.jpeg",
    category: "realismo",
    year: "2024"
  },
  {
    title: "Chama Viva",
    image: "img/capa.jpeg",
    category: "realismo",
    year: "2023"
  },
  {
    title: "Criança com capuz",
    image: "img/baby.jpeg",
    category: "realismo",
    year: "2022"
  },
  {
    title: "Zenitsu Fanart",
    image: "img/zenitsu.jpeg",
    category: "realismo",
    year: "2024"
  },
  {
    title: "Kimi no na wa Fanart",
    image: "img/yourname.jpeg",
    category: "anime",
    year: "2025"
  },
];

/* ELEMENTOS */
const gallery = document.getElementById("gallery");
const filterCategory = document.getElementById("filterCategory");
const filterYear = document.getElementById("filterYear");

/* EMBARALHAR DESENHOS */
/* function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
} */

/* RENDERIZAR GALERIA */
function renderGallery(items) {
  gallery.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("drawing-card");

    card.innerHTML = `
      <div class="drawing-image" style="background-image: url('${item.image}')"></div>
      <span class="drawing-caption">${item.title}</span>
    `;

    gallery.appendChild(card);
  });
}

/* APLICAR FILTROS */
function applyFilters() {
  const category = filterCategory.value;
  const year = filterYear.value;

  const filteredDrawings = drawings.filter(item => {
    return (
      (category === "all" || item.category === category) &&
      (year === "all" || item.year === year)
    );
  });

  renderGallery(filteredDrawings);
}

/* EVENTOS */
filterCategory.addEventListener("change", applyFilters);
filterYear.addEventListener("change", applyFilters);

/* INICIALIZAÇÃO (TODOS */
document.addEventListener("DOMContentLoaded", () => {
  renderGallery(drawings);
});
