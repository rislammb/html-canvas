const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// // fillRect()
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(170, 10, 150, 100);
// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(10, 120, 150, 100);
// // clearRect()
// ctx.clearRect(15, 15, 140, 90);
// // fillText()
// ctx.font = '30px Verdana';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello world!', 330, 50);
// // strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'green';
// ctx.strokeText('Hello world!', 330, 100);

// // Paths
// // Triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 150);
// ctx.lineTo(50, 50);
// ctx.fillStyle = 'coral';
// ctx.fill();
// //
// ctx.beginPath();
// ctx.moveTo(170, 50);
// ctx.lineTo(120, 150);
// ctx.lineTo(210, 150);
// ctx.closePath();
// ctx.stroke();
// // Rectangle
// ctx.fillStyle = 'teal';
// ctx.beginPath();
// ctx.rect(230, 50, 150, 100);
// ctx.fill();
// // Arc (circles)
// ctx.beginPath();
// centerX = canvas.width / 2;
// centerY = canvas.height / 2;
// // Draw a head
// ctx.fillStyle = '#cde';
// ctx.arc(centerX, centerX, 250, 0, Math.PI * 2);
// ctx.fill();
// // Move to mouth
// ctx.moveTo(centerX + 130, centerY);
// // Draw mouth
// ctx.arc(centerX, centerY, 130, 0, Math.PI, false);
// // Move to left eye
// ctx.moveTo(centerX - 70, centerY - 80);
// // Draw left eye
// ctx.arc(centerX - 100, centerY - 80, 30, 0, Math.PI * 2);
// // Move to right eye
// ctx.moveTo(centerX + 130, centerY - 80);
// // Draw right eye
// ctx.arc(centerX + 100, centerY - 80, 30, 0, Math.PI * 2);

// // Quadratic Curve
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.font = '15px Verdana';
// ctx.strokeText('Hello world!', 30, 68);
// ctx.stroke();

// Animation 1
const purple = {
  x: 300,
  y: 250,
  size: 20,
  dx: 3,
  dy: 2,
  color: 'purple'
};
function drawCircle(x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}
function updatePurple() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle(purple.x, purple.y, purple.size, purple.color);
  // change position
  purple.x += purple.dx;
  purple.y += purple.dy;
  // Detect side wall
  if (purple.x + purple.size > canvas.width || purple.x - purple.size < 0) {
    purple.dx *= -1;
  }
  // Detect top and bottom wall
  if (purple.y + purple.size > canvas.height || purple.y - purple.size < 0) {
    purple.dy *= -1;
  }
  requestAnimationFrame(updatePurple);
}
updatePurple();

const orange = {
  x: 100,
  y: 80,
  size: 20,
  dx: 3,
  dy: -2,
  color: 'orange'
};
function updateOrange() {
  drawCircle(orange.x, orange.y, orange.size, orange.color);
  // change position
  orange.x += orange.dx;
  orange.y += orange.dy;
  // Detect side wall
  if (orange.x + orange.size > canvas.width || orange.x - orange.size < 0) {
    orange.dx *= -1;
  }
  // Detect top and bottom wall
  if (orange.y + orange.size > canvas.height || orange.y - orange.size < 0) {
    orange.dy *= -1;
  }
  requestAnimationFrame(updateOrange);
}
updateOrange();

const blue = {
  x: 180,
  y: 380,
  size: 20,
  dx: 3,
  dy: -2,
  color: 'dodgerBlue'
};
function updateBlue() {
  drawCircle(blue.x, blue.y, blue.size, blue.color);
  // change position
  blue.x += blue.dx;
  blue.y += blue.dy;
  // Detect side wall
  if (blue.x + blue.size > canvas.width || blue.x - blue.size < 0) {
    blue.dx *= -1;
  }
  // Detect top and bottom wall
  if (blue.y + blue.size > canvas.height || blue.y - blue.size < 0) {
    blue.dy *= -1;
  }
  requestAnimationFrame(updateBlue);
}
updateBlue();
