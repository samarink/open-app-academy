const View = require('./ttt-view');
const Game = require('../ttt/game');

$(() => {
  const rootEl = $('.ttt');
  const game = new Game();
  new View(game, rootEl);
});
