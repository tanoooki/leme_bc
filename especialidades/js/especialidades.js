const especialidades = document.querySelectorAll(".especialidades button");

function ativarEspecialidade(event) {
    const especialidades = event.currentTarget;
    const controls = especialidades.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa");
    especialidades.setAttribute('aria-expanded', ativa);

    console.log(ativa)

}

function eventoEspecialidade(especialidades) {
    especialidades.addEventListener("click", ativarEspecialidade);
}

especialidades.forEach(eventoEspecialidade);

