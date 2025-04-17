const settingsConfig = document.querySelector('.settingsConfig')
const settingsMenu = document.querySelector('.settingsMenu')
const themeToggle = document.querySelector('.themeToggle')
const languageSelect = document.querySelector('.languageSelect')

settingsConfig.addEventListener('click', () => {
    settingsMenu.classList.toggle('hidden')
    console.log('Menu visibility toggled:', !settingsMenu.classList.contains('hidden'))
})

themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode')

    if(document.body.classList.contains('dark-mode')){
        themeToggle.textContent = '🌞 Tema Claro';
    }else {
        themeToggle.textContent = '🌓 Tema Escuro';
    }
})

const translation = {
    'pt-BR': {
        themeToggle: '🌓 Tema Escuro',
        languageLabel: '🌐 Idioma:'
    },
    'en-US': {
        themeToggle: '🌓 Dark Theme',
        languageLabel: '🌐 Language:'
    }
}

function updateLanguage(lang){
    const texts = translation[lang];
    themeToggle.textContent = texts.themeToggle
    document.querySelector('label[for="languageSelect"]').textContent = texts.languageLabel
}

languageSelect.addEventListener('change', (e)=>{
    const selectedLanguage = e.target.value
    updateLanguage(selectedLanguage)

})

updateLanguage('pt-BR')

