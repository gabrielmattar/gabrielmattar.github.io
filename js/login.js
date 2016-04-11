var login = document.getElementById('login');
var campologin = document.getElementsByClassName('login');

document.addEventListener('click', desaparece, false);
login.addEventListener('click', aparece, false);

function aparece(e) {
    if(window.innerWidth > 860)
      campologin[0].classList.toggle('showup1');
    else
      campologin[0].classList.toggle('showup2');

}

function desaparece(e){
  if(e.target != login){
    if(campologin[0].classList.contains('showup1')){
        campologin[0].classList.toggle('showup1');
    }
    if(campologin[0].classList.contains('showup2')){
        campologin[0].classList.toggle('showup2');
    }
  }
}
