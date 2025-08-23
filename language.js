// language.js
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentLanguage = document.querySelector('#languageBtn span');

    // Toggle dropdown
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        languageDropdown.classList.add('hidden');
    });

    // Language selection
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            const text = this.textContent;

            // Update the displayed language
            currentLanguage.textContent = text;

            // Load translations
            loadTranslations(lang);
        });
    });

    function loadTranslations(lang) {
        const translations = {
            en: {
                "Crop Growth": "Crop Growth",
                "Fertilizer Guide": "Fertilizer Guide",
                "Scan Fertilizer": "Scan Fertilizer"
            },
            hi: {
                "Crop Growth": "फसल वृद्धि",
                "Fertilizer Guide": "उर्वरक गाइड",
                "Scan Fertilizer": "उर्वरक स्कैन करें"
            },
            ta: {
                "Crop Growth": "பயிர் வளர்ச்சி",
                "Fertilizer Guide": "உர வழிகாட்டி",
                "Scan Fertilizer": "உர ஸ்கேன்"
            },
            te: {
                "Crop Growth": "పంట పెరుగుదల",
                "Fertilizer Guide": "ఎరువులు గైడ్",
                "Scan Fertilizer": "ఎరువులను స్కాన్ చేయండి"
            }
        };

        // Update tab names based on the selected language
        document.querySelectorAll('[data-tabtext]').forEach(el => {
            const key = el.getAttribute('data-tabtext');
            el.textContent = translations[lang][key] || key; // Default to the original text if no translation is found
        });
    }
});
