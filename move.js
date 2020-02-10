const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Animayi 2 - Character

const image = document.getElementById('source');

const player = {
  w: 30,
  h: 30,
  x: 20,
  y: 200,
  speed: 4,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWallS();
}
function detectWallS() {
  if (player.x < 0) {
    player.x = 0;
  }
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }
  if (player.y < 0) {
    player.y = 0;
  }
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}
function update() {
  clear();
  drawPlayer();
  newPos();
  requestAnimationFrame(update);
}

function moveRight() {
  player.dx = player.speed;
}
function moveLeft() {
  player.dx = -player.speed;
}
function moveUp() {
  player.dy = -player.speed;
}
function moveDown() {
  player.dy = player.speed;
}

function keyDown(e) {
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
}
function keyUp(e) {
  if (
    e.key === 'ArrowRight' ||
    e.key === 'Right' ||
    e.key === 'ArrowLeft' ||
    e.key === 'Left' ||
    e.key === 'ArrowUp' ||
    e.key === 'Up' ||
    e.key === 'ArrowDown' ||
    e.key === 'Down'
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
