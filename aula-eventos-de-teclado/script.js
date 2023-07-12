const navPerfil = document.getElementById("nav-perfil");
const linkDadosPerfil = document.getElementById('link-perfil-dados')
const perfilPrincipal = document.getElementById('perfil')

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit1') {
    if (navPerfil.style.display === 'block') {
      linkDadosPerfil.click()
    } else {
      navPerfil.style.display = 'block'
    }
   
    linkDadosPerfil.click()
  }
  if (event.code === 'Escape'){
    navPerfil.style.display = 'none'
  }
})

document.addEventListener('keyup', (event) => {
  console.log(event)
  if(event.code === 'shift'){
    perfilPrincipal.click()
  }
})