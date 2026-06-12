// ========== INICIALIZAÇÃO DO AOS ==========
AOS.init({
    duration: 1000,
    once: true,
    offset: 120,
    easing: 'ease-out-cubic',
    delay: 0,
    disable: false,
    startEvent: 'DOMContentLoaded',
});

// ========== BOTÃO VOLTAR AO TOPO ==========
const btnTopo = document.getElementById('btnTopo');

if(btnTopo) {
    btnTopo.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== EFEITO DE PARALLAX SUTIL ==========
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.animated-bg');
    if(hero) {
        let opacity = 1 - (window.scrollY / 700);
        if(opacity < 0) opacity = 0;
        if(opacity > 1) opacity = 1;
        hero.style.opacity = opacity;
    }
});

// ========== OBSERVADOR PARA ANIMAÇÕES ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-on-scroll').forEach(el => {
    observer.observe(el);
});

// ========== LOG DE INSTRUÇÕES ==========
console.log('✅ Site Dark Mode carregado com sucesso!');
console.log('📝 Personalização:');
console.log('1️⃣ Imagens: substitua os src nos ids do index.html');
console.log('2️⃣ Versículos: cards com fundo branco, texto preto e borda preta');
console.log('3️⃣ Cores: tudo escuro, sem degradê, sem rosa/verde/marrom');