class Paciente {
    #expediente;
    #nombre;
    #dias;

    constructor(expediente, nombre, dias) {
        this.setExpediente(expediente);
        this.setNombre(nombre);
        this.setDias(dias);
    }

    getExpediente() { return this.#expediente; }
    setExpediente(e) {
        if (e == "") { throw new Error("Expediente vacio"); }
        this.#expediente = e;
    }

    getNombre() { return this.#nombre; }
    setNombre(n) {
        if (n == "") { throw new Error("Nombre vacio"); }
        this.#nombre = n;
    }

    getDias() { return this.#dias; }
    setDias(d) {
        if (d < 0) { throw new Error("Dias negativos"); }
        this.#dias = Number(d);
    }

    calcularCostoTotal() {
        throw new Error("Falta implementar");
    }
}