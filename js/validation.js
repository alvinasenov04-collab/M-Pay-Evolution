document.addEventListener("DOMContentLoaded", function() {
    // 1. Намираме формата
    const contactForm = document.getElementById('contactForm');

    // Проверяваме дали изобщо е намерена
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            // ТОВА СПИРА РЕФРЕША НА СТРАНИЦАТА
            e.preventDefault(); 
            e.stopPropagation();

            // 2. Взимаме стойностите В МОМЕНТА на кликането
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            console.log("Валидацията започна за име:", name); // За проверка в F12 Console

            // 3. ПРОВЕРКА ЗА ИМЕ (Поне две имена, без цифри)
            const namePattern = /^[а-яА-Яa-zA-Z]+\s+[а-яА-Яa-zA-Z]+$/;

            if (!namePattern.test(name)) {
                alert("ГРЕШКА: Моля, въведете две имена (Име и Фамилия). Цифри не са позволени!");
                return false;
            }

            // 4. ПРОВЕРКА ЗА ИМЕЙЛ
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("ГРЕШКА: Моля, въведете валиден имейл адрес!");
                return false;
            }

            // 5. ПРОВЕРКА ЗА ТЕМА
            if (!subject || subject === "") {
                alert("ГРЕШКА: Моля, изберете тема!");
                return false;
            }

            // АКО ВСИЧКО Е НАРЕД:
            alert("УСПЕХ! Благодарим Ви, " + name + ". Вашето запитване е получено.");
            contactForm.reset(); // Изчистваме полетата
        });
    } else {
        console.error("Грешка: Формата с ID 'contactForm' не беше намерена!");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.getElementById('customSelect');
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const options = wrapper.querySelectorAll('.custom-option');
    const hiddenInput = document.getElementById('subject');
    const triggerText = trigger.querySelector('span');

    // 1. Отваряне/Затваряне
    trigger.addEventListener('click', function() {
        wrapper.classList.toggle('open');
    });

    // 2. Избор на опция
    options.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const text = this.innerText;

            triggerText.innerText = text; // Сменя текста в кутийката
            hiddenInput.value = value;    // Слага стойността в скритото поле
            wrapper.classList.remove('open'); // Затваря менюто
            
            // Стилизиране на избраното
            trigger.style.borderColor = '#6a11cb'; // Лилаво при избор
        });
    });

    // 3. Затваряне при клик извън менюто
    window.addEventListener('click', function(e) {
        if (!wrapper.contains(e.target)) {
            wrapper.classList.remove('open');
        }
    });
});