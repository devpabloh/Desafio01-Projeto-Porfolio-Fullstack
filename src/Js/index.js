const settingsConfig = document.querySelector('.settingsConfig')
const settingsMenu = document.querySelector('.settingsMenu')
const themeToggle = document.querySelector('.themeToggle')
const languageSelect = document.querySelector('.languageSelect')

settingsConfig.addEventListener('click', () => {
    settingsMenu.classList.toggle('hidden')
    console.log('Menu visibility toggled:', !settingsMenu.classList.contains('hidden'))
})

function applyTheme(isDark){
    if(isDark){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }
}

themeToggle.addEventListener('click', ()=>{
    const isDark = !document.body.classList.contains('dark-mode')
    applyTheme(isDark)

    const currentLanguage = languageSelect.value
    updateLanguage(currentLanguage)
})

const translation = {
    'pt-BR': {
        languageLabel: '🌐 Idioma:',
        themeDark: '🌓 Tema Escuro',
        themeLight: '🌞 Tema claro'

        
    },
    'en-US': {
        languageLabel: '🌐 language:',
        themeDark: '🌓 dark theme',
        themeLight: '🌞 light theme'
    }
}

function updateLanguage(lang){
    const texts = translation[lang];
    const isDarkMode = document.body.classList.contains('dark-mode')

    themeToggle.textContent = isDarkMode ? texts.themeDark : texts.themeLight
    document.querySelector('label[for="languageSelect"]').textContent = texts.languageLabel
}

languageSelect.addEventListener('change', (e)=>{
    const selectedLanguage = e.target.value // estamos pegando o valor que foi selecionado no select da linguagem 
    updateLanguage(selectedLanguage) // Estamos passando ele para a função que vai fazer 

})
updateLanguage('pt-BR') // Aqui estamos passando a linguagem pt-BR, como padrão

