document.addEventListener('DOMContentLoaded', () => {

    /* ===== MOBILE MENU ===== */
    const hamburger = document.getElementById('hamburger');
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('sidebar');

    function openMenu() {
        hamburger.classList.add('active');
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    hamburger?.addEventListener('click', () => {
        sidebar.classList.contains('active') ? closeMenu() : openMenu();
    });

    overlay?.addEventListener('click', closeMenu);

    document.querySelectorAll('.nav-item, .mobile-brand, .topnav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 980) closeMenu();
        });
    });

    /* ===== SCROLL SPY ===== */
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-30% 0px -65% 0px' });

    sections.forEach(s => observer.observe(s));

});
