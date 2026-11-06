
// Mengambil semua tombol Lihat Detail
const detailButtons = document.querySelectorAll(".btn-detail");

// Menambahkan fungsi klik pada setiap tombol
detailButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const targetPage = button.getAttribute("data-page");
    window.location.href = targetPage;
  });
});
