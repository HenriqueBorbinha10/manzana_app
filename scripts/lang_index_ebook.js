// scripts/lang_index.js

function loadTranslations(lang) {
    fetch('scripts/translations_ebook.json')
        .then(response => response.json())
        .then(translations => {
            applyTranslations(translations[lang]);
        })
        .catch(error => console.error('Erro ao carregar traduções:', error));
}

function applyTranslations(translations) {
    const urlParams = new URLSearchParams(window.location.search);
    const listLangsSuport = ["es", "fr"];
    const ebook = urlParams.get('ebook');
    const navigatorLang = (navigator.language || navigator.userLanguage || 'es').split('-')[0];
    const lang = listLangsSuport.includes(navigatorLang) ? navigatorLang : 'es';

    console.log('Linguagem obitida ', lang);
    
    document.getElementById('pageTitle').textContent = translations.pageTitle;
    document.getElementById('backButton').textContent = translations.backButton;
    document.getElementById('mainHeading').innerHTML = translations.mainHeading;
    document.getElementById('ebookText').textContent = translations.ebookText;

    if (ebook) {
      document.getElementById('ebook_pdf').href = `ebooks/fr/${ebook}.pdf`;
      document.getElementById('ebook_html').src = `ebooks/fr/${ebook}/${ebook}.html`;
    }
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