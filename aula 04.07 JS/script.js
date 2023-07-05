
const usernameInput = document.getElementById('login-usuario')
const errorMessages = document.getElementsByClassName('error-text')

const password = document.getElementById('login-senha')

// digitou o username errado

usernameInput.classList.add('error')
errorMessages[0].classList.add('visible')


// acertou o username e errou a senha

// acertou o username
usernameInput.classList.remove('error')
errorMessages[0].classList.remove('visible')
usernameInput.classList.add('correct')

//errou a senha

password.classList.add('error')
errorMessages[1].classList.add('visible')