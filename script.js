function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute('src', './IMG-perfil/Foto-Perfil-light.png')
    } else {
        img.setAttribute('src', './IMG-perfil/Foto-Perfil.jpg')
    }
}