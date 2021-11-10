// const Rectangulo = class R{

// }
// class Rectangulo{

// }
// console.log(cuadrado)
// function Cuadrado() {}
// console.log(cuadrado,Rectangulo);

// const r = new Rectangulo()

class Chancho {
    propiedad = 'mi propiedad'
    #hambre 
    static estatico = 42
    constructor(estado = 'feliz', hambre = false) {
        this.estado = estado
    }
    hablar() {
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!'}`);
    }
    static comer() {
        console.log(this.estatico, 'estoy comiendo!');
    }
}

Chancho.comer()
const feliz = new Chancho('feliz');
// console.log(feliz.__proto__.hablar)
// feliz.hablar()
const triste = new Chancho('triste');
// triste.hablar()
const nose = new Chancho();
// nose.hablar()

