import { Personagem } from "./personagem.js";

export class Mago extends Personagem{
    elementoMagico
    levelMagico
    inteligencia
    static descricao = 'O mago é implacável!'
    static tipo = 'Mago'

    constructor(nome, level, elementoMagico, levelMagico,inteligencia,descricao){
        super(nome,level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
        this.descricao = descricao

    };

    obterInsignia(){
        if(this.levelMagico >= 5 && this.inteligencia >=5){
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia();
    }
}