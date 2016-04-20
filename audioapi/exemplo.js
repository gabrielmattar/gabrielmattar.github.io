var AudioContext = window.AudioContext ||
                    window.webkitAudioContext;

var context = new AudioContext();


var musica = context.createBufferSource();
var gain = context.createGain();

var mscbuffer = loadSound('musica.mp3');

musica.buffer = mscbuffer;


musica.connect(gain);
gain.connect(context.destination);

musica.start(0);

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      return buffer;
    });
  }
  request.send();
}
