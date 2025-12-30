/**
 * Portfolio Sacha RUFFINO - Concepteur Mécanique
 * JavaScript pour interactivité et animations
 */

// ========================================
// 1. NAVIGATION
// ========================================

// Gestion du menu mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animation du burger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
}

// Fermer le menu mobile au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
});

// Navigation active sur scroll
function setActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Changement d'apparence de la navbar au scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// ========================================
// 2. SCROLL TO TOP
// ========================================

const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// 3. SCROLL ANIMATIONS
// ========================================

// Intersection Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animation des barres de compétences
            if (entry.target.classList.contains('skill-progress')) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
            }
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.fade-in, .slide-up, .skill-progress').forEach(el => {
    observer.observe(el);
});

// ========================================
// 4. SKILLS BARS ANIMATION
// ========================================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        // L'animation est déclenchée par l'Intersection Observer ci-dessus
    });
}

// Appel initial
animateSkillBars();

// ========================================
// 5. CONTACT FORM
// ========================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Créer le lien mailto
        const mailtoLink = `mailto:sacha.ruffino@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Ouvrir le client mail
        window.location.href = mailtoLink;
        
        // Optionnel : Afficher un message de confirmation
        alert('Votre client mail va s\'ouvrir avec le message pré-rempli. Veuillez l\'envoyer depuis votre application mail.');
    });
}

// ========================================
// 6. LIGHTBOX GALERIE
// ========================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// Ouvrir la lightbox
function openLightbox(imageSrc, caption) {
    if (lightbox && lightboxImg) {
        lightbox.classList.add('active');
        lightboxImg.src = imageSrc;
        lightboxCaption.textContent = caption || '';
        document.body.style.overflow = 'hidden';
    }
}

// Fermer la lightbox
function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Événements lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Échap pour fermer
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ========================================
// GALERIES DE PROJETS
// ========================================

// ========================================
// GALERIES DE PROJETS
// ========================================

/**
 * GESTION SIMPLIFIÉE DES GALERIES
 * 
 * Les images des galeries sont maintenant gérées dans le fichier :
 * js/gallery-config.js
 * 
 * Pour modifier les images, éditez le fichier gallery-config.js
 * au lieu de modifier ce fichier.
 * 
 * Cela permet de :
 * - Ajouter/retirer des images facilement
 * - Réorganiser l'ordre des images
 * - Créer de nouvelles galeries
 * - Sans toucher au code JavaScript
 */

// Utiliser la configuration externe si disponible, sinon fallback
const projectGalleries = typeof GALLERY_CONFIG !== 'undefined' ? GALLERY_CONFIG : {
    'goupil4000': [
        { src: 'images/projects/goupil4000/goupil-4000-vue1.png', caption: 'GOUPIL 4000 - Vue d\'ensemble 3D' },
        { src: 'images/projects/goupil4000/goupil-4000-vue2.png', caption: 'GOUPIL 4000 - Vue de détail' },
        { src: 'images/projects/goupil4000/goupil-4000-photo2.jpg', caption: 'GOUPIL 4000 - Photo réelle' },
        { src: 'images/projects/goupil4000/broche-detail.png', caption: 'Broche avec changeur d\'outil automatique' },
        { src: 'images/projects/goupil4000/architecture-vue.png', caption: 'Architecture technique' },
        { src: 'images/projects/goupil4000/simulation-fem.png', caption: 'Simulation FEM - Analyse des contraintes' },
        { src: 'images/projects/goupil4000/analyse-deformation.png', caption: 'Analyse des déformations' },
        { src: 'images/projects/goupil4000/cas-chargement.png', caption: 'Cas de chargement' },
        { src: 'images/projects/goupil4000/schema-electrique.png', caption: 'Schéma électrique complet' },
        { src: 'images/projects/goupil4000/logiciel-pilotage.png', caption: 'Logiciel de pilotage GoupilSoftV0' },
        { src: 'images/projects/goupil4000/optimisation-topo.png', caption: 'Optimisation topologique' },
        { src: 'images/projects/goupil4000/gantt-planning.png', caption: 'Planning projet Gantt' }
    ],
    'robot': [
        { src: 'images/projects/robot-marcheur/robot-vue1.png', caption: 'Robot Marcheur Fourcade - Vue principale' },
        { src: 'images/projects/robot-marcheur/robot-vue2.png', caption: 'Robot Marcheur Fourcade - Vue de côté' },
        { src: 'images/projects/robot-marcheur/robot-fourcade-vue1.png', caption: 'Projet Fourcade - Vue d\'ensemble' },
        { src: 'images/projects/robot-marcheur/robot-fourcade-vue2.png', caption: 'Projet Fourcade - Détails mécaniques' },
        { src: 'images/projects/robot-marcheur/robot-fourcade-vue3.png', caption: 'Projet Fourcade - Montage final' }
    ],
    'goupil3000': [
        { src: 'images/projects/goupil3000/goupil-3000-photo1.jpg', caption: 'GOUPIL 3000 - Première version CNC' }
    ]
};

let currentGallery = [];
let currentImageIndex = 0;

// Boutons galerie
document.querySelectorAll('.btn-gallery-compact').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = btn.getAttribute('data-project');
        
        if (GALLERY_CONFIG[projectId]) {
            currentGallery = GALLERY_CONFIG[projectId];
            currentImageIndex = 0;
            showGalleryImage(0);
        }
    });
});

// Fonction pour afficher une image de la galerie
function showGalleryImage(index) {
    if (currentGallery.length === 0) return;
    
    // Boucler l'index
    if (index < 0) index = currentGallery.length - 1;
    if (index >= currentGallery.length) index = 0;
    
    currentImageIndex = index;
    const image = currentGallery[index];
    
    openLightbox(image.src, `${image.caption} (${index + 1}/${currentGallery.length})`);
    
    // Ajouter les boutons de navigation si plusieurs images
    if (currentGallery.length > 1 && lightbox) {
        addGalleryNavigation();
    }
}

// Ajouter la navigation de galerie
function addGalleryNavigation() {
    // Supprimer les anciens boutons s'ils existent
    const oldPrev = lightbox.querySelector('.lightbox-prev');
    const oldNext = lightbox.querySelector('.lightbox-next');
    if (oldPrev) oldPrev.remove();
    if (oldNext) oldNext.remove();
    
    // Créer les boutons
    const prevBtn = document.createElement('button');
    prevBtn.className = 'lightbox-prev';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.onclick = (e) => {
        e.stopPropagation();
        showGalleryImage(currentImageIndex - 1);
    };
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'lightbox-next';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.onclick = (e) => {
        e.stopPropagation();
        showGalleryImage(currentImageIndex + 1);
    };
    
    lightbox.appendChild(prevBtn);
    lightbox.appendChild(nextBtn);
}

// Navigation clavier dans la galerie
document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active') && currentGallery.length > 1) {
        if (e.key === 'ArrowLeft') {
            showGalleryImage(currentImageIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showGalleryImage(currentImageIndex + 1);
        }
    }
});

// Clic sur les images de projets
document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
    });
});

// ========================================
// 7. SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ne pas empêcher le comportement par défaut pour les liens vides
        if (href === '#' || !href) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 70; // Hauteur de la navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 8. PARALLAX EFFECT
// ========================================

function parallaxEffect() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}

// Throttle pour meilleures performances
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
});

// ========================================
// 9. TYPING EFFECT (Optionnel)
// ========================================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Exemple d'utilisation (désactivé par défaut)
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// }

// ========================================
// 10. COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Animer les statistiques du hero
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace('+', ''));
                animateCounter(stat, number);
            });
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ========================================
// 11. LOADING ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animer les éléments du hero
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// ========================================
// 12. RESPONSIVE IMAGES
// ========================================

// Lazy loading pour les images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// 13. UTILS
// ========================================

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================================
// 14. DETECT MOBILE
// ========================================

function isMobile() {
    return window.innerWidth <= 768;
}

// Adapter les comportements au mobile
window.addEventListener('resize', debounce(() => {
    if (isMobile()) {
        // Comportements spécifiques mobile
        console.log('Mobile view');
    } else {
        // Comportements desktop
        console.log('Desktop view');
    }
}, 250));

// ========================================
// 15. CONSOLE MESSAGE
// ========================================

console.log('%c👋 Bienvenue sur mon portfolio !', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cSacha RUFFINO - Concepteur Mécanique', 'font-size: 14px; color: #64748b;');
console.log('%cVous cherchez quelque chose ? N\'hésitez pas à me contacter !', 'font-size: 12px; color: #94a3b8;');
console.log('%c📧 sacha.ruffino@gmail.com', 'font-size: 12px; color: #0891b2;');

// ========================================
// 16. EASTER EGG (Optionnel)
// ========================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        console.log('🎮 Konami Code activé ! Vous avez trouvé l\'easter egg ! 🚀');
        document.body.style.animation = 'rainbow 2s infinite';
    }
});

// Animation rainbow (pour l'easter egg)
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// 17. PERFORMANCE MONITORING
// ========================================

// Mesurer les performances de chargement
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⏱️ Temps de chargement de la page : ${pageLoadTime}ms`);
        }, 0);
    });
}

// ========================================
// FIN DU FICHIER
// ========================================

console.log('✅ JavaScript chargé avec succès !');