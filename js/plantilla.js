// ============================================
// ESPERAR A QUE EL HEADER ESTÉ CARGADO
// ============================================

function initEverything() {
    console.log('🔄 Inicializando componentes...');
    
    // Verificar si el header ya está cargado
    const header = document.querySelector('header');
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-list');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    // Si no encuentra el header o el menú, reintentar en 200ms
    if (!header || !menuIcon || !navList || !menuOverlay) {
        console.log('⏳ Esperando a que cargue el header...');
        setTimeout(initEverything, 200);
        return;
    }
    
    console.log('✅ Header encontrado, inicializando menú...');
    
    // ========================================
    // MENÚ HAMBURGUESA
    // ========================================
    
    function toggleMenu() {
        console.log('🔄 Toggle menú');
        navList.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    function closeMenu() {
        navList.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Eventos
    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    menuOverlay.addEventListener('click', closeMenu);
    
    // Cerrar al hacer clic en enlaces
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Cerrar al redimensionar a desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    // ========================================
    // EFECTO DE SCROLL PARA EL HEADER
    // ========================================
    
    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verificar al cargar
    
    console.log('🎉 Todo inicializado correctamente');
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM cargado, esperando componentes...');
    setTimeout(initEverything, 300);
});

// Respaldo: si window ya cargó antes
if (document.readyState === 'complete') {
    setTimeout(initEverything, 300);
}