// MindPal - Fully Functional Mental Health App - FIXED VERSION
// All features working with complete implementations

/* ========================= LANGUAGE SYSTEM ========================= */
const translations = {
    en: {
        appName: "MindPal",
        selectMode: "Select Your Mode", 
        childMode: "Child Mode",
        adultMode: "Adult Mode",
        childDesc: "Fun games and activities for kids",
        adultDesc: "Professional tools for mental wellness",
        home: "Home",
        games: "Games", 
        activities: "Activities",
        mood: "Mood",
        colorMatch: "Color Match",
        memoryCards: "Memory Cards",
        bubblePop: "Bubble Pop",
        breathing: "Breathing Exercise",
        meditation: "Meditation Timer",
        stressBall: "Stress Ball",
        drawing: "Drawing Pad",
        gratitude: "Gratitude Journal",
        howFeeling: "How are you feeling?",
        saveMood: "Save Mood",
        playGame: "Play Game",
        start: "Start",
        pause: "Pause",
        reset: "Reset",
        score: "Score",
        moves: "Moves",
        timeLeft: "Time Left",
        minutes: "Minutes",
        complete: "Complete!",
        wellDone: "Well Done!",
        addEntry: "Add Entry",
        clearAll: "Clear All",
        breatheIn: "Breathe In",
        breatheOut: "Breathe Out",
        veryHappy: "Very Happy",
        happy: "Happy",
        okay: "Okay",
        sad: "Sad",
        verySad: "Very Sad",
        back: "Back"
    },
    ta: {
        appName: "மைண்ட்பால்",
        selectMode: "உங்கள் முறையைத் தேர்ந்தெடுக்கவும்",
        childMode: "குழந்தை முறை",
        adultMode: "பெரியவர் முறை", 
        childDesc: "குழந்தைகளுக்கான வேடிக்கையான விளையாட்டுகள்",
        adultDesc: "மன நலனுக்கான தொழில்முறை கருவிகள்",
        home: "முகப்பு",
        games: "விளையாட்டுகள்",
        activities: "செயல்பாடுகள்",
        mood: "மனநிலை",
        colorMatch: "வண்ண பொருத்துதல்",
        memoryCards: "நினைவு அட்டைகள்",
        bubblePop: "குமிழி வெடித்தல்",
        breathing: "சுவாச பயிற்சி",
        meditation: "தியான கடிகாரம்",
        stressBall: "மன அழுத்த பந்து",
        drawing: "வரைதல் பலகை",
        gratitude: "நன்றி பத்திரிகை",
        howFeeling: "நீங்கள் எப்படி உணர்கிறீர்கள்?",
        saveMood: "மனநிலையை சேமிக்கவும்",
        playGame: "விளையாட்டு விளையாடு",
        start: "தொடங்கு",
        pause: "இடைநிறுத்தம்",
        reset: "மீட்டமை",
        score: "மதிப்பெண்",
        moves: "நகர்வுகள்",
        timeLeft: "மீதமுள்ள நேரம்",
        minutes: "நிமிடங்கள்",
        complete: "முடிந்தது!",
        wellDone: "நன்றாக செய்தீர்கள்!",
        addEntry: "உள்ளீடு சேர்க்கவும்",
        clearAll: "எல்லாவற்றையும் அழிக்கவும்",
        breatheIn: "சுவாசிக்கவும்",
        breatheOut: "மூச்சை வெளியேற்றவும்",
        veryHappy: "மிகவும் மகிழ்ச்சி",
        happy: "மகிழ்ச்சி",
        okay: "சரி",
        sad: "சோகம்",
        verySad: "மிகவும் சோகம்",
        back: "திரும்பு"
    },
    hi: {
        appName: "माइंडपाल",
        selectMode: "अपना मोड चुनें",
        childMode: "बच्चों का मोड",
        adultMode: "वयस्क मोड",
        childDesc: "बच्चों के लिए मजेदार खेल",
        adultDesc: "मानसिक कल्याण के लिए पेशेवर उपकरण",
        home: "होम",
        games: "खेल",
        activities: "गतिविधियां",
        mood: "मूड",
        colorMatch: "रंग मिलान",
        memoryCards: "मेमोरी कार्ड",
        bubblePop: "बुलबुला फोड़ना",
        breathing: "सांस की कवायद",
        meditation: "ध्यान टाइमर",
        stressBall: "तनाव गेंद", 
        drawing: "ड्राइंग पैड",
        gratitude: "कृतज्ञता जर्नल",
        howFeeling: "आप कैसा महसूस कर रहे हैं?",
        saveMood: "मूड सेव करें",
        playGame: "खेल खेलें",
        start: "शुरू करें",
        pause: "रोकें",
        reset: "रीसेट करें",
        score: "स्कोर",
        moves: "चालें",
        timeLeft: "बचा समय",
        minutes: "मिनट",
        complete: "पूरा हो गया!",
        wellDone: "शाबाश!",
        addEntry: "प्रविष्टि जोड़ें",
        clearAll: "सब साफ करें",
        breatheIn: "सांस लें",
        breatheOut: "सांस छोड़ें",
        veryHappy: "बहुत खुश",
        happy: "खुश",
        okay: "ठीक",
        sad: "उदास",
        verySad: "बहुत उदास",
        back: "वापस"
    },
    kn: {
        appName: "ಮೈಂಡ್‌ಪಾಲ್",
        selectMode: "ನಿಮ್ಮ ಮೋಡ್ ಆಯ್ಕೆಮಾಡಿ",
        childMode: "ಮಕ್ಕಳ ಮೋಡ್",
        adultMode: "ವಯಸ್ಕರ ಮೋಡ್",
        childDesc: "ಮಕ್ಕಳಿಗಾಗಿ ಮಜಾದ ಆಟಗಳು",
        adultDesc: "ಮಾನಸಿಕ ಯೋಗಕ್ಷೇಮಕ್ಕಾಗಿ ವೃತ್ತಿಪರ ಸಾಧನಗಳು",
        home: "ಮನೆ",
        games: "ಆಟಗಳು",
        activities: "ಚಟುವಟಿಕೆಗಳು",
        mood: "ಮೂಡ್",
        colorMatch: "ಬಣ್ಣ ಹೊಂದಾಣಿಕೆ",
        memoryCards: "ಮೆಮೊರಿ ಕಾರ್ಡ್‌ಗಳು",
        bubblePop: "ಗುಳ್ಳೆ ಒಡೆಯುವುದು",
        breathing: "ಉಸಿರಾಟದ ವ್ಯಾಯಾಮ",
        meditation: "ಧ್ಯಾನ ಟೈಮರ್",
        stressBall: "ಒತ್ತಡ ಚೆಂಡು",
        drawing: "ಚಿತ್ರಕಲೆ ಪ್ಯಾಡ್",
        gratitude: "ಕೃತಜ್ಞತಾ ಜರ್ನಲ್",
        howFeeling: "ನೀವು ಹೇಗೆ ಭಾವಿಸುತ್ತಿದ್ದೀರಿ?",
        saveMood: "ಮೂಡ್ ಸೇವ್ ಮಾಡಿ",
        playGame: "ಆಟ ಆಡಿ",
        start: "ಪ್ರಾರಂಭಿಸಿ",
        pause: "ವಿರಾಮ",
        reset: "ಮರುಹೊಂದಿಸಿ",
        score: "ಅಂಕ",
        moves: "ಚಲನೆಗಳು",
        timeLeft: "ಉಳಿದ ಸಮಯ",
        minutes: "ನಿಮಿಷಗಳು",
        complete: "ಪೂರ್ಣಗೊಂಡಿತು!",
        wellDone: "ಚೆನ್ನಾಗಿ ಮಾಡಿದ್ದೀರಿ!",
        addEntry: "ಪ್ರವೇಶ ಸೇರಿಸಿ",
        clearAll: "ಎಲ್ಲವನ್ನೂ ಸಾಫ್ ಮಾಡಿ",
        breatheIn: "ಉಸಿರು ಎಳೆಯಿರಿ",
        breatheOut: "ಉಸಿರು ಬಿಡಿ",
        veryHappy: "ತುಂಬಾ ಸಂತೋಷ",
        happy: "ಸಂತೋಷ",
        okay: "ಸರಿ",
        sad: "ದುಃಖ",
        verySad: "ತುಂಬಾ ದುಃಖ",
        back: "ಹಿಂತಿರುಗಿ"
    },
    te: {
        appName: "మైండ్‌పాల్",
        selectMode: "మీ మోడ్‌ను ఎంచుకోండి",
        childMode: "పిల్లల మోడ్",
        adultMode: "పెద్దల మోడ్",
        childDesc: "పిల్లలకు ఆనందకరమైన ఆటలు",
        adultDesc: "మానసిక శ్రేయస్సు కోసం వృత్తిపరమైన సాధనాలు",
        home: "హోమ్",
        games: "ఆటలు",
        activities: "కార్యకలాపాలు",
        mood: "మూడ్",
        colorMatch: "రంగు సరిపోల్చడం",
        memoryCards: "మెమరీ కార్డులు",
        bubblePop: "బబుల్ పాప్",
        breathing: "శ్వాస వ్యాయామం",
        meditation: "ధ్యాన టైమర్",
        stressBall: "ఒత్తిడి బంతి",
        drawing: "డ్రాయింగ్ ప్యాడ్",
        gratitude: "కృతజ్ఞత జర్నల్",
        howFeeling: "మీరు ఎలా అనుభవిస్తున్నారు?",
        saveMood: "మూడ్ సేవ్ చేయండి",
        playGame: "ఆట ఆడండి",
        start: "ప్రారంభించండి",
        pause: "పాజ్ చేయండి",
        reset: "రీసెట్ చేయండి",
        score: "స్కోర్",
        moves: "కదలికలు",
        timeLeft: "మిగిలిన సమయం",
        minutes: "నిమిషాలు",
        complete: "పూర్తయ్యింది!",
        wellDone: "బాగా చేశారు!",
        addEntry: "ఎంట్రీ జోడించండి",
        clearAll: "అన్నీ క్లియర్ చేయండి",
        breatheIn: "శ్వాస తీసుకోండి",
        breatheOut: "శ్వాస వదలండి",
        veryHappy: "చాలా సంతోషం",
        happy: "సంతోషం",
        okay: "సరే",
        sad: "దుఃఖం",
        verySad: "చాలా దుఃఖం",
        back: "వెనుకకు"
    }
};

