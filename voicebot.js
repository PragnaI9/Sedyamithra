// voicebot.js - Complete Fixed Version
// Bilingual Voice Bot Variables
let recognition = null;
let isListening = false;
let currentLanguage = 'en-US';
let isSpeaking = false;
let isUserSpeaking = false;

// Text-to-Speech Functionality
let speechSynthesis = window.speechSynthesis;

// Bilingual Responses
const VoiceBotResponses = {
    en: {
        greeting: ["Hello! How can I help you?", "Hi there! What would you like to know?", "Greetings farmer! I'm here to assist you."],
        listening: "Listening... What can I help you with?",
        error: "Sorry, I encountered an error. Please try again.",
        notUnderstood: "I'm not sure I understand. Try asking about fertilizers or crop growth stages.",
        help: "I can help with fertilizers, crop growth stages, and agricultural advice. Try asking specific questions.",
        starting: "Starting voice assistant...",
        welcome: "Welcome to Agri Voice Assistant! Click the microphone to start."
    },
    te: {
        greeting: ["నమస్కారం! మీకు ఎలా సహాయపడగలను?", "హలో! మీకు ఏమి తెలుసుకోవాలి?", "వ్యవసాయదారుడు నమస్కారం! నేను మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాను."],
        listening: "వింటున్నాను... మీకు ఏ విషయంలో సహాయం చేయగలను?",
        error: "క్షమించండి, నేను ఒక లోపాన్ని ఎదుర్కొన్నాను. దయచేసి మళ్లీ ప్రయత్నించండి.",
        notUnderstood: "నాకు అర్థం కాలేదు. రసాయనాలు లేదా పంట పెరుగుదల దశల గురించి అడగండి.",
        help: "నేను రసాయనాలు, పంట పెరుగుదల దశలు మరియు వ్యవసాయ సలహాలతో సహాయం చేయగలను. నిర్దిష్ట ప్రశ్నలు అడగండి.",
        starting: "వాయిస్ అసిస్టెంట్ ప్రారంభిస్తున్నాను...",
        welcome: "వ్యవసాయ వాయిస్ అసిస్టెంట్కు స్వాగతం! ప్రారంభించడానికి మైక్రోఫోన్పై క్లిక్ చేయండి."
    }
};

// Bilingual Command Handlers
const VoiceBotCommands = {
    "hello": handleGreeting,
    "hi": handleGreeting,
    "namaskaram": handleGreeting,
    "fertilizer": handleFertilizerQuery,
    "fertilizers": handleFertilizerQuery,
    "rasayanam": handleFertilizerQuery,
    "crop": handleCropQuery,
    "panta": handleCropQuery,
    "growth": handleGrowthQuery,
    "stage": handleGrowthQuery,
    "dasa": handleGrowthQuery,
    "help": handleHelp,
    "sahayam": handleHelp
};

// Function to speak text
function speakText(text, lang = null) {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang || currentLanguage;
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    const voices = speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
        voice.lang === utterance.lang && voice.localService
    );
    
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }
    
    utterance.onstart = function() {
        isSpeaking = true;
        const assistantMessages = document.querySelectorAll('#voiceBotConversation div:not(.bg-blue-100)');
        if (assistantMessages.length > 0) {
            assistantMessages[assistantMessages.length - 1].classList.add('speaking');
        }
    };
    
    utterance.onend = function() {
        isSpeaking = false;
        const speakingMessages = document.querySelectorAll('#voiceBotConversation div.speaking');
        speakingMessages.forEach(msg => msg.classList.remove('speaking'));
    };
    
    utterance.onerror = function(event) {
        console.error('Speech synthesis error:', event);
        isSpeaking = false;
    };
    
    speechSynthesis.speak(utterance);
}

// Function to stop speaking
function stopSpeaking() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        isSpeaking = false;
    }
}

// Initialize Bilingual Voice Bot
function initializeVoiceBot() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.error('Speech recognition not supported');
        addBotMessage("Voice recognition is not supported in your browser. Please use Chrome or Edge.");
        return;
    }

    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;
    updateRecognitionLanguage();

    recognition.onstart = function() {
        isListening = true;
        isUserSpeaking = true;
        stopSpeaking();
        document.getElementById('startVoiceBot').classList.add('hidden');
        document.getElementById('stopVoiceBot').classList.remove('hidden');
        addBotMessage(getResponse('listening'), false, false);
    };

    recognition.onend = function() {
        isUserSpeaking = false;
        if (isListening) {
            recognition.start();
        }
    };

    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }

        if (interimTranscript) {
            updateTranscript(interimTranscript);
        }

        if (finalTranscript) {
            processVoiceCommand(finalTranscript);
        }
    };

    recognition.onerror = function(event) {
        console.error('Voice recognition error', event.error);
        addBotMessage(getResponse('error'));
        stopVoiceRecognition();
    };
}

function updateRecognitionLanguage() {
    if (recognition) {
        recognition.lang = currentLanguage;
    }
}

function getResponse(key) {
    const lang = currentLanguage === 'te-IN' ? 'te' : 'en';
    return VoiceBotResponses[lang][key];
}

