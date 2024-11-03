// Simple fade-in effect for hero section text
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector('#hero');
  if (heroText) {
      heroText.style.opacity = 0;
      heroText.style.transition = "opacity 2s ease";
    
      setTimeout(() => {
          heroText.style.opacity = 1;
      }, 500);
  }
});

// JavaScript untuk Back-to-Top Button
window.addEventListener('scroll', function() {
  const topButton = document.getElementById('back-to-top');
  if (topButton) {
      topButton.style.display = window.scrollY > 200 ? 'block' : 'none';
  }
});

if (document.getElementById('back-to-top')) {
  document.getElementById('back-to-top').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

window.onload = function () {
  const referensiItems = document.querySelectorAll(".sumber-item");

  // Log jumlah item untuk memastikan mereka ditemukan
  console.log(`Total referensi items ditemukan: ${referensiItems.length}`);

  referensiItems.forEach((item, index) => {
      item.style.setProperty('--delay', index + 1);
  });

  const sources = document.querySelectorAll('.sumber-content');
  sources.forEach((source, index) => {
      setTimeout(() => {
          source.classList.add('show');
          console.log(`Show class added to element ${index}`); // Log for debugging
      }, index * 500);
  });
};

