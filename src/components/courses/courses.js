// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import {Row, Col} from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile';
// Importando o componente Experiencia
import Experience from "../experience/experience";
// Importando a imagem Linux
import linux from '../../images/courses/linux.png';
// Importando a imgem Ruby
import ruby from '../../images/courses/ruby.png';
// Importando a imagem Arquitetura Ruby
import arquiteturaRuby from '../../images/courses/arquitetura.png';
// Importando a imagem Git e GitHub
import git from '../../images/courses/git.png';
// Importando a imagem Conceito de Responsividade
import conceitos from '../../images/courses/conceitos.png';
// Importando a imagem JavaScript
import javascript from '../../images/courses/javascript.png';
// Importando a imagem Angular
import angular from '../../images/courses/angular.png';
// Importando a imagem Fundação Bradesco
import fundacaoBradesco from '../../images/courses/fundacaoBradesco.png';
// Importanto a imagem Curso em Video
import cursoVideo from '../../images/courses/cursoEmVideo.jpg';
// Importando a imagem Data Tech
import dataTech from '../../images/courses/dataTech.png';
// Importando a imagem Unasp
import unasp from '../../images/courses/unasp.jpg';

const Courses = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>

    <Col m={6} s={12}>

    <Experience 
    title="Linux: A introdução ao sistema operacional"
    company="Digital Inovation One"
    avatar={linux}
    />

    <Experience
    title="Ruby: Introdução a orientação a objetos"
    company="Digital Inovation One"
    avatar={ruby}
    />

    <Experience
    title="Da arquitetura ao Deploy com Ruby"
    company="Digital Inovation One"
    avatar={arquiteturaRuby}
    />

    <Experience
    title="Introdução ao Git e GitHub"
    company="Digital Inovation One"
    avatar={git}
    />

    <Experience
    title="Conceitos de responsividade e experiência do usuário"
    company="Digital Inovation One"
    avatar={conceitos}
    />

    <Experience
    title="Programação para internet com JavaScript"
    company="Digital Inovation One"
    avatar={javascript}
    />

    

    <Experience
    title="Angular para iniciantes"
    company="Centro Universitário Adventista de São Paulo"
    avatar={angular}
    />

    <Experience
    title="Fundamentos de lógica de programação"
    company="Fundação Bradesco"
    avatar={fundacaoBradesco}
    />

    <Experience
    title="Ética no desenvolvimento de sistemas"
    company="Fundação Bradesco"
    avatar={fundacaoBradesco}
    />

    <Experience
    title="Fundamentos de TI: Hardware e software"
    company="Fundação Bradesco"
    avatar={fundacaoBradesco}
    />

    <Experience
    title="Projeto de sistemas de TI"
    company="Fundação Bradesco"
    avatar={fundacaoBradesco}
    />

    <Experience
    title="HTML5"
    company="Curso em Vídeo"
    avatar={cursoVideo}
    />

    <Experience
    title="Introdução à programação Web FullStack"
    company="Data Tech School"
    avatar={dataTech}
    />

    <Experience
    title="Front-End"
    company="Centro Universitário Adventista"
    avatar={unasp}
    />

    <Experience
    title="Introdução ao desenvolvimento web"
    company="Centro Universitário Adventista"
    avatar={unasp}
    />

    <Experience
    title="PF sense firewall"
    company="Centro Universitário Adventista"
    avatar={unasp}
    />

    <Experience
    title="Sistema de gerenciamento de Banco de Dados "
    company="Centro Universitário Adventista"
    avatar={unasp}
    />

    <Experience
    title="UX e UI"
    company="Centro Universitário Adventista"
    avatar={unasp}
    />
  </Col>
</Row>
);
export default Courses;