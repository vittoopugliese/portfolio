// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

const toggleNav = document.querySelectorAll('#toggle-button')[0]
const navLinks = document.querySelectorAll('#nav-links')[0]
toggleNav.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

const logo = document.querySelectorAll('#logo')
const logoText = document.querySelectorAll('#logo-text')

for (let i=0; i<logo.length; i++){
    logo[i].addEventListener('mouseover', function(){
        logoText[i].style.display = 'flex'
    });
    logo[i].addEventListener('mouseleave', function(){
        logoText[i].style.display = 'none'
    });
}