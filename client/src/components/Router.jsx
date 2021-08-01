import React from "react";
import Index from "./Index";
import Projects from "./Projects";
import Retro from "./Retro";
import Contact from "./Contact";
import TSCS from "./TSCS";



const routes = {
    "/": () =><Index />,
    "/projects": () =><Projects />,
    "/retro": ()=><Retro />,
    "/contact": ()=><Contact />,
    "/thanks": ()=><TSCS />,
    "//:id": ({id}) =><Index id={id} />,
};

export default routes;