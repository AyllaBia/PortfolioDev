// Importando o React
import React from "react";
// Importando o component Home
import Home from "./components/home/home";
// Importando o component Contact
import Contact from "./components/contact/contact";
// Importando o componente Courses
import Courses from "./components/courses/courses";
// Importando os components necessárias da lib react-materialize
import { Container } from "react-materialize";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from "react-router-dom";
import Fotos from "./components/gallery/fotos";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/courses" component={Courses} />
        <Route path="/photos" component={Fotos} />
      </Switch>
    </Container>
  </main>
);

export default Main;
