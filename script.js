const analyzeButton = document.getElementById('analyzeButton');
const productInput = document.getElementById('productInput');
const welcomeResponse = document.getElementById('welcomeResponse');

const API_BASE_URL = window.location.hostname.endsWith('github.io')
    ? 'https://veltrix-ai-fx5c.onrender.com'
    : '';

async function analyzeProduct() {
    if (!analyzeButton || !productInput || !welcomeResponse) {
        return;
    }

    const userInput = productInput.value.trim();

    if (!userInput) {
        welcomeResponse.textContent = 'Please enter a product or idea first.';
        productInput.focus();
        return;
    }

    analyzeButton.disabled = true;
    welcomeResponse.textContent = 'Analyzing...';

    try {
        const response = await fetch(`${API_BASE_URL}/api/optimize-product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product: userInput })
        });

        if (!response.ok) {
            throw new Error('The server could not process the request.');
        }

        const data = await response.json();
        const resultText = typeof data.result === 'string' ? data.result.trim() : '';

        if (!resultText) {
            throw new Error('No result was returned by the AI service.');
        }

        welcomeResponse.textContent = resultText;
    } catch (error) {
        welcomeResponse.textContent = 'Something went wrong while analyzing your idea. Please try again.';
        console.error(error);
    } finally {
        analyzeButton.disabled = false;
    }
}

if (analyzeButton) {
    analyzeButton.addEventListener('click', analyzeProduct);
}

if (productInput) {
    productInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            analyzeProduct();
        }
    });
}
