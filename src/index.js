import Game from './game.js'

const { x, y } = {
  x: 50,
  y: 50
}

const game = new Game(x,y,document.getElementById('board'));

document.getElementById('start').addEventListener('click', e => {
  game.run(500);
})

document.getElementById('stop').addEventListener('click', e => {
  clearInterval(game.intId);
})