function startVoiceRecognition() {
    try {
        updateRecognitionLanguage();
        recognition.start();
        addBotMessage(getResponse('starting'));
    } catch (e) {
        console.error('Recognition start error:', e);
        addBotMessage(getResponse('error'));
    }
}

function stopVoiceRecognition() {
    isListening = false;
    recognition.stop();
    document.getElementById('startVoiceBot').classList.remove('hidden');
    document.getElementById('stopVoiceBot').classList.add('hidden');
}

function addBotMessage(message, isUser = false, speak = true) {
    const conversationDiv = document.getElementById('voiceBotConversation');
    const messageDiv = document.createElement('div');
    messageDiv.className = `mb-2 p-2 rounded-lg ${isUser ? 'bg-blue-100 text-blue-800 ml-8' : 'bg-green-100 text-green-800 mr-8'}`;
    messageDiv.innerHTML = isUser 
        ? `<strong>${currentLanguage === 'te-IN' ? 'మీరు' : 'You'}:</strong> ${message}`
        : `<strong>${currentLanguage === 'te-IN' ? 'సహాయకుడు' : 'Assistant'}:</strong> ${message}`;
    conversationDiv.appendChild(messageDiv);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
    
    if (!isUser && speak && !isUserSpeaking) {
        speakText(message);
    }
}

