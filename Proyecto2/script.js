function calcularPedido() {
    // Precio del tamaño
    let tamano = parseInt(document.getElementById("tamano").value);

    // Ingredientes seleccionados
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    let extras = 0;
    checkboxes.forEach(chk => {
        extras += parseInt(chk.value);
    });

    // Total
    let total = tamano + extras;
    document.getElementById("total").innerText = "Total: $" + total;
}
