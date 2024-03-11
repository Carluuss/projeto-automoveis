
window.addEventListener("scroll", function(){
    let header = document.querySelector('header');
    header.classList.toggle('rolagem',window.scrollY > 500);
})

function alterarCor (imagem) {
    document.getElementById("carro").src =  imagem;
}

function alterarCor2 (imagem) {
    document.getElementById("carro2").src =  imagem;
}

function menuAparecer () {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}
