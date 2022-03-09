const toggleNav = document.querySelectorAll('#toggle-button')[0]
const navLinks = document.querySelectorAll('#nav-links')[0]

toggleNav.addEventListener("click", () => {
    navLinks.classList.toggle('active')
})