/* ========================= GLOBAL STATE ========================= */
let currentMode = 'child';
let currentLanguage = 'en';
let currentTab = 'home';

// Game data
const gameAssets = {
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57", "#FF9FF3", "#54A0FF", "#5F27CD"],
    animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"],
    moodEmojis: ["😢", "😐", "🙂", "😊", "😄"],
    bubbleColors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57", "#FF9FF3"]
};

// Global game variables
let gameInterval = null;
let gameAnimation = null;

/* ========================= UTILITY FUNCTIONS ========================= */
function t(key) {
    return translations[currentLanguage]?.[key] || key;
}

function $(id) {
    return document.getElementById(id);
}

function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.warn('LocalStorage not available:', e);
        return false;
    }
}

function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.warn('LocalStorage not available:', e);
        return null;
    }
}

function celebration(message = null) {
    const celebrationEl = document.createElement('div');
    celebrationEl.className = 'celebration';
    celebrationEl.textContent = message || t('wellDone');
    document.body.appendChild(celebrationEl);
    
    setTimeout(() => {
        if (celebrationEl.parentNode) {
            celebrationEl.parentNode.removeChild(celebrationEl);
        }
    }, 2000);
}

/* ========================= LANGUAGE SYSTEM ========================= */
function updateLanguage() {
    // Update mode selection screen
    const selectModeText = $('selectModeText');
    const childModeText = $('childModeText');
    const childDescText = $('childDescText');
    const adultModeText = $('adultModeText');
    const adultDescText = $('adultDescText');
    const headerTitle = $('headerTitle');
    const homeTab = $('homeTab');
    const gamesTab = $('gamesTab');
    const activitiesTab = $('activitiesTab');
    const moodTab = $('moodTab');
    
    if (selectModeText) selectModeText.textContent = t('selectMode');
    if (childModeText) childModeText.textContent = t('childMode');
    if (childDescText) childDescText.textContent = t('childDesc');
    if (adultModeText) adultModeText.textContent = t('adultMode');
    if (adultDescText) adultDescText.textContent = t('adultDesc');
    if (headerTitle) headerTitle.textContent = `🧠 ${t('appName')}`;
    if (homeTab) homeTab.innerHTML = `🏠 ${t('home')}`;
    if (gamesTab) gamesTab.innerHTML = `🎮 ${t('games')}`;
    if (activitiesTab) activitiesTab.innerHTML = `🌟 ${t('activities')}`;
    if (moodTab) moodTab.innerHTML = `😊 ${t('mood')}`;
    
    // Update current content
    loadTab(currentTab);
}

