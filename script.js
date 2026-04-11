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
            body: JSON.stringify({ title: userInput })
        });

        if (!response.ok) {
            throw new Error('The server could not process the request.');
        }

        const data = await response.json();
        const title = typeof data.title === 'string' ? data.title.trim() : '';
        const description = typeof data.description === 'string' ? data.description.trim() : '';
        const fallback = typeof data.result === 'string' ? data.result.trim() : '';

        if (!title && !description && !fallback) {
            throw new Error('No result was returned by the AI service.');
        }

        if (description) {
            const heading = title ? `<h3>${escapeHtml(title)}</h3>` : '';
            welcomeResponse.innerHTML = `${heading}${description}`;
            return;
        }

        welcomeResponse.textContent = fallback || title;
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

function escapeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value;
    return div.innerHTML;
}
