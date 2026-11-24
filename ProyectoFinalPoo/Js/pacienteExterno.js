class PacienteExterno extends Paciente {
    #tarifa;

    constructor(expediente, nombre, dias, tarifa) {
        super(expediente, nombre, dias);
        this.setTarifa(tarifa);
    }

    getTarifa() { return this.#tarifa; }
    setTarifa(t) {
        if (t < 0) { throw new Error("Tarifa negativa"); }
        this.#tarifa = Number(t);
    }

    calcularCostoTotal() {
        let subtotal = this.#tarifa;
        let iva = subtotal * 0.16;
        return { subtotal: subtotal, iva: iva, total: subtotal + iva };
    }
}