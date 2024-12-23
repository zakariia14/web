const header = document.querySelector('header');
const headerHeight = header.offsetHeight; // Altura del header
const navLinks = document.querySelectorAll('.nav-link');

// Función para manejar el "sticky" del header
function handleStickyHeader() {
    if (window.scrollY > headerHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Actualizar la sección activa mientras se hace scroll
    setActiveLink();
}

// Función para cambiar la clase activa en los enlaces de navegación
function setActiveLink() {
    let currentSection = "";

    // Iterar sobre las secciones para encontrar la que está visible
    document.querySelectorAll('section').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.getAttribute('id');
        }
    });

    // Actualizar la clase active en los enlaces
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Detectar el scroll y aplicar la clase 'sticky'
window.addEventListener('scroll', handleStickyHeader);

// También se puede llamar una vez para asegurar que el primer enlace esté marcado como activo al cargar la página
setActiveLink();

