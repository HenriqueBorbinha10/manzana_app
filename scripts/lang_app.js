// scripts/lang_app.js

function loadTranslations(lang) {
    fetch('scripts/translations_app.json')
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations[lang]);
        })
        .catch(error => console.error('Erro ao carregar traduções:', error));
}

function applyTranslations(translations) {
    document.getElementById('title').textContent = translations.title;
    document.getElementById('trucoManzana').textContent = translations.trucoManzana;
    document.getElementById('verdurasRecomendadas').textContent = translations.verdurasRecomendadas;
    document.getElementById('tecnicaAfrodita').textContent = translations.tecnicaAfrodita;
    document.getElementById('teMilenarioAsiatico').textContent = translations.teMilenarioAsiatico;
    document.getElementById('hormonaAdelgazante').textContent = translations.hormonaAdelgazante;
    document.getElementById('tonicoHormonal').textContent = translations.tonicoHormonal;
}

// Detecta o idioma do navegador ou usa 'es' (Espanhol) como padrão
const userLang = navigator.language || navigator.userLanguage || 'es';
if (userLang.startsWith('fr')) {
    loadTranslations('fr');
} else if (userLang.startsWith('pt')) {
    loadTranslations('pt');
} else {
    loadTranslations('es'); // Default para Espanhol
}