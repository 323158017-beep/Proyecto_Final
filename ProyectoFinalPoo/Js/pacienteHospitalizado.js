class PacienteHospitalizado extends Paciente {
    #costoDia;
    #insumos;

    constructor(expediente, nombre, dias, costoDia, insumos) {
        super(expediente, nombre, dias);
        this.setCostoDia(costoDia);
        this.setInsumos(insumos);
    }

    getCostoDia() { return this.#costoDia; }
    setCostoDia(c) {
        if (c < 0) { throw new Error("Costo negativo"); }
        this.#costoDia = Number(c);
    }

    getInsumos() { return this.#insumos; }
    setInsumos(i) {
        if (i < 0) { throw new Error("Insumos negativos"); }
        this.#insumos = Number(i);
    }

    calcularCostoTotal() {
        let subtotal = (this.getDias() * this.#costoDia) + this.#insumos;
        let iva = subtotal * 0.16;
        return { subtotal: subtotal, iva: iva, total: subtotal + iva };
    }
}