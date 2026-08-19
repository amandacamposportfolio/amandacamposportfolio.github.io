// Menu responsivo
        document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
            document.getElementById('nav-menu').classList.toggle('show');
        });
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('nav-menu').classList.remove('show');
            });
        });
        document.addEventListener('click', function(event) {
            const nav = document.getElementById('nav-menu');
            const toggle = document.getElementById('mobile-menu-toggle');
            if (nav.classList.contains('show') && !nav.contains(event.target) && !toggle.contains(event.target)) {
                nav.classList.remove('show');
            }
        });
