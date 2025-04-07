// Definindo classe 
class heroi { 
    constuctor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() { 
        let ataque;
    
        switch (this.tipo)  {
            case 'mago':
                ataque = "magia";
                break
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
            ataque = 'realizou um ataque';                
        } 
        
         console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new heroi ('Vegeta', 40, 'guerreiro');
const heroi2 = new heroi('sungdhoo', 5000, 'mago');
const heroi3 = new heroi('jack', 32, 'monge');
const heroi4 = new heroi('itachi', 25, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();



