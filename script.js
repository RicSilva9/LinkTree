function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute('src', 'https://avatars.githubusercontent.com/u/127501290?v=4')
    } else {
        img.setAttribute('src', 'https://xesque.rocketseat.dev/users/avatar/profile-6723037d-c532-49b6-88d9-499b10c30c39-1685798910435.jpg')
    }
}