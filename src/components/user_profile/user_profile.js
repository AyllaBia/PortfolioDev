// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.jpg';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img"/>
        </Col>
      </Row>
      <Row className="center-align">
        <h5>Aylla Beatriz</h5>
        <p className="grey darken-2 white-text">Desenvolvedora Front-End</p>
        <br/>
        <p>Email</p>
        <a href="mailto:ayllabeatriz442@gmail.com">ayllabeatriz442@gmail.com</a>
        <p>Telefone</p>
        <a href="tel: 11952965709">(11) 95296-5709</a>
        <br/><br/>
        <a href="https://www.linkedin.com/in/aylla-beatriz-gomes-5603171a1/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="50px"/></a>
        <a href="https://github.com/AyllaBia"><img src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png" height="50px"/></a>
      </Row>
  </Card>
);

export default UserProfile;