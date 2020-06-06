const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');
const Game = require('./game');
const GameView = require('./game_view');

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  const game = new Game();
  new GameView(game, ctx).start();
});
