function createCard(title, content) {
    return `
        <div class="card">
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
    `;
}

function renderResult(data) {
    let html = "";

    html += createCard("📦 Summary", data.short_summary || "");
    html += createCard("🧩 Category", data.category || "");

    if (data.scent_family) {
        html += createCard("🌿 Scent Family", data.scent_family);
    }

    if (data.fragrance_notes) {
        const notes = data.fragrance_notes;
        html += createCard(
            "🧪 Notes",
            `
            <strong>Top:</strong> ${(notes.top || []).join(", ")}<br>
            <strong>Heart:</strong> ${(notes.heart || []).join(", ")}<br>
            <strong>Base:</strong> ${(notes.base || []).join(", ")}
            `
        );
    }

    if (data.projection) {
        html += createCard("📡 Projection", data.projection);
    }

    if (data.longevity) {
        html += createCard("⏳ Longevity", data.longevity);
    }

    if (data.target_audience) {
        html += createCard("🎯 Target Audience", data.target_audience);
    }

    if (data.key_benefits) {
        html += createCard(
            "💡 Key Benefits",
            (data.key_benefits || []).join("<br>")
        );
    }

    if (data.long_description) {
        html += createCard("📝 Description", data.long_description);
    }

    document.getElementById("result").innerHTML = html;
}
