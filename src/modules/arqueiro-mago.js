import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./personagem.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem{
    ladoArqueiro
    ladoMago
    static descricao =  'Detentor de lancas e flechas mágicas!'
    static tipo = "ArqueiroMago"

    constructor(nome,level,destreza,elementoMagico, levelMagico,inteligencia,descricao){
        super(nome,level);
        this.ladoArqueiro = new Arqueiro(nome,level,destreza);
        this.ladoMago = new Mago(nome,level, elementoMagico,levelMagico,inteligencia);
        this.descricao = descricao

    };

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    };

}