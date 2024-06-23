document.addEventListener("DOMContentLoaded", function () {
  const initialSound = document.getElementById("initial-sound");
  const playButton = document.getElementById("play-button");
  const nextButton = document.getElementById("next-button");
  const video = document.getElementById("video");

  // Fungsi untuk memulai pengalaman
  function startExperience() {
    // Memutar video dan suara awal
    video.src += "?autoplay=1"; // Auto-play YouTube video
    initialSound.play();
    playButton.style.display = "none";
    nextButton.style.display = "block"; // Menampilkan tombol "Next" setelah tombol "Play" ditekan

    // Menyembunyikan tombol "Next" saat video selesai diputar
    video.addEventListener("ended", function () {
      nextButton.style.display = "block";
    });
  }

  // Fungsi untuk menampilkan halaman ucapan ulang tahun
  function showBirthdayPage() {
    const initialPage = document.getElementById("initial-page");
    const birthdayPage = document.getElementById("birthday-page");
    const birthdaySound = document.getElementById("birthday-sound");
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.getElementById("progress-container");

    // Menyembunyikan halaman inisial dan menampilkan halaman ulang tahun
    initialPage.style.display = "none";
    birthdayPage.style.display = "block";

    // Memutar suara ucapan ulang tahun
    birthdaySound.play();

    // Menampilkan dan memperbarui progress bar
    progressContainer.style.display = "block";
    birthdaySound.addEventListener("timeupdate", function () {
      const progress =
        (birthdaySound.currentTime / birthdaySound.duration) * 100;
      progressBar.style.width = progress + "%";
    });

    // Menyembunyikan progress bar setelah suara ulang tahun selesai diputar
    birthdaySound.addEventListener("ended", function () {
      progressContainer.style.display = "none";
    });
  }

  // Fungsi untuk memeriksa password
  function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const correctPassword = "4"; // Password yang benar

    if (passwordInput === correctPassword) {
      // Jika password benar, tampilkan halaman utama
      const passwordPage = document.getElementById("password-page");
      const initialPage = document.getElementById("initial-page");
      passwordPage.style.display = "none";
      initialPage.style.display = "block";
    } else {
      // Jika password salah, tampilkan pesan kesalahan
      const passwordError = document.getElementById("password-error");
      passwordError.style.display = "block";
    }
  }

  // Mengaitkan fungsi dengan tombol Submit pada halaman password
  const submitButton = document.querySelector("#password-page button");
  submitButton.addEventListener("click", checkPassword);

  // Mengaitkan fungsi dengan tombol-tombol
  playButton.addEventListener("click", startExperience);
  nextButton.addEventListener("click", showBirthdayPage);
});
