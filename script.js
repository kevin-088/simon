function calcularTotales() {
    const ids2023 = ["efectivo2023", "inventarios2023", "propiedades2023", "maquinaria2023", "vehiculos2023"];
    let total2023 = ids2023.reduce((total, id) => total + (parseFloat(document.getElementById(id).value) || 0), 0);

    document.getElementById("total2023").innerText = total2023.toFixed(2);

    const ids2024 = ["efectivo2024", "inventarios2024", "propiedades2024", "maquinaria2024", "vehiculos2024"];
    let total2024 = ids2024.reduce((total, id) => total + (parseFloat(document.getElementById(id).value) || 0), 0);

    document.getElementById("total2024").innerText = total2024.toFixed(2);
}
