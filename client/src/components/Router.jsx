import React from "react";
import Index from "./Index";
import Contact from "./Contact";
import TSCS from "./TSCS";
import Error from "./Error";



const routes = {
    "/": () =><Index />,
    "/contact": ()=><Contact />,
    "/thanks": ()=><TSCS />,
    "/error": ()=><Error />,
    "//:id": ({id}) =><Index id={id} />,
};

export default routes;