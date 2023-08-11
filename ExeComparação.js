function comparar() {
    // Entrada
    const n1 = parseFloat(document.getElementById("n1").value); // Converta o valor para número
    const n2 = parseFloat(document.getElementById("n2").value);
    const opcaoSelecionada = document.getElementById("opcoes").value;

    // Processamento
    let resultado;

    if (opcaoSelecionada === "maior") {
        resultado = n1 > n2 ? n1 : n2;
    } else if (opcaoSelecionada === "menor") {
        resultado = n1 < n2 ? n1 : n2;
    } else if (opcaoSelecionada === "maiorigual") {
        resultado = n1 >= n2 ? n1 : n2;
    } else if (opcaoSelecionada === "menorigual") {
        resultado = n1 <= n2 ? n1 : n2;
    }

    document.getElementById("result").value = resultado;
}
