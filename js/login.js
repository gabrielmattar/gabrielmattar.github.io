var login = document.getElementById('login');
var campologin = document.getElementsByClassName('login');

login.addEventListener('click', function(e) {
    if(window.innerWidth > 860)
      campologin[0].classList.toggle('showup1');
    else
      campologin[0].classList.toggle('showup2');

    console.log("oi");
}, false);
