import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Characters";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

//aqui estableceremos las rutas que tendra la aplicacion
const routes = {
 "/": Home,
 "/:id": Character,
 "/contact" : "Contact",
}

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    //aqui generamos el template del header
    header.innerHTML = await Header();
    //obtenemos la ruta con su respectivo hash con las funciones creadas en utils
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

};

export default router;