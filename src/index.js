import Game from './game.js'

const { x, y } = {
  x: 50,
  y: 50
}

const game = new Game(x,y,document.getElementById('board'));

document.getElementById('start').addEventListener('click', e => {
  game.run(5);
})

document.getElementById('stop').addEventListener('click', e => {
  game.stop();
})
