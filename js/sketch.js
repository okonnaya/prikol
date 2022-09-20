Number.prototype.times = function (cb) {
  var i = -1;

  while (++i < this) {
    cb(i);
  }

  return +this;
};

var wave;

var button;
var playing = false;
var env;

function setup() {
  env = new p5.Envelope();
  env.setADSR(0.05, 0.1, 0.5, 0.5);
  env.setRange(0.8, 0);

  wave = new p5.Oscillator();

  wave.setType("sine");
  wave.start();
  wave.freq(440);
  wave.amp(env);

  button = createButton("play");
  button.mousePressed(toggle);
  button = createButton("главная кнопка");
  button.mousePressed(prikol);
}
// function draw() {
//   if (playing) {
//     background(255, 0, 255);
//   } else {
//     background(51);
//   }
// }

function toggle() {
  env.play();
}
// function prikol() {
//   console.log("Hello world!");
//   // закидываем мою строчку в переменную
//   let str = document.getElementById("love").value;
//   console.log(str);
//   let i = 0;
//   while (i != `${str.length}`) {
//     console.log(`${str[i]} ${str.length}`);
//     i++;
//     a = `${str[i]}`.charCodeAt(0);
//     a = a / 100;
//     // while (a > 4) {
//     //   a = a / 10;
//     // }
//     d = a;
//     s = i / `${str.length}`;
//     r = `${str.length}` / 1;
//     r = s;
//     console.log(a, d, s, r);
//     let envv;
//     envv = new p5.Envelope();
//     envv.setADSR(a, d, s, r);
//     envv.setRange(i, 0);
//     let sound;
//     sound = new p5.Oscillator();
//     sound.setType("sine");
//     sound.start();
//     sound.freq(i * 50);
//     sound.amp(envv);
//     let j;
//     j = 1;
//     envv.play();
//     // while (j != i) {
//     //   envv.play();
//     //   j++;
//     // }
//   }
// }
let envv;
let sound;
function cycle() {
  console.log("cycle");
  if (loopCount > 0) {
    // envv.stop();
    sound.stop();
  }

  console.log(`${str[loopCount]} ${str.length}`);
  // i++;
  a = `${str[loopCount]}`.charCodeAt(0);
  s = loopCount / `${str.length}`;
  freq = 0;
  // prettier-ignore
  (a).times(function () {
    freq += 2;
  });
  console.log(a, s, freq);

  envv = new p5.Envelope();
  envv.setADSR(0, 9, 0, 0);
  envv.setRange(loopCount, 0);
  sound = new p5.Oscillator();
  sound.setType("square");
  sound.start();
  sound.freq(freq);
  sound.amp(envv);
  envv.play();
}

let str;
let loopCount = 0;

function loopByCharacter() {
  console.log("loop", str.length, loopCount);
  if (loopCount < str.length) {
    cycle();
    loopCount += 1;
    setTimeout(loopByCharacter, 1000);
  }
}

function prikol() {
  console.log("Hello world!");
  // закидываем мою строчку в переменную
  str = document.getElementById("love").value;
  console.log(str);

  loopByCharacter();

  // for (var i = 0; i < str.length; i++) {
  //   array[i]
  // }

  // let i = 0;
  // while (i != `${str.length}`) {
  //   console.log(`${str[i]} ${str.length}`);
  //   i++;
  //   a = `${str[i]}`.charCodeAt(0);
  //   s = i / `${str.length}`;
  //   freq = 0;
  //   // prettier-ignore
  //   (a).times(function () {
  //     freq += 2;
  //   });
  //   console.log(a, s, freq);
  //   let envv;
  //   envv = new p5.Envelope();
  //   envv.setADSR(0, 9, 0, 9);
  //   envv.setRange(i, 0);
  //   let sound;
  //   sound = new p5.Oscillator();
  //   sound.setType("square");
  //   sound.start();
  //   sound.freq(freq);
  //   sound.amp(envv);
  //   // let j;
  //   // j = 1;
  //   envv.play();
  //   setTimeout()
  // }
}
