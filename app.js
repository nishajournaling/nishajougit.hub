const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
let index = 0;

document.querySelector('.next').addEventListener('click', ()=>{
  index = (index+1) % slideItems.length;
  slides.style.transform = `translateX(${-index * 220}px)`;
});
document.querySelector('.prev').addEventListener('click', ()=>{
  index = (index-1+slideItems.length) % slideItems.length;
  slides.style.transform = `translateX(${-index * 220}px)`;
});

document.getElementById('feedbackForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Terima kasih atas masukan Anda!');
  e.target.reset();
});

document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  window.open('https://wa.me/6281234567890?text=Halo%20Nishnush%20Pastry,%20saya%20mau%20pesan!','_blank');
});
