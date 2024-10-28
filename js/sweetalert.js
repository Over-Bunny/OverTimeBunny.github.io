document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.blur-background');
    const closeButton = document.querySelector('.close-btn');
    const clock = document.querySelector('.clock-wrapper .clock');
    let timeLeft = 15;

    // Show the modal if it's an article page
    if (modal && document.querySelector('article.post-content')) {
        modal.classList.add('active');
    }

    // Countdown timer
    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            modal.classList.remove('active');
        } else {
            clock.textContent = `${timeLeft}秒后自动关闭`;
            timeLeft--;
        }
    }, 1000);

    // Close the modal when the close button is clicked
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.classList.remove('active');
            clearInterval(countdown);
        });
    }
});
