//importar este regenerator si hay problemas al cargar la pagina
import "regenerator-runtime/runtime";
import router from "./routes";

window.addEventListener("load", router);
window.addEventListener("hashchange", router);