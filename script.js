let stars = document.getElementById('stars');
let meteorid = document.getElementById('meteorid');
let rocket = document.getElementById('rocket');
let text = document.getElementById('text');
let button = document.getElementById('button');

let targetScroll = 0;
let currentScroll = 0;
let easeFactor = 0.1; // Faktor kelambatan (bisa diatur)

window.addEventListener("scroll", function () {
    targetScroll = window.scrollY;
});

function animate() {
    currentScroll += (targetScroll - currentScroll) * easeFactor; // Lerping

    // Roket bergerak ke atas
    rocket.style.transform = `translateY(-${currentScroll * 0.5}px)`;

    // Meteor jatuh ke bawah
    meteorid.style.transform = `translateY(${currentScroll * 0.7}px)`;

    // Bintang jatuh ke bawah
    stars.style.transform = `translateY(${currentScroll * 0.3}px)`;

    // Batasi gerakan teks agar tidak terlalu turun
    let textTranslate = Math.min(30, currentScroll * 0.5);
    text.style.transform = `translate(-50%, ${textTranslate}px)`;

    // Batasi gerakan tombol agar tetap di bawah teks
    let buttonTranslate = Math.min(50, currentScroll * 0.5);
    button.style.transform = `translate(-50%, ${buttonTranslate + 50}px)`;

    requestAnimationFrame(animate); // Loop animasi agar smooth
}

animate(); // Jalankan animasi
