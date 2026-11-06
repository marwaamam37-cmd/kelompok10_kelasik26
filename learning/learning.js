
// Mengambil semua tombol Download PDF
const downloadButtons = document.querySelectorAll(".download-button");

// Menambahkan fungsi klik pada setiap tombol
downloadButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Mengambil lokasi file PDF
    const filePath = button.getAttribute("data-file");

    // Membuat elemen link untuk mengunduh PDF
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "";

    // Menjalankan proses download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
});
