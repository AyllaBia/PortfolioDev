// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from "react-materialize";
// Importando o componenet UserProfile
import UserProfile from "../user_profile/user_profile";
// Importando o component Experience
import Experience from "../experience/experience";
// Importando a imagem EDUTEC
import edutec from "../../images/edutec.jpg";
// Importando a imagem Astronauta
import astronauta from "../../images/astronauta.jpg";
// Importando a imagem Carro TCC
import tcc from "../../images/tcc.png";
// Importando a imagem Google Glass
import googleGlass from "../../images/googleGlass.png";
// Importando a imagem Redes Sociasi
import redeSociais from "../../images/redesSociais.png";

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">Sobre mim</h5>
      <Card>
        <div>
          <p>
          Meu nome é Aylla Beatriz, tenho 17 anos, atualmente resido em Embu das Artes e estou cursando o 3° do ensino médio técnico em informática. Tenho alguns cursos e projetinhos simples relacionados ao desenvolvimento front-end.  
          Algumas das coisas que mais gosto de fazer é tirar fotos, estudar música e aprender coisas novas.
          </p>
          <br />
        </div>
      </Card>
      <h5 className="subtitle">Projetos</h5>

      {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
      <Experience
        title="EDUTEC"
        description="Site criado para o EDUTEC (Projeto interdiciplinar). A ideia foi desenvolver um site que ajudasse nos estudos nas matéris de coordenadas geográficas e biomas."
        avatar={edutec}
      />

      <Experience
        title="Dev.Blog"
        description="Site criado para explorar as ferramentas de desenvolvimento Web."
        avatar={astronauta}
      />

      <Experience
        title="TCC - Colégio Adventista Unasp"
        description="Site criado para apresentar o TCC (Trabalho de Conclusão de Curso). O projeto consiste em um protótipo de carro inteligente."
        avatar={tcc}
      />

      <Experience
        title="Google Glass"
        description="Site criado a partir do curso de HTML5 da plataforma Curso em Video."
        avatar={googleGlass}
      />

      <Experience
        title="Clone das Redes Sociais"
        description="Site criado para treinar as habilidade em desenvolvimento front-end recriando as redes sociais."
        avatar={redeSociais}
      />
    </Col>
  </Row>
);

export default Home;