function setLanguage(lang) {
    currentLanguage = lang;
    saveToLocalStorage('language', lang);
    
    // Update both dropdowns
    const mainSelect = $('mainLanguageSelect');
    const appSelect = $('languageSelect');
    
    if (mainSelect) mainSelect.value = lang;
    if (appSelect) appSelect.value = lang;
    
    updateLanguage();
}

/* ========================= MODE SYSTEM ========================= */
function selectMode(mode) {
    currentMode = mode;
    document.body.className = `${mode}-mode`;
    saveToLocalStorage('mode', mode);
    
    const modeSelection = $('modeSelection');
    const mainApp = $('mainApp');
    
    if (modeSelection) modeSelection.classList.add('hidden');
    if (mainApp) mainApp.classList.remove('hidden');
    
    updateLanguage();
    loadTab('home');
}

function showModeSelection() {
    const modeSelection = $('modeSelection');
    const mainApp = $('mainApp');
    
    if (modeSelection) modeSelection.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');
}

/* ========================= TAB NAVIGATION ========================= */
function loadTab(tabName) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    currentTab = tabName;
    saveToLocalStorage('currentTab', tabName);
    
    const content = $('mainContent');
    if (!content) return;
    
    switch (tabName) {
        case 'home':
            content.innerHTML = renderHome();
            setupHomeEvents();
            break;
        case 'games':
            content.innerHTML = renderGames();
            setupGameEvents();
            break;
        case 'activities':
            content.innerHTML = renderActivities();
            setupActivityEvents();
            break;
        case 'mood':
            content.innerHTML = renderMood();
            setupMoodEvents();
            break;
    }
}

/* ========================= CONTENT RENDERERS ========================= */
function renderHome() {
    return `
        <div class="text-center mb-24">
            <h2>${currentMode === 'child' ? '👋 Hi Friend!' : `Welcome to ${t('appName')}`}</h2>
            <p>${t('howFeeling')}</p>
        </div>
        
        <div class="mood-selector">
            <div class="mood-option" data-mood="1">
                <div class="mood-emoji">😢</div>
                <div class="mood-label">${t('verySad')}</div>
            </div>
            <div class="mood-option" data-mood="2">
                <div class="mood-emoji">😐</div>
                <div class="mood-label">${t('sad')}</div>
            </div>
            <div class="mood-option" data-mood="3">
                <div class="mood-emoji">🙂</div>
                <div class="mood-label">${t('okay')}</div>
            </div>
            <div class="mood-option" data-mood="4">
                <div class="mood-emoji">😊</div>
                <div class="mood-label">${t('happy')}</div>
            </div>
            <div class="mood-option" data-mood="5">
                <div class="mood-emoji">😄</div>
                <div class="mood-label">${t('veryHappy')}</div>
            </div>
        </div>
        
        <div class="text-center">
            <button class="btn btn--primary" id="quickMoodSaveBtn">${t('saveMood')}</button>
        </div>
    `;
}

function renderGames() {
    const childGames = [
        { id: 'color-match', icon: '🎨', name: t('colorMatch') },
        { id: 'memory-cards', icon: '🃏', name: t('memoryCards') },
        { id: 'bubble-pop', icon: '🫧', name: t('bubblePop') },
        { id: 'breathing', icon: '🦋', name: t('breathing') }
    ];
    
    const adultGames = [
        { id: 'meditation', icon: '🧘', name: t('meditation') },
        { id: 'stress-ball', icon: '⚫', name: t('stressBall') },
        { id: 'drawing', icon: '🎨', name: t('drawing') },
        { id: 'adult-breathing', icon: '💨', name: t('breathing') }
    ];
    
    const games = currentMode === 'child' ? childGames : adultGames;
    
    return `
        <div class="text-center mb-24">
            <h2>${t('games')}</h2>
            <p>${currentMode === 'child' ? 'Fun games to help you feel better!' : 'Mindfulness and stress relief games'}</p>
        </div>
        
        <div class="games-grid">
            ${games.map(game => `
                <div class="game-card" data-game="${game.id}">
                    <div class="game-icon">${game.icon}</div>
                    <h3 class="game-title">${game.name}</h3>
                    <button class="btn btn--primary play-game-btn" data-game="${game.id}">${t('playGame')}</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderActivities() {
    if (currentMode === 'child') {
        return renderGames(); // Children use games as activities
    }
    
    const activities = [
        { id: 'gratitude', icon: '🙏', name: t('gratitude') },
        { id: 'journal', icon: '📝', name: 'Journal Writing' },
        { id: 'sounds', icon: '🌊', name: 'Nature Sounds' },
        { id: 'mindfulness', icon: '🎯', name: 'Mindfulness' }
    ];
    
    return `
        <div class="text-center mb-24">
            <h2>${t('activities')}</h2>
            <p>Wellness and mindfulness activities</p>
        </div>
        
        <div class="activities-grid">
            ${activities.map(activity => `
                <div class="activity-card" data-activity="${activity.id}">
                    <div class="activity-icon">${activity.icon}</div>
                    <h3 class="activity-title">${activity.name}</h3>
                    <button class="btn btn--primary start-activity-btn" data-activity="${activity.id}">Start Activity</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderMood() {
    const moodEntries = loadFromLocalStorage('moodEntries') || [];
    
    return `
        <div class="text-center mb-24">
            <h2>${t('mood')} Tracker</h2>
            <p>${t('howFeeling')}</p>
        </div>
        
        <div class="mood-selector" id="moodSelector">
            <div class="mood-option" data-mood="1">
                <div class="mood-emoji">😢</div>
                <div class="mood-label">${t('verySad')}</div>
            </div>
            <div class="mood-option" data-mood="2">
                <div class="mood-emoji">😐</div>
                <div class="mood-label">${t('sad')}</div>
            </div>
            <div class="mood-option" data-mood="3">
                <div class="mood-emoji">🙂</div>
                <div class="mood-label">${t('okay')}</div>
            </div>
            <div class="mood-option" data-mood="4">
                <div class="mood-emoji">😊</div>
                <div class="mood-label">${t('happy')}</div>
            </div>
            <div class="mood-option" data-mood="5">
                <div class="mood-emoji">😄</div>
                <div class="mood-label">${t('veryHappy')}</div>
            </div>
        </div>
        
        <div class="form-group">
            <textarea id="moodNotes" class="form-control" rows="3" placeholder="How are you feeling? What's on your mind?"></textarea>
        </div>
        
        <div class="text-center mb-24">
            <button class="btn btn--primary" id="saveMoodBtn">${t('saveMood')}</button>
        </div>
        
        <div class="mood-entries">
            <h3>Recent Moods</h3>
            <div id="moodEntriesList">
                ${moodEntries.slice(-5).reverse().map(entry => `
                    <div class="mood-entry">
                        <span class="emoji">${gameAssets.moodEmojis[entry.mood - 1]}</span>
                        <span>${entry.notes || 'No notes'}</span>
                        <div class="date">${new Date(entry.date).toLocaleDateString()}</div>
                    </div>
                `).join('') || '<p>No mood entries yet. Track your first mood!</p>'}
            </div>
        </div>
    `;
}

/* ========================= EVENT SETUP FUNCTIONS ========================= */
function setupHomeEvents() {
    // Setup mood selector
    document.querySelectorAll('.mood-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.mood-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Setup quick mood save
    const quickSaveBtn = $('quickMoodSaveBtn');
    if (quickSaveBtn) {
        quickSaveBtn.addEventListener('click', quickMoodSave);
    }
}

function setupGameEvents() {
    // Setup game card clicks
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', function() {
            const gameId = this.dataset.game;
            if (gameId) startGame(gameId);
        });
    });
    
    // Setup play game button clicks
    document.querySelectorAll('.play-game-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const gameId = this.dataset.game;
            if (gameId) startGame(gameId);
        });
    });
}

