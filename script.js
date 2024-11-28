const btnMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

btnMostrarProjetos.addEventListener("click", () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}

function esconderBotao(){
    btnMostrarProjetos.classList.add("remover");
}
// Perguntas e respostas
const questions = [
    { question: "Você quer namorar comigo?", yes: "EU TE AMO", no: "Okay!" },

];

let currentQuestion = 0; // Mantém o índice da pergunta atual

// Seleciona os elementos
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');

// Função para atualizar a pergunta e limpar o resultado
function updateQuestion() {
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;
        resultElement.textContent = ''; // Limpa o resultado
    } else {
        questionElement.textContent = "Vamos começar nossa vida juntos";
        yesButton.style.display = 'none'; // Esconde os botões após o fim
        noButton.style.display = 'none';
    }
}

// Funções para as respostas
yesButton.addEventListener('click', () => {
    resultElement.textContent = questions[currentQuestion].yes;
    currentQuestion++;
    setTimeout(updateQuestion, 2000); // Espera 2 segundos antes de atualizar
});

noButton.addEventListener('click', () => {
    resultElement.textContent = questions[currentQuestion].no;
    currentQuestion++;
    setTimeout(updateQuestion, 2000); // Espera 2 segundos antes de atualizar
});

// Inicializa a primeira pergunta
updateQuestion();

