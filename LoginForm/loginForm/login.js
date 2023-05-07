const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () => {
    container.classList.add('right-painel-active')
})

signInButton.addEventListener('click', () => {
    container.classList.remove('right-painel-active')
})

/* Cadastrar */
const salvar = document.getElementById('save')

salvar.addEventListener('click', () => {
    let chave = document.getElementById('name')
    let valor = document.getElementById("password")
    let valorConfrm = document.getElementById("confirmPassword")
    let key=chave.value
    let result=valor.value
    let resultConfrm=valorConfrm.value
    if(result == resultConfrm){
        localStorage.setItem(key, result)
        window.location = "http://127.0.0.1:5500/homepage/"
        alert("Informações Cadastradas")
    }else{
        alert("Informações Incoerentes")
    }
})