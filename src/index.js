import { Personagem } from "./modules/personagem.js";

// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// };

const personagemLuisa = {
    nome: "Luisa",
    vida: 8,
    mana:10,
    level:3,
    tipo: "Elfo",
};

const personagemPedrinho = new Personagem();

personagemPedrinho.nome = 'Pedrinho';
personagemPedrinho.vida = 7;
personagemPedrinho.mana = 12;
personagemPedrinho.level = 5;
personagemPedrinho.tipo = 'Mago'


const personagemJose = new Personagem();
personagemJose.nome = 'José';
personagemJose.tipo = 'Arqueiro';
personagemJose.level = 3;

console.log(personagemJose.obertInsignia());