function updateTranscript(transcript) {
    const conversationDiv = document.getElementById('voiceBotConversation');
    const lastChild = conversationDiv.lastChild;
    
    if (lastChild && lastChild.classList.contains('interim')) {
        lastChild.innerHTML = `<strong>${currentLanguage === 'te-IN' ? 'మీరు' : 'You'}:</strong> ${transcript}`;
    } else {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'mb-2 p-2 rounded-lg bg-blue-100 text-blue-800 ml-8 interim';
        messageDiv.innerHTML = `<strong>${currentLanguage === 'te-IN' ? 'మీరు' : 'You'}:</strong> ${transcript}`;
        conversationDiv.appendChild(messageDiv);
    }
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function processVoiceCommand(command) {
    addBotMessage(command, true, false);
    command = command.toLowerCase().trim();
    
    for (const [keyword, handler] of Object.entries(VoiceBotCommands)) {
        if (command.includes(keyword)) {
            handler(command);
            return;
        }
    }
    
    addBotMessage(getResponse('notUnderstood'));
}

// Bilingual Command Handlers
function handleGreeting() {
    const lang = currentLanguage === 'te-IN' ? 'te' : 'en';
    const randomIndex = Math.floor(Math.random() * VoiceBotResponses[lang].greeting.length);
    const greeting = VoiceBotResponses[lang].greeting[randomIndex];
    addBotMessage(greeting);
}

function handleHelp() {
    const helpMessage = getResponse('help');
    addBotMessage(helpMessage);
}

function handleFertilizerQuery(command) {
    // Get fertilizerData from global scope (defined in HTML)
    const fertilizerData = window.fertilizerData || [];
    const lang = currentLanguage === 'te-IN' ? 'te' : 'en';
    let response = '';
    
    const relevantFerts = fertilizerData.filter(fert => 
        command.includes(fert.name.toLowerCase()) || 
        (fert.crops && fert.crops.some(crop => command.includes(crop.toLowerCase())))
    );

    if (relevantFerts.length > 0) {
        if (lang === 'te') {
            response = "మీ ప్రశ్న ఆధారంగా: ";
            relevantFerts.forEach(fert => {
                response += `
                    <div class="mb-2">
                        <strong>${fert.name}</strong> (${fert.type}): ${fert.description}<br>
                        వాడకం: ${fert.application}
                    </div>
                `;
            });
        } else {
            response = "Based on your query: ";
            relevantFerts.forEach(fert => {
                response += `
                    <div class="mb-2">
                        <strong>${fert.name}</strong> (${fert.type}): ${fert.description}<br>
                        Application: ${fert.application}
                    </div>
                `;
            });
        }
    } else {
        if (lang === 'te') {
            response = "సాధారణ రసాయనాలు: యూరియా (నత్రజని), డీఎపీ (భాస్వరం), ఎమ్ఓపీ (పొటాషియం). నిర్దిష్ట రసాయనం పేరు లేదా పంట పేరు చెప్పండి.";
        } else {
            response = "Common fertilizers include Urea (nitrogen), DAP (phosphorus), and MOP (potassium). Say a specific fertilizer name or crop for more details.";
        }
    }
    
    addBotMessage(response);
}

function handleCropQuery(command) {
    // Get cropData from global scope (defined in HTML)
    const cropData = window.cropData || {};
    const lang = currentLanguage === 'te-IN' ? 'te' : 'en';
    const matchedCrops = Object.entries(cropData).filter(([key, crop]) => 
        command.includes(crop.name.toLowerCase())
    );
    
    if (matchedCrops.length > 0) {
        matchedCrops.forEach(([key, crop]) => {
            if (lang === 'te') {
                addBotMessage(`
                    <strong>${crop.name}</strong>: ${crop.scientificName}<br>
                    పెరుగుదల చక్రం: ${crop.cycle}<br>
                    "${crop.name} పెరుగుదల దశలు" అని చెప్పండి మరిన్ని వివరాల కోసం.
                `);
            } else {
                addBotMessage(`
                    <strong>${crop.name}</strong>: ${crop.scientificName}<br>
                    Growth cycle: ${crop.cycle}<br>
                    Say "growth stages for ${crop.name}" for more details.
                `);
            }
        });
    } else {
        if (lang === 'te') {
            addBotMessage("నేను ఈ పంటలను గుర్తించగలను: " + 
                Object.values(cropData).map(crop => crop.name).join(', ') + 
                ". మరిన్ని వివరాల కోసం పంట పేరు చెప్పండి.");
        } else {
            addBotMessage("I recognize these crops: " + 
                Object.values(cropData).map(crop => crop.name).join(', ') + 
                ". Say a crop name for more details.");
        }
    }
}

function handleGrowthQuery(command) {
    // Get cropData from global scope (defined in HTML)
    const cropData = window.cropData || {};
    const lang = currentLanguage === 'te-IN' ? 'te' : 'en';
    const matchedCrops = Object.entries(cropData).filter(([key, crop]) => 
        command.includes(crop.name.toLowerCase())
    );
    
    if (matchedCrops.length > 0) {
        matchedCrops.forEach(([key, crop]) => {
            const stages = crop.stages.map(stage => stage.name).join(', ');
            if (lang === 'te') {
                addBotMessage(`
                    <strong>${crop.name} పెరుగుదల దశలు</strong>: ${stages}<br>
                    మరిన్ని వివరాల కోసం దశ పేరు చెప్పండి.
                `);
            } else {
                addBotMessage(`
                    <strong>${crop.name} growth stages</strong>: ${stages}<br>
                    Say a stage name for more details.
                `);
            }
        });
    } else {
        if (lang === 'te') {
            addBotMessage("దయచేసి ఒక పంటను పేర్కొనండి, ఉదాహరణకు 'వరి పెరుగుదల దశలు'");
        } else {
            addBotMessage("Please specify a crop, like 'growth stages for rice'");
        }
    }
}

function updateHelpText() {
    if (currentLanguage === 'te-IN') {
        document.getElementById('englishHelp').classList.add('hidden');
        document.getElementById('teluguHelp').classList.remove('hidden');
    } else {
        document.getElementById('englishHelp').classList.remove('hidden');
        document.getElementById('teluguHelp').classList.add('hidden');
    }
}

// Event Listeners for Bilingual Voice Bot
document.addEventListener('DOMContentLoaded', function() {
    initializeVoiceBot();
    
    // Voice assistant button
    document.getElementById('voiceAssistantBtn').addEventListener('click', function() {
        document.getElementById('voiceBotModal').classList.remove('hidden');
        document.getElementById('voiceBotConversation').innerHTML = '';
        addBotMessage(getResponse('welcome'));
        updateHelpText();
    });
    
    // Close modal
    document.getElementById('closeVoiceBotModal').addEventListener('click', function() {
        stopVoiceRecognition();
        document.getElementById('voiceBotModal').classList.add('hidden');
    });
    
    // Start/stop buttons
    document.getElementById('startVoiceBot').addEventListener('click', startVoiceRecognition);
    document.getElementById('stopVoiceBot').addEventListener('click', stopVoiceRecognition);
    
    // Language change
    document.getElementById('voiceBotLanguage').addEventListener('change', function() {
        currentLanguage = this.value;
        updateRecognitionLanguage();
        updateHelpText();
        if (isListening) {
            stopVoiceRecognition();
            startVoiceRecognition();
        }
    });
    
    // Voice control buttons
    document.getElementById('speakBtn').addEventListener('click', function() {
        const lastAssistantMessage = Array.from(document.querySelectorAll('#voiceBotConversation div:not(.bg-blue-100)')).pop();
        if (lastAssistantMessage) {
            const messageText = lastAssistantMessage.textContent.replace(/^(Assistant:|సహాయకుడు:)\s*/, '').trim();
            speakText(messageText);
        }
    });
    
    document.getElementById('stopSpeakBtn').addEventListener('click', stopSpeaking);
    
    document.getElementById('repeatBtn').addEventListener('click', function() {
        stopSpeaking();
        const lastAssistantMessage = Array.from(document.querySelectorAll('#voiceBotConversation div:not(.bg-blue-100)')).pop();
        if (lastAssistantMessage) {
            const messageText = lastAssistantMessage.textContent.replace(/^(Assistant:|సహాయకుడు:)\s*/, '').trim();
            speakText(messageText);
        }
    });

    // Preload voices
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', function() {
            console.log('Voices loaded:', speechSynthesis.getVoices().length);
        });
    }
});

// Make variables globally accessible
window.initializeVoiceBot = initializeVoiceBot;
window.startVoiceRecognition = startVoiceRecognition;
window.stopVoiceRecognition = stopVoiceRecognition;
window.speakText = speakText;
window.stopSpeaking = stopSpeaking;
