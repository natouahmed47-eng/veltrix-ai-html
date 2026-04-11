const welcomeButton = document.getElementById('welcomeButton');
const welcomeResponse = document.getElementById('welcomeResponse');

if (welcomeButton && welcomeResponse) {
    welcomeButton.addEventListener('click', () => {
        welcomeResponse.textContent = 'Welcome to Veltrix AI. Your project is ready.';
    });
}
