document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('trendsChart').getContext('2d');

    const data = {
        labels: ['NFC (Apple/Google)', 'QR Codes', 'Crypto Payments', 'Others'],
        datasets: [{
            data: [55, 25, 15, 5],
            backgroundColor: [
                '#6a11cb', // Лилаво
                '#ffca28', // Златно
                '#2575fc', // Синьо
                '#333333'  // Тъмно сиво
            ],
            borderColor: '#050505',
            borderWidth: 5,
            hoverOffset: 20 // Картата "изскача" при посочване
        }]
    };

    const config = {
        type: 'doughnut', // Тип "Поничка"
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%', // Прави дупката в средата по-голяма за стил
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#fff',
                        padding: 20,
                        font: { family: 'Poppins', size: 12, weight: '600' }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2500
            }
        }
    };

    new Chart(ctx, config);
});