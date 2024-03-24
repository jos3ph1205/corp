let mobileMenu = document.querySelector('.mob-menu');

const menuToggleButton = document.querySelectorAll('.menu-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
        mobileMenu.classList.toggle('show');
    })
})

window.addEventListener('resize', e => {
    if (window.innerWidth > 600) {
        mobileMenu.classList.remove('show');
    }
});

console.log('connected');