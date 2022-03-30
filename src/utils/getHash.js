//esta funcion nos servira para generar un "/" a la hora de cambiar de rutas

const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

//esto seria a lo que estamos accediendo con la funcion y necesitamos acceder al numer 1 que seria el id del personaje
//["", "1", ""]

export default getHash;