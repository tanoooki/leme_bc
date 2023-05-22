// const classe = document.querySelectorAll('.equipe');
// const classeArray = Array.from(classe);

// function ocultar(item) {
//     for(let i=1; i <= classeArray.length; i++){
//         const trocaClasse = document.getElementById("prof-"+ i);

//         if(i === item) {
//             trocaClasse.classList.add('esconder');
//             trocaClasse.classList.remove('aparece');
//     }
//         else {
//             trocaClasse.classList.remove('aparece');
//             trocaClasse.classList.add('esconder');
//         }
// }
// }
// function desocultar(item) {
//     for(let i=1; i <= classeArray.length; i++){
//         const trocaClasse = document.getElementById("prof-"+ i);
//         if(i === item) {
//             trocaClasse.classList.remove('esconder');
//             trocaClasse.classList.add('aparece')
//     }
//         else {
//             trocaClasse.classList.add('aparece');
//             trocaClasse.classList.remove('esconder');
//         }
// }
// }


const curriculo = document.querySelectorAll('.curriculo-geral');
const curriculoArray = Array.from(curriculo);


function toggleAtivo(item){
    const modal = document.getElementById('modal-'+item);
    modal.classList.remove('display_none');
    modal.classList.add('modal');
};

function closeModal(item){
    const modal = document.getElementById('modal-'+item);
    modal.classList.remove('modal');
    modal.classList.add('display_none');
}

