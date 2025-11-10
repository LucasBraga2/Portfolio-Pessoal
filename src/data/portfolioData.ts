// src/data/portfolioData.ts
import type { Project, Experience, Education } from './types';

export interface Skill {
  name: string;
  icon: string; 
}
import angularLogo from '../assets/logos/angularjs.svg';
import reactLogo from '../assets/logos/react.svg';
import nodeLogo from '../assets/logos/node-js.svg';
import javaLogo from '../assets/logos/java.svg';
import pythonLogo from '../assets/logos/python.png';
import typescriptLogo from '../assets/logos/ts.png';
import javascriptLogo from '../assets/logos/js.svg';
import cLogo from '../assets/logos/c.svg';
import sqlLogo from '../assets/logos/sql.svg';
import powerAppsLogo from '../assets/logos/powerapps.svg';
import powerAutomateLogo from '../assets/logos/powerautomate.svg';


export const projectsData: Project[] = [
    {
        title: "Site de Receitas",
        description: "Site de navegabilidade entre páginas com login que dá acesso a receitas, feito em Html.",
        link: "https://receitas.lucasmineiro.app/",
        status: "Finalizado"
    },
    {
        title: "Site de Geração de tickets",
        description: "Site de preenchimento de um formulário que gera um ticket para um evento, feito em HTML e JS.",
        link: "https://ticket-generator.lucasmineiro.app/",
        status: "Finalizado"
    },
    {
        title: "Age Calculator",
        description: "Calculadora de idade feita em React.",
        link: "https://age-calculator.lucasmineiro.app/",
        status: "Finalizado"
    },
    {
        title: "Sistema de Autenticação e Dashboard de Filmes PostgreSQL",
        description: "Sistema de autenticação que da acesso a uma dashboard com uma lista de filmes, feito em Node e React com um Banco de dados em postgresql.",
        link: "https://cinelistpostgresql.lucasmineiro.app/login",
        status: "Finalizado"
    },
    {
        title: "Sistema de Autenticação e Dashboard de Filmes MongoDB",
        description: "Sistema de autenticação que da acesso a uma dashboard com uma lista de filmes, feito em Node e React com um Banco de dados em Mongo.",
        link: "https://cinelistmongo.lucasmineiro.app/login",
        status: "Finalizado"
    }
    
];

export const skillsData: Skill[] = [
    { name: "TypeScript", icon: typescriptLogo},
    { name: "Node.js", icon: nodeLogo},
    { name: "Python", icon: pythonLogo}, 
    { name: "JavaScript", icon: javascriptLogo},
    { name: "C", icon: cLogo},
    { name: "Java", icon: javaLogo},
    { name: "Angular", icon: angularLogo},
    { name: "React", icon: reactLogo},
    { name: "SQL",  icon: sqlLogo},
    { name: "Power Apps", icon: powerAppsLogo},
    { name: "Power Automate", icon: powerAutomateLogo}
];

export const experienceData: Experience[] = [
    {
        title: "Estágiario",
        company: "Senai Cimatec",
        period: "Ago 2024 - Presente",
        description: "Desenvolvimento e manutenção de aplicativos."
    }
];

export const educationData: Education[] = [
    {
        institution: "Universidade Senai Cimatec",
        course: "Engenharia de Computacão",
        period: "2023 - Presente"
    }
];