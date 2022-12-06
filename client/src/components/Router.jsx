import React from "react";
import Index from "./Index";
import Projects from "./Projects";
import Retro from "./Retro";
import Contact from "./Contact";
import TSCS from "./TSCS";
import Error from "./Error";



const routes = {
    "/": () =><Index />,
    "/projects": () =><Projects />,
    "/retro": ()=><Retro />,
    "/contact": ()=><Contact />,
    "/thanks": ()=><TSCS />,
    "/error": ()=><Error />,
    "//:id": ({id}) =><Index id={id} />,
};

export default routes;