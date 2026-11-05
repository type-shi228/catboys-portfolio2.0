document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mainNav = document.getElementById('mainNav');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav a');
    
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    menuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        
        if (mainNav.classList.contains('active')) {
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        formMessage.className = 'form-message';
        formMessage.textContent = '';
        
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        messageInput.classList.remove('error');

        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageInput.classList.add('error');
            isValid = false;
        }

        if (!isValid) {
            formMessage.textContent = 'Пожалуйста, заполните все поля правильно.';
            formMessage.classList.add('error-msg');
            return;
        }

        formMessage.textContent = 'Сообщение успешно отправлено!';
        formMessage.classList.add('success');
        form.reset();

        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 4000);
    });
});