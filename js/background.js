var servidorDasImagens = '../imgs/',
    todasAsImagens = ['background.jpg',
        'background2.jpg',
        'background3.jpg',
        'background4.png',
        'background5.jpg'];

var atual = 0;
var fundonovo;

var changebackground = setInterval(mudabackground, 9000);

function mudabackground() {
 	atual++;
  atual = (atual+todasAsImagens.length) % todasAsImagens.length;
  fundonovo = servidorDasImagens + todasAsImagens[atual];

  document.body.style.backgroundImage = "url(" + fundonovo + ")";
  console.log(fundonovo);
  //alert(document.body.style.backgroundImage);
}
