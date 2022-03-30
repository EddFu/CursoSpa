const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === "/" ? route : "/:id";
        return validRoute;
    }
    return `/${route}`; //esto es lo que retornaria /about
    // return route; //esto es lo que retornaria /about
};

export default resolveRoutes;