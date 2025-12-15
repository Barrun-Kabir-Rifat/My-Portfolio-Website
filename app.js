// =======================
// PROJECT VIDEO HOVER / TOUCH
// =======================

const videos = document.querySelectorAll('.project-vidbox video');

videos.forEach(video => {
    const hoverSign = video.closest('.project-vidbox')?.querySelector('.hover-sign');

    const playVideo = () => {
        video.play();
        hoverSign?.classList.add('active');
    };

    const pauseVideo = () => {
        video.pause();
        hoverSign?.classList.remove('active');
    };

    // Desktop
    video.addEventListener('mouseenter', playVideo);
    video.addEventListener('mouseleave', pauseVideo);

    // Mobile
    video.addEventListener('touchstart', playVideo);
    video.addEventListener('touchend', pauseVideo);
});

// =======================
// SIDEBAR (DESKTOP)
// =======================

const sideBar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menuIcon?.addEventListener('click', () => {
    sideBar?.classList.remove('close-sidebar');
    sideBar?.classList.add('open-sidebar');
});

closeIcon?.addEventListener('click', () => {
    sideBar?.classList.remove('open-sidebar');
    sideBar?.classList.add('close-sidebar');
});

// =======================
// MOBILE MENU
// =======================

const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
});

// =======================
// EXTERNAL LINKS SAFETY
// =======================

document.querySelectorAll('a[href]').forEach(link => {
    if (!link.getAttribute('href').startsWith('#')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});
