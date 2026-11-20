class Polinomio {
    #terminos;

    constructor(terminos) {
        this.#terminos = terminos;
    }

    derivar() {
        const derivada = [];

        for (let i = 0; i < this.#terminos.length; i++) {
            const coefActual = this.#terminos[i].coeficiente;
            const expActual = this.#terminos[i].exponente;

            // Si el exponente es 0 (constante), su derivada es 0 y se omite
            if (expActual === 0) {
                continue;
            }

            // Regla de la potencia: n * x^(n-1)
            derivada.push({
                coeficiente: coefActual * expActual,
                exponente: expActual - 1
            });
        }

        return derivada;
    }

    // Método para entregar en forma de texto
    obtenerTextoDerivada() {
        const resultado = this.derivar();

        if (resultado.length === 0) {
            return "f'(x) = 0";
        }

        let texto = "f'(x) = ";
        for (let i = 0; i < resultado.length; i++) {
            if (i > 0 && resultado[i].coeficiente >= 0) {
                texto += " + ";
            }
            texto += `${resultado[i].coeficiente}x^${resultado[i].exponente}`;
        }
        return texto;
    }
}


const inputcoef1 = document.getElementById("coef1")
const inputexpo1 = document.getElementById("expo1")

const inputcoef2 = document.getElementById("coef2")
const inputexpo2 = document.getElementById("expo2")

const inputcoef3 = document.getElementById("coef3")
const inputexpo3 = document.getElementById("expo3")

const inputcoef4 = document.getElementById("coef4")
const inputexpo4 = document.getElementById("expo4")

const buttonDerivar = document.getElementById("Derivar")
const arearesultado = document.getElementById("arearesultado")



buttonDerivar.addEventListener("click",function(){
    const datosEntrada = [
        {
            coeficiente:parseInt(inputcoef1.value),
            exponente:parseInt(inputexpo1.value)
        },
        {
             coeficiente:parseInt(inputcoef2.value),
            exponente:parseInt(inputexpo2.value)
        },
        {
             coeficiente:parseInt(inputcoef3.value),
            exponente:parseInt(inputexpo3.value)   
        },
        {
            coeficiente:parseInt(inputcoef4.value),
            exponente:parseInt(inputexpo4.value)   
        }
    ]

    const miEcuacion = new Polinomio(datosEntrada)
    arearesultado.value=miEcuacion.obtenerTextoDerivada()

})