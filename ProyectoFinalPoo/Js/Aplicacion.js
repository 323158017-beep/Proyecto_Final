let sala = new SalaHospital(5);

function registrar() {
    try {
        let tipo = document.getElementById("tipo").value;
        let exp = document.getElementById("exp").value;
        let nom = document.getElementById("nom").value;
        let dias = document.getElementById("dias").value;
        let paciente;

        if (tipo == "externo") {
            let tarifa = document.getElementById("tarifa").value;
            paciente = new PacienteExterno(exp, nom, dias, tarifa);
            console.log(paciente)
        } else {
            let costo = document.getElementById("costo").value;
            let insumos = document.getElementById("insumos").value;
            paciente = new PacienteHospitalizado(exp, nom, dias, costo, insumos);
        }

        sala.agregar(paciente);
        alert("Registrado");
    } catch (e) {
        alert("Error: " + e.message);
    }
}

function verLista() {
    let caja = document.getElementById("lista");
    let pacientes = sala.getPacientes();
    let texto = "";

    for (let i = 0; i < pacientes.length; i++) {
        let p = pacientes[i];
        let c = p.calcularCostoTotal();
        texto += p.getNombre() + " - $" + c.total.toFixed(2) + "<br>";
    }

    caja.innerHTML = texto;
}

function verReporte() {
    document.getElementById("reporte").innerText = sala.reporte();
}