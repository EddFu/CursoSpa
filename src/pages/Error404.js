import mortySad from "../img/morty.png"

const Error404 = () => {
    const view = `
        <div class="Error404">
            <h2>Error 404 <br> Pagina no encontrada </h2>
            <img src="${mortySad}" alt="Error 404 imagen">
        </div>
    `;
    return view;
};

export default Error404;