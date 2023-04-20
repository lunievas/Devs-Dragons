import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {

    static tipo = "Arqueiro"
    static descricao =  'Você tem o meu arco!'
    destreza

    constructor(nome,level,destreza,descricao){
        super(nome, level)
        this.destreza = destreza
        this.descricao = descricao
    };

    obterInsignia(){
        if(this.destreza >= 5){
            return `Dominador de flechas`
        }
        return super.obterInsignia();
    };

};