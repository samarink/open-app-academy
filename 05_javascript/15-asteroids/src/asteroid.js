const Util = require('./util');
const MovingObject = require('./moving_object');

const DEFAULTS = {
  COLOR: '#3f3f3f',
  RADIUS: 25,
  SPEED: 4
};

function Asteroid(options) {
  options = options || {};
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function collideWith(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
    return true;
  } else if (otherObject instanceof Bullet) {
    this.remove();
    otherObject.remove();
    return true;
  }
  return false;
};

module.exports = Asteroid;
