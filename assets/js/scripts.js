document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector("#hero");
  if (heroText) {
    heroText.style.opacity = 0;
    heroText.style.transition = "opacity 2s ease";

    // Gunakan requestAnimationFrame untuk animasi yang lebih smooth
    requestAnimationFrame(function fade() {
      let opacity = parseFloat(heroText.style.opacity);
      if (opacity < 1) {
        opacity += 0.02; // Atur increment untuk kecepatan fade
        heroText.style.opacity = opacity;
        requestAnimationFrame(fade);
      }
    });
  }
});

// Back-to-Top Button dengan Intersection Observer API
const topButton = document.getElementById("back-to-top");
if (topButton) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      topButton.style.display = entry.isIntersecting ? "none" : "block";
    },
    { threshold: 0.1 } // Munculkan tombol ketika 10% viewport terlewati
  );
  observer.observe(document.querySelector("header")); // Observasi header

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.onload = function () {
  const referensiItems = document.querySelectorAll(".sumber-item");
  console.log(`Total referensi items ditemukan: ${referensiItems.length}`);

  referensiItems.forEach((item, index) => {
    item.style.setProperty("--delay", index + 1);
  });

  // Gunakan Intersection Observer untuk animasi yang lebih efisien
  const sources = document.querySelectorAll(".sumber-content");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
        // Hentikan observasi setelah animasi
      }
    });
  });

  sources.forEach((source) => {
    observer.observe(source);
  });
};

const toggleMenu = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const mainContent = document.querySelector(".main-content"); // Sesuaikan class ini

  mobileMenu.classList.toggle("show");
  if (mobileMenu.classList.contains("show")) {
    mainContent.style.marginTop = "60px"; // Menambahkan ruang saat menu terbuka
  } else {
    mainContent.style.marginTop = "0"; // Menghapus ruang saat menu tertutup
  }
};

// Function to adjust mobile menu position based on header height
function adjustMobileMenuPosition() {
  const header = document.querySelector("header");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (header && mobileMenu) {
    const headerHeight = header.offsetHeight;
    mobileMenu.style.marginTop = `${headerHeight}px`;
  }
}

// Adjust mobile menu position on load and on resize
window.addEventListener("load", adjustMobileMenuPosition);
window.addEventListener("resize", adjustMobileMenuPosition);
