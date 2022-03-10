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

logo[0].onmouseover = function(){
    logoText[0].style.display = 'flex'
};
logo[0].onmouseleave = function(){
    logoText[0].style.display = 'none'
};

logo[1].onmouseover = function(){
    logoText[1].style.display = 'flex'
};
logo[1].onmouseleave = function(){
    logoText[1].style.display = 'none'
};
