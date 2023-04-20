export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    
    constructor(nome, level){
        this.nome = nome
        this.level = level
        

    };

    obterInsignia(){
        if(this.level >= 5){
            return `Implacável ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} Iniciante`
    };

    static  verificarVencedor(per1,per2){
        if(per1.level === per2.level ){
            return "Empate!!!"
        }
        if(per1.level > per2.level){
            return `${per1.constructor.tipo} ${per1.nome} é o vencedor!`
        }

        return `${per2.constructor.tipo} ${per2.nome} é o vencedor!`
    }
};

