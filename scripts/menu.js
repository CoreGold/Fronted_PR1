// Burger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerNav = document.getElementById('burgerNav');
    const burgerOverlay = document.getElementById('burgerOverlay');
    const burgerClose = document.getElementById('burgerClose');
    const burgerLinks = document.querySelectorAll('.burger-nav__link');
    
    // Функция открытия меню
    function openBurgerMenu() {
        burgerMenu.classList.add('active');
        burgerNav.classList.add('active');
        burgerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    }
    
    // Функция закрытия меню
    function closeBurgerMenu() {
        burgerMenu.classList.remove('active');
        burgerNav.classList.remove('active');
        burgerOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Разблокируем скролл страницы
    }
    
    // Открытие меню при клике на бургер
    burgerMenu.addEventListener('click', openBurgerMenu);
    
    // Закрытие меню при клике на крестик
    burgerClose.addEventListener('click', closeBurgerMenu);
    
    // Закрытие меню при клике на затемненную область
    burgerOverlay.addEventListener('click', closeBurgerMenu);
    
    // Закрытие меню при клике на ссылку в меню
    burgerLinks.forEach(link => {
        link.addEventListener('click', closeBurgerMenu);
    });
    
    // Закрытие меню при нажатии клавиши Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && burgerNav.classList.contains('active')) {
            closeBurgerMenu();
        }
    });
    
    // Адаптация для изменения размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && burgerNav.classList.contains('active')) {
            closeBurgerMenu();
        }
    });
});