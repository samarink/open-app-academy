function GameView (game, ctx) {
  this.game = game;
  this.ctx = ctx;
  this.ship = this.game.addShip();
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

GameView.prototype.bindKeyHandlers = function () {
  const ship = this.ship;

  Object.keys(GameView.MOVES).forEach(k => {
    const move = GameView.MOVES[k];
    key(k, () => { ship.power(move) });
  });

  key("space", function () { ship.fireBullet(); });
};

GameView.prototype.start = function () {
  this.bindKeyHandlers();
  let lasttime = 0;

  requestAnimationFrame(this.animate.bind(this));
}

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;

  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;

  // every call to animate requests causes another call to animate
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;
