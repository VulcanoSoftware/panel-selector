document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const toggleIcon = document.getElementById('toggleIcon');
    
    themeToggle.addEventListener('click', function() {
        this.classList.toggle('dark');
        
        if (html.classList.contains('dark-theme')) {
            html.classList.remove('dark-theme');
            html.classList.add('light-theme');
            toggleIcon.src = 'sun.png';
            toggleIcon.alt = 'Dag';
        } else {
            html.classList.remove('light-theme');
            html.classList.add('dark-theme');
            toggleIcon.src = 'moon.png';
            toggleIcon.alt = 'Nacht';
        }
    });
}); 