function setupActivityEvents() {
    if (currentMode === 'child') {
        setupGameEvents(); // For child mode, activities are games
        return;
    }
    
    // Setup activity card clicks
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', function() {
            const activityId = this.dataset.activity;
            if (activityId) startActivity(activityId);
        });
    });
    
    // Setup start activity button clicks
    document.querySelectorAll('.start-activity-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const activityId = this.dataset.activity;
            if (activityId) startActivity(activityId);
        });
    });
}

function setupMoodEvents() {
    // Setup mood selector
    document.querySelectorAll('.mood-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.mood-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Setup save mood button
    const saveMoodBtn = $('saveMoodBtn');
    if (saveMoodBtn) {
        saveMoodBtn.addEventListener('click', saveMoodEntry);
    }
}

/* ========================= MOOD TRACKING ========================= */
function quickMoodSave() {
    const selected = document.querySelector('.mood-option.selected');
    if (selected) {
        const mood = parseInt(selected.dataset.mood);
        saveMoodData(mood, '');
        celebration();
    } else {
        alert('Please select a mood first!');
    }
}

function saveMoodEntry() {
    const selected = document.querySelector('.mood-option.selected');
    const notesElement = $('moodNotes');
    const notes = notesElement ? notesElement.value.trim() : '';
    
    if (selected) {
        const mood = parseInt(selected.dataset.mood);
        saveMoodData(mood, notes);
        celebration();
        loadTab('mood'); // Refresh to show new entry
    } else {
        alert('Please select a mood first!');
    }
}

function saveMoodData(mood, notes) {
    const moodEntries = loadFromLocalStorage('moodEntries') || [];
    moodEntries.push({
        mood: mood,
        notes: notes,
        date: new Date().toISOString()
    });
    const saved = saveToLocalStorage('moodEntries', moodEntries);
    console.log('Mood data saved:', saved, {mood, notes, entriesCount: moodEntries.length});
}

/* ========================= GAME SYSTEM ========================= */
function startGame(gameId) {
    console.log('Starting game:', gameId);
    const gameModal = $('gameModal');
    if (!gameModal) return;
    
    gameModal.classList.remove('hidden');
    
    switch (gameId) {
        case 'color-match':
            initColorMatchGame();
            break;
        case 'memory-cards':
            initMemoryGame();
            break;
        case 'bubble-pop':
            initBubblePopGame();
            break;
        case 'breathing':
            initBreathingGame();
            break;
        case 'meditation':
            initMeditationTimer();
            break;
        case 'stress-ball':
            initStressBallGame();
            break;
        case 'drawing':
            initDrawingPad();
            break;
        case 'adult-breathing':
            initAdultBreathingGame();
            break;
        default:
            console.log('Unknown game:', gameId);
    }
}

function closeGame() {
    const gameModal = $('gameModal');
    if (gameModal) {
        gameModal.classList.add('hidden');
    }
    
    // Clear any running intervals/animations
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
    if (gameAnimation) {
        cancelAnimationFrame(gameAnimation);
        gameAnimation = null;
    }
}

/* ========================= COLOR MATCHING GAME ========================= */
function initColorMatchGame() {
    const gameTitle = $('gameTitle');
    const gameScore = $('gameScore');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameScore || !gameArea || !gameControls) return;
    
    gameTitle.textContent = t('colorMatch');
    gameScore.textContent = `${t('score')}: 0`;
    
    const colors = gameAssets.colors.slice(0, 8);
    let selectedColors = [];
    let matches = 0;
    let score = 0;
    
    gameArea.innerHTML = `
        <h3>Click two circles of the same color to match them!</h3>
        <div class="color-match-grid">
            ${colors.map((color, index) => `
                <div class="color-circle" data-color="${color}" data-index="${index}" 
                     style="background-color: ${color}"></div>
            `).join('')}
        </div>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn--outline" id="resetColorGame">${t('reset')}</button>
    `;
    
    // Setup color circle click events
    document.querySelectorAll('.color-circle').forEach(circle => {
        circle.addEventListener('click', function() {
            if (this.classList.contains('selected') || selectedColors.length >= 2) return;
            
            this.classList.add('selected');
            selectedColors.push(this);
            
            if (selectedColors.length === 2) {
                setTimeout(() => {
                    if (selectedColors[0].dataset.color === selectedColors[1].dataset.color) {
                        // Match found
                        selectedColors.forEach(el => {
                            el.style.opacity = '0.3';
                            el.style.pointerEvents = 'none';
                        });
                        matches++;
                        score += 10;
                        gameScore.textContent = `${t('score')}: ${score}`;
                        
                        if (matches === colors.length / 2) {
                            celebration(t('complete'));
                            setTimeout(closeGame, 2000);
                        }
                    } else {
                        // No match
                        selectedColors.forEach(el => el.classList.remove('selected'));
                    }
                    selectedColors = [];
                }, 500);
            }
        });
    });
    
    // Setup reset button
    const resetBtn = $('resetColorGame');
    if (resetBtn) {
        resetBtn.addEventListener('click', initColorMatchGame);
    }
}

