import { Mago } from "./modules/mago.js";
import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoAntonio = new Mago('Antonio', 4,'fogo',4,3);
const magaJulia = new Mago('Julia', 8,'gelo',7,10);
const arqLuisa = new Arqueiro('Luisa',10, 7);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, "ar", 4,8);

const personagens = [magoAntonio,magaJulia,arqLuisa, arqueiroMagoChico];


new PersonagemView(personagens).render();

