// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {return 0;}

  calcularPerimetro() {return 0; }
}

class Circulo extends Figura {
    #radio
  constructor(radio) {
    super("Circulo")
    this.#radio= radio
    this.pi= 3.141516
  }

  calcularArea() {
    super.calcularArea
    this.calcularArea = this.pi* (this.#radio*this.#radio)
    return this.calcularArea
  }

  calcularPerimetro() {
    super.calcularPerimetro
    this.calcularPerimetro = 2*this.pi*this.#radio
    return this.calcularPerimetro
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  #base
  #altura
  constructor(base,altura) {
    super("Rectángulo");
    this.#base = base
    this.#altura = altura

  }

  calcularArea() {
    super.calcularArea
    this.calcularArea = this.#base*this.#altura
    return this.calcularArea    
  }

  calcularPerimetro() {
    super.calcularPerimetro
    this.calcularPerimetro= 2*(this.#base) + 2*(this.#altura)
    return this.calcularPerimetro
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
#base
#altura  

  constructor(base,altura) {
    super("Triangulo")
  this.#base= base
  this.#altura= altura
  }

  calcularArea() {
    super.calcularArea
    this.calcularArea = (this.#base*this.#altura)/2
    return this.calcularArea
  }

  calcularPerimetro() {
   let hipotenusa = Math.sqrt((this.#base * this.#base) + (this.#altura * this.#altura))
return this.#base + this.#altura + hipotenusa
  }
}


// ==========================================
// 4: ZONA DE PRUEBAS
const SelectorFigura = document.getElementById("tipoFigura")
const camposCaptura = document.getElementById("camposCaptura")
const btnCalcular = document.getElementById("btnCalcular")
const areaResultado = document.getElementById("AreaResultado")

SelectorFigura.addEventListener("change", function(){
    const seleccion = SelectorFigura.value

    if(seleccion === "Circulo"){
        camposCaptura.innerHTML = '<label>Radio: <input type="number" id="inputRadio"></label>'
       
    }else{
        camposCaptura.innerHTML = ` 
        <label>Base: <input type="number" id="inputBase"></label>
        <label>Altura: <input type="number" id="inputAltura"></label>
        `

    }

 
})

btnCalcular.addEventListener("click", function(){
          
    const seleccion = SelectorFigura.value
       let mifigura
       
      if(seleccion === "Circulo"){
        const  radio = parseFloat(document.getElementById("inputRadio").value)
          miFigura = new Circulo(radio)
              }
          else if(seleccion === "Rectangulo"){
            const base = parseInt(document.getElementById("inputBase").value)
            const altura = parseInt(document.getElementById("inputAltura").value)
                 miFigura = new Rectangulo(base,altura)
                
                }
        else if(seleccion === "Triangulo"){
            const base = parseInt(document.getElementById("inputBase").value)
            const altura = parseInt(document.getElementById("inputAltura").value)
                 miFigura = new TrianguloRectangulo(base,altura)
                 
              }
        const nombre = miFigura.getNombre()
        const area = miFigura.calcularArea()
        const perimetro = miFigura.calcularPerimetro()
areaResultado.value = "Figura: " + nombre + " tiene un area de: " + area + " y un perimetro de: " + perimetro 

        })
       