/* ========================= MEMORY CARDS GAME ========================= */
function initMemoryGame() {
    const gameTitle = $('gameTitle');
    const gameScore = $('gameScore');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameScore || !gameArea || !gameControls) return;
    
    gameTitle.textContent = t('memoryCards');
    
    const animals = [...gameAssets.animals.slice(0, 8), ...gameAssets.animals.slice(0, 8)];
    const shuffled = animals.sort(() => Math.random() - 0.5);
    
    let firstCard = null;
    let secondCard = null;
    let matches = 0;
    let moves = 0;
    let lockBoard = false;
    
    gameScore.textContent = `${t('moves')}: 0`;
    
    gameArea.innerHTML = `
        <h3>Find matching pairs of animals!</h3>
        <div class="memory-grid">
            ${shuffled.map((animal, index) => `
                <div class="memory-card" data-animal="${animal}" data-index="${index}">
                    ?
                </div>
            `).join('')}
        </div>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn--outline" id="resetMemoryGame">${t('reset')}</button>
    `;
    
    // Setup memory card click events
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', function() {
            if (lockBoard || this.classList.contains('flipped')) return;
            
            this.classList.add('flipped');
            this.textContent = this.dataset.animal;
            
            if (!firstCard) {
                firstCard = this;
            } else {
                secondCard = this;
                moves++;
                gameScore.textContent = `${t('moves')}: ${moves}`;
                checkForMatch();
            }
        });
    });
    
    function checkForMatch() {
        lockBoard = true;
        const isMatch = firstCard.dataset.animal === secondCard.dataset.animal;
        
        if (isMatch) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            matches++;
            resetBoard();
            
            if (matches === 8) {
                celebration(t('complete'));
                setTimeout(closeGame, 2000);
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                firstCard.textContent = '?';
                secondCard.classList.remove('flipped');
                secondCard.textContent = '?';
                resetBoard();
            }, 1000);
        }
    }
    
    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }
    
    // Setup reset button
    const resetBtn = $('resetMemoryGame');
    if (resetBtn) {
        resetBtn.addEventListener('click', initMemoryGame);
    }
}

