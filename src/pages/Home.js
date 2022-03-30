import getData from "../utils/getData";

//al tener que hacer un llamado a una api se transforma esta funcion a una funcion asincrona

const Home = async () => {
    const Characters = await getData();
    const view = `
    <div class="Characters">
        ${Characters.results.map(character => `
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src= "${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
    `).join("")} 
    </div>
    `;
    return view;
};

export default Home;