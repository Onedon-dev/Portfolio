// MATRIX STYLE BACKGROUND
(() => {
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;

  const ctx = canvas.getContext('2d');
  let w, h;
  const chars = '01<>/{}[]()#@%&*+-=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let columns = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const fontSize = 14;
    const cols = Math.floor(w / fontSize);
    columns = new Array(cols).fill(0);
  }

  function draw(){
    ctx.fillStyle = 'rgba(5,6,10,0.1)';
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle = '#00e6ff';
    ctx.font = '14px monospace';

    columns.forEach((y,i)=>{
      const text = chars[Math.floor(Math.random()*chars.length)];
      const x = i * 14;
      ctx.fillText(text,x,y);
      columns[i] = y > h && Math.random() > 0.975 ? 0 : y + 14;
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if(!header) return;

  header.style.background =
    window.scrollY > 50
    ? "rgba(5,7,10,0.9)"
    : "transparent";
});

// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', () => {

  // footer year
  document.getElementById('year').textContent =
    new Date().getFullYear();

  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if(menuToggle && nav){
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // Contact form
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    });
  }
});

const orbit = document.querySelector('.orbit');
const tools = document.querySelectorAll('.tool');
const radius = 120; // distance from center

tools.forEach((tool, index) => {
  const angle = (index / tools.length) * (2 * Math.PI);
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  tool.style.transform = `translate(${x + 110}px, ${y + 110}px)`; 
});