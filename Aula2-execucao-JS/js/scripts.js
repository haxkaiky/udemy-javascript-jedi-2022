// Declaração de Variáveis
let nome = "Kaiky";
let sobreNome = "Morgado";

console.log("Executando o JS, tudo OK");

// Criando Funções

function exibirNomeConsole() {
    console.log("Nome: " + nome);
}

function exibirNomeCompleto() {
    console.log("Nome completo: " + nome + " " + sobreNome); // Para concatenar duas vezes, é necessário usar a concatenação vázia exemplo (+ nome + "(Essa concatenação no meio)" + sobreNome).
}

function exibirAlert() {
    alert('Você clicou em um botão');
}

// Chamadas de função

exibirNomeConsole();

// exibirNomeCompleto();
