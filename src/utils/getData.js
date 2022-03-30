//asignamos el valor de la API

const API = "https://rickandmortyapi.com/api/character/"

//funcion para obtener los datos y renderizarlos 

const getData = async (id) => {
    //Si el id existe vamos a retornar el id pedido sino retornara todos los personajes existentes para hacer el render
    const apiUrl = id ? `${API}${id}` : API;
    //fetch
    try {
        const response = await fetch(apiUrl);
        //transformaremos ese response en un objeto json para poder iterarlo
        const data = await response.json();
        return data;
    }//creamos el catch por si se generan errores  
    catch(error){
        console.log("Fetch Error", error);
    };
};

export default getData;