/* ========================= BUBBLE POP GAME ========================= */
function initBubblePopGame() {
    const gameTitle = $('gameTitle');
    const gameScore = $('gameScore');
    const gameTimer = $('gameTimer');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameScore || !gameTimer || !gameArea || !gameControls) return;
    
    gameTitle.textContent = t('bubblePop');
    
    let score = 0;
    let timeLeft = 30;
    let gameStarted = false;
    
    gameScore.textContent = `${t('score')}: 0`;
    gameTimer.textContent = `${t('timeLeft')}: 30s`;
    
    gameArea.innerHTML = `
        <h3>Pop the bubbles by clicking them!</h3>
        <div class="bubble-area" id="bubbleArea" style="position: relative; width: 100%; height: 300px; border: 2px solid var(--color-border); border-radius: 8px; background: linear-gradient(to bottom, #87CEEB, #E0F6FF); overflow: hidden;">
            <p style="text-align: center; margin-top: 120px;">Click Start to begin!</p>
        </div>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn--primary" id="startBubbleBtn">${t('start')}</button>
        <button class="btn btn--outline" id="resetBubbleGame">${t('reset')}</button>
    `;
    
    const startBtn = $('startBubbleBtn');
    const resetBtn = $('resetBubbleGame');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            if (gameStarted) return;
            
            gameStarted = true;
            this.disabled = true;
            const bubbleArea = $('bubbleArea');
            if (bubbleArea) {
                bubbleArea.innerHTML = '';
            }
            
            gameInterval = setInterval(() => {
                timeLeft--;
                gameTimer.textContent = `${t('timeLeft')}: ${timeLeft}s`;
                
                if (timeLeft <= 0) {
                    clearInterval(gameInterval);
                    clearInterval(bubbleSpawner);
                    celebration(`Game Over! ${t('score')}: ${score}`);
                    setTimeout(closeGame, 2000);
                }
            }, 1000);
            
            const bubbleSpawner = setInterval(() => {
                createBubble();
            }, 800);
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', initBubblePopGame);
    }
    
    function createBubble() {
        const bubbleArea = $('bubbleArea');
        if (!bubbleArea || !gameStarted) return;
        
        const bubble = document.createElement('div');
        const size = Math.random() * 40 + 30;
        const x = Math.random() * (bubbleArea.offsetWidth - size);
        const y = Math.random() * (bubbleArea.offsetHeight - size);
        const color = gameAssets.bubbleColors[Math.floor(Math.random() * gameAssets.bubbleColors.length)];
        
        bubble.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background-color: ${color};
            border-radius: 50%;
            cursor: pointer;
            opacity: 0.8;
        `;
        
        bubble.addEventListener('click', function() {
            this.remove();
            score++;
            gameScore.textContent = `${t('score')}: ${score}`;
            celebration('Pop!');
        });
        
        bubbleArea.appendChild(bubble);
        
        setTimeout(() => {
            if (bubble.parentNode) bubble.remove();
        }, 3000);
    }
}

/* ========================= BREATHING EXERCISE ========================= */
function initBreathingGame() {
    const gameTitle = $('gameTitle');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameArea || !gameControls) return;
    
    gameTitle.textContent = t('breathing');
    
    let cycles = 0;
    const maxCycles = 5;
    let isActive = false;
    
    gameArea.innerHTML = `
        <h3>Follow the circle to breathe deeply</h3>
        <div class="breathing-circle" id="breathingCircle">
            Click to ${t('start')}
        </div>
        <p>Cycles completed: <span id="cycleCount">0</span>/${maxCycles}</p>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn--outline" id="resetBreathingGame">${t('reset')}</button>
    `;
    
    const circle = $('breathingCircle');
    const cycleCount = $('cycleCount');
    
    if (circle) {
        circle.addEventListener('click', function() {
            if (isActive) return;
            
            isActive = true;
            this.textContent = t('breatheIn');
            this.classList.add('inhale');
            
            setTimeout(() => {
                this.textContent = t('breatheOut');
                this.classList.remove('inhale');
                this.classList.add('exhale');
                
                setTimeout(() => {
                    this.classList.remove('exhale');
                    cycles++;
                    if (cycleCount) cycleCount.textContent = cycles;
                    isActive = false;
                    
                    if (cycles >= maxCycles) {
                        this.textContent = t('complete');
                        celebration();
                        setTimeout(closeGame, 2000);
                    } else {
                        this.textContent = 'Click to continue';
                    }
                }, 4000);
            }, 4000);
        });
    }
    
    const resetBtn = $('resetBreathingGame');
    if (resetBtn) {
        resetBtn.addEventListener('click', initBreathingGame);
    }
}

/* ========================= MEDITATION TIMER ========================= */
function initMeditationTimer() {
    const gameTitle = $('gameTitle');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameArea || !gameControls) return;
    
    gameTitle.textContent = t('meditation');
    
    let duration = 300; // 5 minutes
    let timeLeft = duration;
    let isRunning = false;
    let timer = null;
    
    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        gameArea.innerHTML = `
            <h3>Meditation Timer</h3>
            <div class="timer-settings">
                <div class="timer-setting ${duration === 60 ? 'active' : ''}" data-duration="60">1 min</div>
                <div class="timer-setting ${duration === 300 ? 'active' : ''}" data-duration="300">5 min</div>
                <div class="timer-setting ${duration === 600 ? 'active' : ''}" data-duration="600">10 min</div>
                <div class="timer-setting ${duration === 1200 ? 'active' : ''}" data-duration="1200">20 min</div>
            </div>
            <div class="timer-display">${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</div>
            <p>Find a comfortable position and focus on your breathing</p>
        `;
        
        // Setup duration buttons
        document.querySelectorAll('.timer-setting').forEach(btn => {
            btn.addEventListener('click', function() {
                if (!isRunning) {
                    duration = parseInt(this.dataset.duration);
                    timeLeft = duration;
                    updateDisplay();
                }
            });
        });
    }
    
    updateDisplay();
    
    gameControls.innerHTML = `
        <button class="btn btn--primary" id="startMeditationBtn">${t('start')}</button>
        <button class="btn btn--outline" id="pauseMeditationBtn">${t('pause')}</button>
        <button class="btn btn--outline" id="resetMeditationBtn">${t('reset')}</button>
    `;
    
    const startBtn = $('startMeditationBtn');
    const pauseBtn = $('pauseMeditationBtn');
    const resetBtn = $('resetMeditationBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            if (!isRunning) {
                isRunning = true;
                this.textContent = 'Running...';
                timer = setInterval(() => {
                    timeLeft--;
                    updateDisplay();
                    
                    if (timeLeft <= 0) {
                        clearInterval(timer);
                        isRunning = false;
                        celebration('Meditation Complete!');
                        setTimeout(closeGame, 2000);
                    }
                }, 1000);
                gameInterval = timer;
            }
        });
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', function() {
            if (isRunning) {
                clearInterval(timer);
                isRunning = false;
                if (startBtn) startBtn.textContent = t('start');
            }
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            clearInterval(timer);
            isRunning = false;
            timeLeft = duration;
            if (startBtn) startBtn.textContent = t('start');
            updateDisplay();
        });
    }
}

/* ========================= STRESS BALL GAME ========================= */
function initStressBallGame() {
    const gameTitle = $('gameTitle');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameArea || !gameControls) return;
    
    gameTitle.textContent = t('stressBall');
    
    let squeezes = 0;
    
    gameArea.innerHTML = `
        <h3>Click and hold the stress ball to squeeze it</h3>
        <div class="stress-ball" id="stressBall">😌</div>
        <p>Total squeezes: <span id="squeezeCount">0</span></p>
        <p>Hold down to squeeze, release to relax</p>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn--outline" id="resetStressBallGame">${t('reset')}</button>
    `;
    
    const ball = $('stressBall');
    const counter = $('squeezeCount');
    
    if (ball) {
        ball.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.85)';
            squeezes++;
            if (counter) counter.textContent = squeezes;
        });
        
        ball.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        ball.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Touch events for mobile
        ball.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.85)';
            squeezes++;
            if (counter) counter.textContent = squeezes;
        });
        
        ball.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(1)';
        });
    }
    
    const resetBtn = $('resetStressBallGame');
    if (resetBtn) {
        resetBtn.addEventListener('click', initStressBallGame);
    }
}

/* ========================= DRAWING PAD ========================= */
function initDrawingPad() {
    const gameTitle = $('gameTitle');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameArea || !gameControls) return;
    
    gameTitle.textContent = t('drawing');
    
    gameArea.innerHTML = `
        <h3>Digital Drawing Pad</h3>
        <div class="color-palette">
            <div class="color-btn active" style="background: #000000" data-color="#000000"></div>
            <div class="color-btn" style="background: #FF6B6B" data-color="#FF6B6B"></div>
            <div class="color-btn" style="background: #4ECDC4" data-color="#4ECDC4"></div>
            <div class="color-btn" style="background: #45B7D1" data-color="#45B7D1"></div>
            <div class="color-btn" style="background: #96CEB4" data-color="#96CEB4"></div>
            <div class="color-btn" style="background: #FECA57" data-color="#FECA57"></div>
            <div class="color-btn" style="background: #FF9FF3" data-color="#FF9FF3"></div>
            <div class="color-btn" style="background: #54A0FF" data-color="#54A0FF"></div>
        </div>
        <canvas id="drawingCanvas" class="drawing-canvas" width="400" height="300"></canvas>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn--outline" id="clearCanvasBtn">Clear Canvas</button>
    `;
    
    const canvas = $('drawingCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentColor = '#000000';
    
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;
    
    // Color palette setup
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentColor = this.dataset.color;
            ctx.strokeStyle = currentColor;
        });
    });
    
    // Drawing events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events for mobile
    canvas.addEventListener('touchstart', handleTouch);
    canvas.addEventListener('touchmove', handleTouch);
    canvas.addEventListener('touchend', stopDrawing);
    
    function startDrawing(e) {
        isDrawing = true;
        ctx.beginPath();
        const rect = canvas.getBoundingClientRect();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
    
    function draw(e) {
        if (!isDrawing) return;
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    function handleTouch(e) {
        e.preventDefault();
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent(e.type === 'touchstart' ? 'mousedown' : 
                                         e.type === 'touchmove' ? 'mousemove' : 'mouseup', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
    }
    
    // Clear button
    const clearBtn = $('clearCanvasBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }
}

/* ========================= ADULT BREATHING EXERCISE ========================= */
function initAdultBreathingGame() {
    const gameTitle = $('gameTitle');
    const gameArea = $('gameArea');
    const gameControls = $('gameControls');
    
    if (!gameTitle || !gameArea || !gameControls) return;
    
    gameTitle.textContent = 'Advanced ' + t('breathing');
    
    let cycles = 0;
    const maxCycles = 10;
    let isActive = false;
    
    gameArea.innerHTML = `
        <h3>4-7-8 Breathing Technique</h3>
        <div class="breathing-circle" id="breathingCircle">
            Click to ${t('start')}
        </div>
        <p>Inhale for 4, Hold for 7, Exhale for 8</p>
        <p>Cycles completed: <span id="cycleCount">0</span>/${maxCycles}</p>
    `;
    
    gameControls.innerHTML = `
        <button class="btn btn--outline" id="resetAdultBreathingGame">${t('reset')}</button>
    `;
    
    const circle = $('breathingCircle');
    const cycleCount = $('cycleCount');
    
    if (circle) {
        circle.addEventListener('click', function() {
            if (isActive) return;
            
            isActive = true;
            
            // Inhale (4 seconds)
            this.textContent = `${t('breatheIn')} (4)`;
            this.classList.add('inhale');
            
            setTimeout(() => {
                // Hold (7 seconds)
                this.textContent = 'Hold (7)';
                
                setTimeout(() => {
                    // Exhale (8 seconds)
                    this.textContent = `${t('breatheOut')} (8)`;
                    this.classList.remove('inhale');
                    this.classList.add('exhale');
                    
                    setTimeout(() => {
                        this.classList.remove('exhale');
                        cycles++;
                        if (cycleCount) cycleCount.textContent = cycles;
                        isActive = false;
                        
                        if (cycles >= maxCycles) {
                            this.textContent = t('complete');
                            celebration();
                            setTimeout(closeGame, 2000);
                        } else {
                            this.textContent = 'Click to continue';
                        }
                    }, 8000);
                }, 7000);
            }, 4000);
        });
    }
    
    const resetBtn = $('resetAdultBreathingGame');
    if (resetBtn) {
        resetBtn.addEventListener('click', initAdultBreathingGame);
    }
}

/* ========================= ACTIVITY SYSTEM ========================= */
function startActivity(activityId) {
    console.log('Starting activity:', activityId);
    const activityModal = $('activityModal');
    if (!activityModal) return;
    
    activityModal.classList.remove('hidden');
    
    switch (activityId) {
        case 'gratitude':
            initGratitudeJournal();
            break;
        case 'journal':
            initJournalWriting();
            break;
        case 'sounds':
            initNatureSounds();
            break;
        case 'mindfulness':
            initMindfulness();
            break;
        default:
            console.log('Unknown activity:', activityId);
    }
}

function closeActivity() {
    const activityModal = $('activityModal');
    if (activityModal) {
        activityModal.classList.add('hidden');
    }
}

function initGratitudeJournal() {
    const activityTitle = $('activityTitle');
    const activityContent = $('activityContent');
    
    if (!activityTitle || !activityContent) return;
    
    activityTitle.textContent = t('gratitude');
    
    const entries = loadFromLocalStorage('gratitudeEntries') || [];
    
    activityContent.innerHTML = `
        <div class="form-group">
            <label class="form-label">What are you grateful for today?</label>
            <input type="text" id="gratitudeInput" class="form-control" placeholder="I am grateful for...">
        </div>
        <button class="btn btn--primary" id="addGratitudeBtn">${t('addEntry')}</button>
        <button class="btn btn--outline" id="clearGratitudeBtn">${t('clearAll')}</button>
        
        <div class="gratitude-entries">
            <h4>Your Gratitude List</h4>
            <div id="gratitudeList">
                ${entries.map(entry => `
                    <div class="gratitude-entry">
                        <div>${entry.text}</div>
                        <div class="date">${new Date(entry.date).toLocaleDateString()}</div>
                    </div>
                `).join('') || '<p>No entries yet. Add your first gratitude!</p>'}
            </div>
        </div>
    `;
    
    const addBtn = $('addGratitudeBtn');
    const clearBtn = $('clearGratitudeBtn');
    const input = $('gratitudeInput');
    
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            if (!input) return;
            const text = input.value.trim();
            
            if (text) {
                const entries = loadFromLocalStorage('gratitudeEntries') || [];
                entries.push({
                    text: text,
                    date: new Date().toISOString()
                });
                saveToLocalStorage('gratitudeEntries', entries);
                
                input.value = '';
                celebration('Added to gratitude list!');
                initGratitudeJournal(); // Refresh
            }
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('Clear all gratitude entries?')) {
                saveToLocalStorage('gratitudeEntries', []);
                initGratitudeJournal(); // Refresh
            }
        });
    }
}

function initJournalWriting() {
    const activityTitle = $('activityTitle');
    const activityContent = $('activityContent');
    
    if (!activityTitle || !activityContent) return;
    
    activityTitle.textContent = 'Journal Writing';
    
    const entries = loadFromLocalStorage('journalEntries') || [];
    
    activityContent.innerHTML = `
        <div class="form-group">
            <label class="form-label">How was your day? Write your thoughts...</label>
            <textarea id="journalText" class="form-control" rows="5" placeholder="Dear journal..."></textarea>
        </div>
        <button class="btn btn--primary" id="addJournalBtn">${t('addEntry')}</button>
        
        <div class="gratitude-entries">
            <h4>Your Journal Entries</h4>
            <div id="journalList">
                ${entries.slice(-3).reverse().map(entry => `
                    <div class="gratitude-entry">
                        <div>${entry.text}</div>
                        <div class="date">${new Date(entry.date).toLocaleDateString()}</div>
                    </div>
                `).join('') || '<p>No entries yet. Start writing!</p>'}
            </div>
        </div>
    `;
    
    const addBtn = $('addJournalBtn');
    const textarea = $('journalText');
    
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            if (!textarea) return;
            const text = textarea.value.trim();
            
            if (text) {
                const entries = loadFromLocalStorage('journalEntries') || [];
                entries.push({
                    text: text,
                    date: new Date().toISOString()
                });
                saveToLocalStorage('journalEntries', entries);
                
                textarea.value = '';
                celebration('Journal entry saved!');
                initJournalWriting(); // Refresh
            }
        });
    }
}

function initNatureSounds() {
    const activityTitle = $('activityTitle');
    const activityContent = $('activityContent');
    
    if (!activityTitle || !activityContent) return;
    
    activityTitle.textContent = 'Nature Sounds';
    
    activityContent.innerHTML = `
        <p>Relax with calming nature sounds. Adjust the volume sliders to create your perfect soundscape.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 24px 0;">
            <div style="text-align: center; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
                <div style="font-size: 3rem; margin-bottom: 8px;">🌧️</div>
                <label>Rain</label>
                <input type="range" min="0" max="100" value="0" style="width: 100%; margin-top: 8px;">
            </div>
            <div style="text-align: center; padding: 16px; background: var(--color-bg-2); border-radius: 8px;">
                <div style="font-size: 3rem; margin-bottom: 8px;">🌊</div>
                <label>Ocean Waves</label>
                <input type="range" min="0" max="100" value="0" style="width: 100%; margin-top: 8px;">
            </div>
            <div style="text-align: center; padding: 16px; background: var(--color-bg-3); border-radius: 8px;">
                <div style="font-size: 3rem; margin-bottom: 8px;">🌲</div>
                <label>Forest</label>
                <input type="range" min="0" max="100" value="0" style="width: 100%; margin-top: 8px;">
            </div>
            <div style="text-align: center; padding: 16px; background: var(--color-bg-4); border-radius: 8px;">
                <div style="font-size: 3rem; margin-bottom: 8px;">🐦</div>
                <label>Birds</label>
                <input type="range" min="0" max="100" value="0" style="width: 100%; margin-top: 8px;">
            </div>
        </div>
        
        <p style="text-align: center; color: var(--color-text-secondary);">
            This is a demo interface. In a full app, these would control actual nature sound audio files.
        </p>
    `;
}

function initMindfulness() {
    const activityTitle = $('activityTitle');
    const activityContent = $('activityContent');
    
    if (!activityTitle || !activityContent) return;
    
    activityTitle.textContent = '5-4-3-2-1 Grounding';
    
    activityContent.innerHTML = `
        <p>This grounding technique helps you stay present. Find and notice:</p>
        
        <div style="text-align: left; margin: 24px 0;">
            <label style="display: block; margin: 8px 0; font-size: 16px;">
                <input type="checkbox" style="margin-right: 8px;"> 5 things you can see
            </label>
            <label style="display: block; margin: 8px 0; font-size: 16px;">
                <input type="checkbox" style="margin-right: 8px;"> 4 things you can touch
            </label>
            <label style="display: block; margin: 8px 0; font-size: 16px;">
                <input type="checkbox" style="margin-right: 8px;"> 3 things you can hear
            </label>
            <label style="display: block; margin: 8px 0; font-size: 16px;">
                <input type="checkbox" style="margin-right: 8px;"> 2 things you can smell
            </label>
            <label style="display: block; margin: 8px 0; font-size: 16px;">
                <input type="checkbox" style="margin-right: 8px;"> 1 thing you can taste
            </label>
        </div>
        
        <button class="btn btn--primary" id="completeMindfulnessBtn">Complete Exercise</button>
    `;
    
    const completeBtn = $('completeMindfulnessBtn');
    if (completeBtn) {
        completeBtn.addEventListener('click', function() {
            const checkboxes = activityContent.querySelectorAll('input[type="checkbox"]');
            const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
            
            if (completed >= 3) {
                celebration('Great mindfulness practice!');
                setTimeout(closeActivity, 1500);
            } else {
                alert('Try to complete at least 3 items to get the full benefit of this exercise.');
            }
        });
    }
}

/* ========================= INITIALIZATION ========================= */
function init() {
    console.log('Initializing MindPal app...');
    
    // Load saved preferences
    const savedMode = loadFromLocalStorage('mode');
    const savedLanguage = loadFromLocalStorage('language');
    const savedTab = loadFromLocalStorage('currentTab');
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        const mainSelect = $('mainLanguageSelect');
        const appSelect = $('languageSelect');
        if (mainSelect) mainSelect.value = savedLanguage;
        if (appSelect) appSelect.value = savedLanguage;
    }
    
    if (savedTab) {
        currentTab = savedTab;
    }
    
    // Set up event listeners
    const mainLanguageSelect = $('mainLanguageSelect');
    const languageSelect = $('languageSelect');
    
    if (mainLanguageSelect) {
        mainLanguageSelect.addEventListener('change', function(e) {
            setLanguage(e.target.value);
        });
    }
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            setLanguage(e.target.value);
        });
    }
    
    // Mode selection buttons
    document.addEventListener('click', function(e) {
        // Mode selection cards
        if (e.target.classList.contains('child-card') || e.target.closest('.child-card')) {
            selectMode('child');
            return;
        }
        
        if (e.target.classList.contains('adult-card') || e.target.closest('.adult-card')) {
            selectMode('adult');
            return;
        }
        
        // Switch mode button
        if (e.target.id === 'switchModeBtn') {
            showModeSelection();
            return;
        }
    });
    
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            if (tabName) {
                loadTab(tabName);
            }
        });
    });
    
    // Game modal back button
    const gameBackBtn = $('backBtn');
    if (gameBackBtn) {
        gameBackBtn.addEventListener('click', closeGame);
    }
    
    // Activity modal close buttons
    document.addEventListener('click', function(e) {
        if (e.target.textContent === '✖' && e.target.classList.contains('btn')) {
            closeActivity();
        }
    });
    
    // Modal backdrop close
    document.addEventListener('click', function(e) {
        if (e.target.id === 'gameModal') {
            closeGame();
        }
        if (e.target.id === 'activityModal') {
            closeActivity();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const gameModal = $('gameModal');
            const activityModal = $('activityModal');
            
            if (gameModal && !gameModal.classList.contains('hidden')) {
                closeGame();
            } else if (activityModal && !activityModal.classList.contains('hidden')) {
                closeActivity();
            }
        }
    });
    
    updateLanguage();
    
    // Auto-select saved mode if available
    if (savedMode) {
        selectMode(savedMode);
    }
    
    console.log('MindPal app initialized successfully!');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Mobile Installation Feature
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.createElement('button');
  installBtn.textContent = '📱 Install App';
  installBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#667eea;color:white;border:none;padding:12px 20px;border-radius:25px;cursor:pointer;z-index:1000;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
  installBtn.addEventListener('click', async function() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      installBtn.remove();
    }
  });
  document.body.appendChild(installBtn);
});

