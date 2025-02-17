AOS.init();

document.getElementById('menu-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');

    // Animasi slide down & fade in
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('opacity-100', 'scale-y-100');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('opacity-100', 'scale-y-100');
    }
});

document.getElementById('whatsapp-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let text = `Halo, saya ${name}!\n${email}\n${message}`;

    let whatsappURL = `https://wa.me/6281232093905?text=${encodeURIComponent(text)}`;

    // Arahkan ke WhatsApp
    window.open(whatsappURL, '_blank');
});

// Smooth Scroll untuk semua link di dalam menu
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });

        // Tutup menu setelah klik (hanya di mobile)
        if (window.innerWidth < 768) {
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});
// function fadeIn(element, duration) {
//     let opacity = 0;
//     element.style.opacity = opacity;
//     const interval = 16;
//     const step = interval / duration;
//     function animate() {
//         opacity += step;
//         if (opacity <= 1) {
//             element.style.opacity = opacity;
//             requestAnimationFrame(animate);
//         }
//     }
//     animate();
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const welcomeElement = document.getElementById("home");
//     fadeIn(welcomeElement, 1000);
//     setTimeout(() => fadeIn(skillsElement, 1000), 500);
// });