AOS.init();

// document.getElementById('menu-btn').addEventListener('click', function () {
//     const mobileMenu = document.getElementById('mobile-menu');

//     if (mobileMenu.classList.contains('hidden')) {
//         mobileMenu.classList.remove('hidden');
//         setTimeout(() => {
//             mobileMenu.classList.add('opacity-100', 'scale-y-100');
//         }, 10);
//     } else {
//         mobileMenu.classList.remove('opacity-100', 'scale-y-100');
//         setTimeout(() => {
//             mobileMenu.classList.add('hidden');
//         }, 300);
//     }    
// });

// document.getElementById("chat-btn").addEventListener("click", function() {
//     let phoneNumber = "6281232093905"; 
//     let message = encodeURIComponent("Halo! Saya ingin bertanya.");
//     let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
//     window.open(whatsappURL, "_blank");
// });

// Smooth Scroll untuk semua link di dalam menu
// document.querySelectorAll('.nav-link').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });

//         const mobileMenu = document.getElementById('mobile-menu');
//         if (!mobileMenu.classList.contains('hidden')) {
//             mobileMenu.classList.add('hidden');
//         }
//     });
// });

// document.querySelectorAll('.faq-card').forEach(card => {
//     card.style.perspective = '1000px';
//     let front = card.querySelector('.front');
//     let back = card.querySelector('.back');

//     front.style.position = 'absolute';
//     front.style.width = '100%';
//     front.style.height = '100%';
//     front.style.backfaceVisibility = 'hidden';
//     front.style.transition = 'transform 0.6s';

//     back.style.position = 'absolute';
//     back.style.width = '100%';
//     back.style.height = '100%';
//     back.style.backfaceVisibility = 'hidden';
//     back.style.transition = 'transform 0.6s';
//     back.style.transform = 'rotateY(180deg)';
// });

// function flipCard(element) {
//     let front = element.querySelector('.front');
//     let back = element.querySelector('.back');

//     if (front.style.transform === 'rotateY(180deg)') {
//         front.style.transform = 'rotateY(0deg)';
//         back.style.transform = 'rotateY(180deg)';
//     } else {
//         front.style.transform = 'rotateY(180deg)';
//         back.style.transform = 'rotateY(0deg)';
//     }
// }