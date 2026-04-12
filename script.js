body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: auto;
    padding: 40px 20px;
    text-align: center;
}

input {
    width: 80%;
    padding: 15px;
    border-radius: 10px;
    border: none;
    margin-bottom: 15px;
    font-size: 16px;
}

button {
    padding: 15px 25px;
    border-radius: 10px;
    border: none;
    background: #10b981;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.result-container {
    margin-top: 30px;
    display: grid;
    gap: 20px;
}

.card {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-radius: 15px;
    text-align: left;
    backdrop-filter: blur(10px);
}

.card h3 {
    margin-top: 0;
    color: #34d399;
}
const API_URL = "https://veltrix-ai-fx5c.onrender.com/analyze";
