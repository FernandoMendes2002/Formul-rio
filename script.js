const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const form = document.getElementById('form-campos');
let formEValido = false;

function validaCampo(campoA, campoB) {
    let numeroA = Number(campoA.value);
    let numeroB = Number(campoB.value);
    return numeroB > numeroA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const mensagemSucesso = 'Acertou! Parabéns!';
    const mensagemErro = 'Errou, Tente Novamente!';
    const formEValido = validaCampo(campoA, campoB);

    if (formEValido) {
        alert(mensagemSucesso);
    } 
    else {
        alert(mensagemErro);
    }
});

