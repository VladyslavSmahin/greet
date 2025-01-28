const greeting = document.querySelector('.greeting');
const mainContent = document.querySelector('.main-content');
const randomButton = document.querySelector('.random-button');
const mainButton = document.querySelector('.button');
const approvalContainer = document.getElementById('approvalContainer');
setTimeout(() => {
    greeting.style.display = 'none';
    mainContent.style.display = 'flex';
}, 3000);

randomButton.addEventListener('mouseenter', () => {
    const randomX = Math.random() * (window.innerWidth - randomButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - randomButton.offsetHeight);
    randomButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

mainButton.addEventListener('click', () => {
    mainContent.style.transition = 'opacity 2s';
    mainContent.style.opacity = '0';

    setTimeout(() => {
        mainContent.style.display = 'none';
        approvalContainer.style.display = 'flex';
        approvalContainer.style.opacity = '0'; // Начальный скрытый статус
        setTimeout(() => {
            approvalContainer.style.transition = 'opacity 2s';
            approvalContainer.style.opacity = '1'; // Плавное появление
        }, 100); // Задержка для того, чтобы transition успел примениться
    }, 2000);
});
