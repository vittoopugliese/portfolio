//reload to 0:0
 window.onbeforeunload = function () {
     window.scrollTo(0, 0);
 }


// toggle nav
const toggleNav = document.querySelectorAll('#toggle-button')[0]
const navLinks = document.querySelectorAll('#nav-links')[0]
const nav = document.querySelectorAll('#nav')[0]
toggleNav.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});

window.addEventListener("scroll", function () {
    window.scrollY > 100 && (nav.style.background = `rgba(21, 21, 27, 0.95)`);
    window.scrollY < 100 && (nav.style.background = `rgba(21, 21, 27, 0.25)`);
  });

// logo component
class techno extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.description;
        this.img;
    }
    static get observedAttributes(){
        return ['name', 'description', 'img'];
    }
    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "name":
                this.name = newValue;
            break;
            case "description":
                this.description = newValue;
            break;
            case "img":
                this.img = newValue;
            break;
        }
    }
    connectedCallback(){
        this.innerHTML = `
        <div id="logo-container">
            <div id="logo">
                <img draggable="false" src="${this.img}">
                <h5>${this.name}</h5>
            </div>
            <div id="logo-text">
            <p>${this.description}</p>
        </div>
        </div>`;
    }
}
window.customElements.define("tech-no", techno);

// onhover onleave
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

// make full footer vectorsss
const iso1 = document.querySelector('#iso-1')
const iso2 = document.querySelector('#iso-2')
const iso3 = document.querySelector('#iso-3')
const iso4 = document.querySelector('#iso-4')

iso1.addEventListener('mouseover', function(){
    iso1.src = 'files/svgs/lilleno.svg'
});
iso1.addEventListener('mouseleave', function(){
    iso1.src = 'files/svgs/livacio.svg'
});

iso2.addEventListener('mouseover', function(){
    iso2.src = 'files/svgs/gitlleno.svg'
});
iso2.addEventListener('mouseleave', function(){
    iso2.src = 'files/svgs/gitvacio.svg'
});

iso3.addEventListener('mouseover', function(){
    iso3.src = 'files/svgs/gmaillleno.svg'
});
iso3.addEventListener('mouseleave', function(){
    iso3.src = 'files/svgs/gmailvacio.svg'
});

iso4.addEventListener('mouseover', function(){
    iso4.src = 'files/svgs/whatsapplleno.svg'
});
iso4.addEventListener('mouseleave', function(){
    iso4.src = 'files/svgs/wspvacio.svg'
});


const certificateGrid = document.querySelector('#certificate-grid')
const loadMore = document.querySelector('#load-more')
const undoText = document.querySelector('#undo')



function loadMoreCertificates() {
    certificateGrid.innerHTML = `

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/codecamp-js.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/practico-js.png" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.png" draggable="false" alt="Platzi Certificate">    
    </div>

    <!-- stop -->

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/basic-js.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/frontend.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/logic-thoughts.png" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/poo.png" draggable="false" alt="Platzi Certificate">    
    </div>
    

    `
    loadMore.style.display = 'none'
    undoText.style.display = 'flex'
}
function undo() {
    certificateGrid.innerHTML = `

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/codecamp-js.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/practico-js.png" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.png" draggable="false" alt="Platzi Certificate">    
    </div>

    `
    loadMore.style.display = 'flex'
    undoText.style.display = 'none'
}

if (window.matchMedia('screen and (min-width: 840px)').matches == true){
    certificateGrid.innerHTML = `

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/codecamp-js.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/practico-js.png" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.png" draggable="false" alt="Platzi Certificate">    
    </div>

    <!-- stop -->

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/basic-js.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/frontend.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/logic-thoughts.png" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/poo.png" draggable="false" alt="Platzi Certificate">    
    </div>

    `
    loadMore.style.display = 'none'
    undoText.style.display = 'flex'
} else {
    certificateGrid.innerHTML = 
    `

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/codecamp-js.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.png" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/practico-js.png" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.png" draggable="false" alt="Platzi Certificate">    
    </div>

    `
    loadMore.style.display = 'flex'
    undoText.style.display = 'none'
}
