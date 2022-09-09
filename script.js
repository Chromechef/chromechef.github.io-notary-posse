// const hideNavBar = document.getElementsByClassName("hide-nav-bar")
const hideNavBar = document.querySelectorAll('.hide-nav-bar')
const nav = document.getElementById("nav-responsive")
const navRevealButton = document.getElementById("logo-hamburger-button")
const mediaQuery = '(max-width: 600px)';
const mediaQueryList = window.matchMedia(mediaQuery);
const navContainer = document.getElementById("nav")


let smallScreen = false

// *** To modify the nav bar on smaller screens *** //
mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);
    if (event.matches) {
        smallScreen = true
        nav.classList.add('nav-hidden')


        console.log('The window is now 600px or under');
    } else {
        console.log('The window is now over 600px');
        smallScreen = false
    }
})

navRevealButton.addEventListener("click", () => {
    nav.classList.remove('nav-hidden')
    if (smallScreen) {
        navContainer.classList.add('nav-display')
    }
})

hideNavBar.forEach(link => {
    link.addEventListener("click", () => {
        console.log("click")
        nav.classList.add('nav-hidden')
        navContainer.classList.remove('nav-display')
    }
    )
})
