const img = document.querySelectorAll('.galeriaImagens img');
const imgArray = Array.from(img);

function toggleAtivo(item){

    for(let i=1; i <= imgArray.length; i++) {
        const imgClicked = document.getElementById("gallery-"+ i);
        if(i === item) {
            imgClicked.classList.add('ativo');
        }
        else{
            imgClicked.classList.remove('ativo');
        }
    }
    const imagemSelecionada = document.getElementById("galeria-"+item);
    for(let y=1; y <= imgArray.length; y++){
        const capivara = document.getElementById("galeria-"+y);
        if(y === item) {
            capivara.classList.remove('display_none');
        }
        else {
            capivara.classList.add('display_none');
        }
    }
    const modal = document.getElementById('modal');
    modal.classList.remove('display_none');
    modal.classList.add('modal');
};

function closeModal(){
    const modal = document.getElementById('modal');
    modal.classList.remove('modal');
    modal.classList.add('display_none');
}