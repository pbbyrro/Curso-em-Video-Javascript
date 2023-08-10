function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12) {
        img.src = 'manhacircle.png';
        document.body.style.background = '#b8a591';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tardecircle.png';
        document.body.style.background = '#a4786e'
    } else {
        img.src = 'noitecircle.png';
        document.body.style.background = '#185b88'
    }

}
