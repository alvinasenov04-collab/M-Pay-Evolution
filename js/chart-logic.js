document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('growthChart').getContext('2d');
    
    // Създаваме градиент (лилав пламък под линията)
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(106, 17, 203, 0.5)');
    gradient.addColorStop(1, 'rgba(106, 17, 203, 0)');

    // Данни за графиката
    const data = {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [{
            label: 'Трилиони USD',
            data: [1.5, 2.1, 2.9, 3.8, 4.6, 5.3, 6.1],
            borderColor: '#ffca28', // Златна линия
            backgroundColor: gradient,
            borderWidth: 4,
            fill: true,
            tension: 0.4, // ТОВА прави линията заоблена и "fancy"
            pointBackgroundColor: '#fff',
            pointBorderColor: '#6a11cb',
            pointRadius: 5,
            pointHoverRadius: 10
        }]
    };

    // Настройки на графиката
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#fff', font: { family: 'Poppins', size: 14 } }
                }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#888' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#888' }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    };

    // Инициализиране
    new Chart(ctx, config);
});