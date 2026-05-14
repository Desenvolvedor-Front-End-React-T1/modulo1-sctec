class FormaGeometrica {
    calcularArea() {
        console.log('Método calcularArea precisa ser implementado')
    }

    calcularPerimetro() {
        console.log('Método calcularPerimetro precisa ser implementado')
    }
}

class Retangulo extends FormaGeometrica {
    // atributos
    base = 0 // b
    altura = 0 // h 

    constructor(_base, _altura) {
        super()
        this.base = _base
        this.altura = _altura
    }

    // metodos
    calcularArea() {
        return this.base * this.altura
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura)
    }
    
}

class Circulo extends FormaGeometrica {
    raio = 0

    constructor(_r) {
        super()
        this.raio = _r
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.raio
    }    
}

const meuRetangulo = new Retangulo(5, 9)

console.log(
    meuRetangulo.calcularPerimetro()
)

const circulo1 = new Circulo(3)

console.log(
    circulo1.calcularPerimetro()
)