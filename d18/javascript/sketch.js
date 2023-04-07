//REFERENCE CODE ------ https://p5js.org/reference/#/p5.PeakDetect/onPeak

let myFont;
var cnv, soundFile, fft, peakDetect;
var ellipseWidth = 0;
var leftWaveform = [];
var rightWaveform = [];
var waveformLength = 1024;

function preload() {
  soundFile = loadSound('assets/Hip-Hop.mp3');
  myFont = loadFont('assets/Quango-xlVR.otf');
}

function setup() {
  cnv = createCanvas(1000,1000);
  textAlign(CENTER);

  fft = new p5.FFT();
  peakDetect = new p5.PeakDetect();

  setupSound();

  // when a beat is detected, call triggerBeat()
  peakDetect.onPeak(triggerBeat);
}

function draw() {
  background(0);

  

  var waveform = fft.waveform(waveformLength, 'float32');
  var halfWaveformLength = waveformLength / 2;
  leftWaveform = waveform.slice(0, halfWaveformLength);
  rightWaveform = waveform.slice(halfWaveformLength, waveformLength);

  push();
  translate(0, height / 2);
  scale(0.5, 100);
  noFill();
  stroke(255, 0, 0);
  beginShape();
  for (var i = 0; i < leftWaveform.length; i++) {
    var x = map(i, 0, leftWaveform.length - 1, 0, width / 2);
    var y = leftWaveform[i];
    vertex(x, y);
  }
  endShape();
  pop();

  // draw right channel waveform
  push();
  translate(width, height / 2);
  scale(-0.5, 100);
  noFill();
  stroke(0, 255, 0);
  beginShape();
  for (var i = 0; i < rightWaveform.length; i++) {
    var x = map(i, 0, rightWaveform.length - 1, 0, width / 2);
    var y = rightWaveform[i];
    vertex(x, y);
  }
  endShape();
  pop();

  

  var fillColor = lerpColor(color(255, 0, 0), color(0, 255, 0), map(ellipseWidth, 0, 100, 0, 1));
  fill(fillColor);
  textFont(myFont); 
  textSize(100); 
  text('CLICK 2 PLAY!', width/2, 200);

  textSize(400);
  text('I', 520, 600);
  

  fft.analyze();
  peakDetect.update(fft);

  ellipseWidth *= 0.90;
  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);
  
}

// this function is called by peakDetect.onPeak
function triggerBeat() {
  ellipseWidth = 350;
}

// mouseclick starts/stops sound
function setupSound() {
  cnv.mouseClicked( function() {
    if (soundFile.isPlaying() ) {
      soundFile.stop();
    } else {
      soundFile.play();
    }
  });
}