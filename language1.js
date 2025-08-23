// language.js

const translations = {
    'en': {
        'Crop Growth': 'Crop Growth',
        'Fertilizer Guide': 'Fertilizer Guide',
        'Scan Fertilizer': 'Scan Fertilizer',
        'Select Crop:': 'Select Crop:',
        'Select Growth Stage:': 'Select Growth Stage:',
        'Show Information': 'Show Information',
        'Scan Fertilizer Label': 'Scan Fertilizer Label',
        'Click to scan fertilizer label': 'Click to scan fertilizer label',
        'or upload an image': 'or upload an image',
        'Scan Now': 'Scan Now',
        'Scan Results': 'Scan Results',
        'Voice Assistant': 'Voice Assistant',
        'Click the microphone and speak your question': 'Click the microphone and speak your question',
        'Start Listening': 'Start Listening',
        'Listening... Speak now': 'Listening... Speak now',
        'You asked:': 'You asked:',
        'Response:': 'Response:',
        'Search fertilizers...': 'Search fertilizers...',
        'Exact Matches': 'Exact Matches',
        'All Fertilizers': 'All Fertilizers',
        'View Details': 'View Details',
        'Name:': 'Name:',
        'Type:': 'Type:',
        'NPK Ratio:': 'NPK Ratio:',
        'Description:': 'Description:',
        'Application & Precautions': 'Application & Precautions',
        'Application:': 'Application:',
        'Precautions:': 'Precautions:',
        'Recommended Crops': 'Recommended Crops',
        'No information found for the scanned fertilizer.': 'No information found for the scanned fertilizer.',
        // Crop-specific translations
        'Rice': 'Rice',
        'Wheat': 'Wheat',
        'Corn': 'Corn',
        'Cotton': 'Cotton'
    },
    'hi': {
        'Crop Growth': 'फसल वृद्धि',
        'Fertilizer Guide': 'उर्वरक गाइड',
        'Scan Fertilizer': 'उर्वरक स्कैन करें',
        'Select Crop:': 'फसल चुनें:',
        'Select Growth Stage:': 'विकास चरण चुनें:',
        'Show Information': 'जानकारी दिखाएं',
        'Scan Fertilizer Label': 'उर्वरक लेबल स्कैन करें',
        'Click to scan fertilizer label': 'उर्वरक लेबल स्कैन करने के लिए क्लिक करें',
        'or upload an image': 'या एक छवि अपलोड करें',
        'Scan Now': 'अभी स्कैन करें',
        'Scan Results': 'स्कैन परिणाम',
        'Voice Assistant': 'वॉइस असिस्टेंट',
        'Click the microphone and speak your question': 'माइक्रोफ़ोन पर क्लिक करें और अपना प्रश्न बोलें',
        'Start Listening': 'सुनना शुरू करें',
        'Listening... Speak now': 'सुन रहा है... अब बोलें',
        'You asked:': 'आपने पूछा:',
        'Response:': 'प्रतिक्रिया:',
        'Search fertilizers...': 'उर्वरकों की खोज करें...',
        'Exact Matches': 'सटीक मिलान',
        'All Fertilizers': 'सभी उर्वरक',
        'View Details': 'विवरण देखें',
        'Name:': 'नाम:',
        'Type:': 'प्रकार:',
        'NPK Ratio:': 'एनपीके अनुपात:',
        'Description:': 'विवरण:',
        'Application & Precautions': 'आवेदन और सावधानियां',
        'Application:': 'आवेदन:',
        'Precautions:': 'सावधानियां:',
        'Recommended Crops': 'अनुशंसित फसलें',
        'No information found for the scanned fertilizer.': 'स्कैन किए गए उर्वरक के लिए कोई जानकारी नहीं मिली।',
        // Crop-specific translations
        'Rice': 'चावल',
        'Wheat': 'गेहूं',
        'Corn': 'मक्का',
        'Cotton': 'कपास'
    },
    'ta': {
        'Crop Growth': 'பயிர் வளர்ச்சி',
        'Fertilizer Guide': 'உர வழிகாட்டி',
        'Scan Fertilizer': 'உரத்தை ஸ்கேன் செய்யவும்',
        'Select Crop:': 'பயிரைத் தேர்ந்தெடுக்கவும்:',
        'Select Growth Stage:': 'வளர்ச்சி நிலையைத் தேர்ந்தெடுக்கவும்:',
        'Show Information': 'தகவலைக் காட்டு',
        'Scan Fertilizer Label': 'உர லேபலை ஸ்கேன் செய்யவும்',
        'Click to scan fertilizer label': 'உர லேபலை ஸ்கேன் செய்ய கிளிக் செய்யவும்',
        'or upload an image': 'அல்லது ஒரு படத்தைப் பதிவேற்றவும்',
        'Scan Now': 'இப்போது ஸ்கேன் செய்',
        'Scan Results': 'ஸ்கேன் முடிவுகள்',
        'Voice Assistant': 'குரல் உதவியாளர்',
        'Click the microphone and speak your question': 'மைக்ரோஃபோனைக் கிளிக் செய்து உங்கள் கேள்வியைக் கேளுங்கள்',
        'Start Listening': 'கேட்கத் தொடங்கு',
        'Listening... Speak now': 'கேட்டுக்கொண்டிருக்கிறது... இப்போது பேசுங்கள்',
        'You asked:': 'நீங்கள் கேட்டது:',
        'Response:': 'பதில்:',
        'Search fertilizers...': 'உரங்களைத் தேடு...',
        'Exact Matches': 'சரியான பொருத்தங்கள்',
        'All Fertilizers': 'அனைத்து உரங்களும்',
        'View Details': 'விவரங்களைக் காண்க',
        'Name:': 'பெயர்:',
        'Type:': 'வகை:',
        'NPK Ratio:': 'NPK விகிதம்:',
        'Description:': 'விளக்கம்:',
        'Application & Precautions': 'பயன்பாடு மற்றும் முன்னெச்சரிக்கைகள்',
        'Application:': 'பயன்பாடு:',
        'Precautions:': 'முன்னெச்சரிக்கைகள்:',
        'Recommended Crops': 'பரிந்துரைக்கப்பட்ட பயிர்கள்',
        'No information found for the scanned fertilizer.': 'ஸ்கேன் செய்யப்பட்ட உரத்திற்கு எந்த தகவலும் கிடைக்கவில்லை.',
        // Crop-specific translations
        'Rice': 'அரிசி',
        'Wheat': 'கோதுமை',
        'Corn': 'மக்காச்சோளம்',
        'Cotton': 'பருத்தி'
    },
    'te': {
        'Crop Growth': 'పంట పెరుగుదల',
        'Fertilizer Guide': 'ఎరువుల మార్గదర్శి',
        'Scan Fertilizer': 'ఎరువును స్కాన్ చేయండి',
        'Select Crop:': 'పంటను ఎంచుకోండి:',
        'Select Growth Stage:': 'పెరుగుదల దశను ఎంచుకోండి:',
        'Show Information': 'సమాచారం చూపించు',
        'Scan Fertilizer Label': 'ఎరువుల లేబుల్‌ను స్కాన్ చేయండి',
        'Click to scan fertilizer label': 'ఎరువుల లేబుల్‌ను స్కాన్ చేయడానికి క్లిక్ చేయండి',
        'or upload an image': 'లేదా ఒక చిత్రాన్ని అప్‌లోడ్ చేయండి',
        'Scan Now': 'ఇప్పుడే స్కాన్ చేయండి',
        'Scan Results': 'స్కాన్ ఫలితాలు',
        'Voice Assistant': 'వాయిస్ అసిస్టెంట్',
        'Click the microphone and speak your question': 'మైక్రోఫోన్‌ను క్లిక్ చేసి మీ ప్రశ్నను మాట్లాడండి',
        'Start Listening': 'వినడం ప్రారంభించండి',
        'Listening... Speak now': 'వింటుంది... ఇప్పుడు మాట్లాడండి',
        'You asked:': 'మీరు అడిగారు:',
        'Response:': 'ప్రతిస్పందన:',
        'Search fertilizers...': 'ఎరువులను శోధించండి...',
        'Exact Matches': 'సరిగ్గా సరిపోలినవి',
        'All Fertilizers': 'అన్ని ఎరువులు',
        'View Details': 'వివరాలను చూడండి',
        'Name:': 'పేరు:',
        'Type:': 'రకం:',
        'NPK Ratio:': 'NPK నిష్పత్తి:',
        'Description:': 'వివరణ:',
        'Application & Precautions': 'అప్లికేషన్ మరియు జాగ్రత్తలు',
        'Application:': 'అప్లికేషన్:',
        'Precautions:': 'జాగ్రత్తలు:',
        'Recommended Crops': 'సిఫార్సు చేయబడిన పంటలు',
        'No information found for the scanned fertilizer.': 'స్కాన్ చేసిన ఎరువుకు సమాచారం కనుగొనబడలేదు.',
        // Crop-specific translations
        'Rice': 'వరి',
        'Wheat': 'గోధుమ',
        'Corn': 'మొక్కజొన్న',
        'Cotton': 'పత్తి'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('currentLanguage').textContent = lang.toUpperCase();
    
    // Translate all visible text
    document.querySelectorAll('[data-tabtext]').forEach(el => {
        el.textContent = translations[lang][el.getAttribute('data-tabtext')];
    });

    const elementsToTranslate = [
        'h2', 'h3', 'h4', 'p', 'label', 'button', 'input', 'a', 'span'
    ];

    elementsToTranslate.forEach(tag => {
        document.querySelectorAll(tag).forEach(el => {
            if (translations[lang][el.textContent]) {
                el.textContent = translations[lang][el.textContent];
            }
            if (el.placeholder && translations[lang][el.placeholder]) {
                el.placeholder = translations[lang][el.placeholder];
            }
        });
    });

    // Handle dynamic content
    const translateDynamicContent = (el) => {
        const key = el.textContent;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    };

    // Re-render dynamic sections after translation
    loadCropData(document.getElementById('cropSelector').value);
    loadFertilizerData();
}

document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        const text = this.textContent;
        setLanguage(lang);
        document.getElementById('currentLanguage').textContent = text;
        document.getElementById('languageDropdown').classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

// Intercept original functions to re-translate dynamic content
const originalShowScanResult = showScanResult;
showScanResult = (fertName) => {
    originalShowScanResult(fertName);
    // Re-translate after content is loaded
    setTimeout(() => {
        const scanResultContent = document.getElementById('scanResultContent');
        if (scanResultContent) {
            scanResultContent.querySelectorAll('h4, p, span, li').forEach(el => {
                if (translations[currentLang][el.textContent]) {
                    el.textContent = translations[currentLang][el.textContent];
                }
            });
        }
    }, 100);
};

const originalShowInfoBtn = document.getElementById('showInfo').onclick;
document.getElementById('showInfo').onclick = () => {
    originalShowInfoBtn();
    setTimeout(() => {
        const stageInfoDiv = document.getElementById('stageInfo');
        if (stageInfoDiv) {
            stageInfoDiv.querySelectorAll('h3, p, label, li').forEach(el => {
                if (translations[currentLang][el.textContent]) {
                    el.textContent = translations[currentLang][el.textContent];
                }
            });
        }
    }, 100);
};

const originalLoadFertilizerData = loadFertilizerData;
loadFertilizerData = () => {
    originalLoadFertilizerData();
    // Re-translate after content is loaded
    setTimeout(() => {
        const remainingFertilizersResults = document.getElementById('remainingFertilizersResults');
        if (remainingFertilizersResults) {
            remainingFertilizersResults.querySelectorAll('h3, p, span, button').forEach(el => {
                if (translations[currentLang][el.textContent]) {
                    el.textContent = translations[currentLang][el.textContent];
                }
            });
        }
    }, 100);
};