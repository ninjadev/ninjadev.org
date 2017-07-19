const canvases = [];
for(let i = 0; i < 4; i++) {
  const canvas = document.createElement('canvas');
  render(canvas, i);
  canvas.classList.add('canvas-' + i);
  canvases.push(canvas);
}

function render(canvas, size) {
  const ctx = canvas.getContext('2d');
  const bleed = 5;
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = 400 + bleed * 2 * window.devicePixelRatio;
  ctx.fillStyle = 'white';

  ctx.beginPath();
  for(let i = 0; i < window.innerWidth / 40 | 0; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const radius = 1 + size / 4;
    ctx.moveTo(x, y);
    ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
  }
  ctx.fill();

  ctx.drawImage(canvas, 0, canvas.height / 2 - bleed);
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header'); 
  const overlay = document.querySelector('.header .overlay'); 
  for(let i = 0; i < canvases.length; i++) {
    header.insertBefore(canvases[i], overlay);
  }
});

window.addEventListener('resize', () => {
  for(let i = 0; i < canvases.length; i++) {
    render(canvases[i], i);
  }
});
