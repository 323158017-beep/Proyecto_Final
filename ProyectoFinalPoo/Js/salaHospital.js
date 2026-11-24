class SalaHospital {
    #capacidad;
    #pacientes;

    constructor(capacidad) {
        this.#capacidad = capacidad;
        this.#pacientes = [];
    }

    getPacientes() { return this.#pacientes; }

    agregar(p) {
        if (this.#pacientes.length >= this.#capacidad) {
            throw new Error("Sala llena");
        }
        this.#pacientes.push(p);
    }

    reporte() {
        let texto = "";
        let total = 0;

        for (let i = 0; i < this.#pacientes.length; i++) {
            let p = this.#pacientes[i];
            let c = p.calcularCostoTotal();
            texto += p.getNombre() + " - Total: $" + c.total.toFixed(2) + "\n";
            total = total + c.total;
        }

        texto += "INGRESOS: $" + total.toFixed(2);
        return texto;
    }
}