//reload to 0:0
 window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
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
        <img class="zoom" src="files/certificates/codecamp-js.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.webp" draggable="false" alt="Platzi Certificate">    
    </div>

    <!-- stop -->

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/async.webp" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/git.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/frontend.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/logic-thoughts.webp" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/poo.webp" draggable="false" alt="Platzi Certificate">    
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/practico-js.webp" draggable="false" alt="Platzi Certificate">    
    </div>
    

    `
    loadMore.style.display = 'none'
    undoText.style.display = 'flex'
}
function undo() {
    certificateGrid.innerHTML = `

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/codecamp-js.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.webp" draggable="false" alt="Platzi Certificate">    
    </div>

    `
    loadMore.style.display = 'flex'
    undoText.style.display = 'none'
}

if (window.matchMedia('screen and (min-width: 840px)').matches == true){
    certificateGrid.innerHTML = `

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/codecamp-js.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.webp" draggable="false" alt="Platzi Certificate">    
    </div>

    <!-- stop -->

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/async.webp" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/git.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/frontend.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/logic-thoughts.webp" draggable="false" alt="Platzi Certificate">    
    </div>  
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/poo.webp" draggable="false" alt="Platzi Certificate">    
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/practico-js.webp" draggable="false" alt="Platzi Certificate">    
    </div>

    `
    loadMore.style.display = 'none'
    undoText.style.display = 'flex'
} else {
    certificateGrid.innerHTML = 
    `

    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/codecamp-js.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/ecs6.webp" draggable="false" alt="Platzi Certificate">
    </div>
    <div id="center-img-grid">
        <img class="zoom" src="files/certificates/reactjs.webp" draggable="false" alt="Platzi Certificate">    
    </div>

    `
    loadMore.style.display = 'flex'
    undoText.style.display = 'none'
}

// please dont say how i live !
const loading = document.querySelector('#points')
const preloader = document.querySelector('#preloader')
setTimeout(() =>{
    loading.innerHTML = 'Loading'
    setTimeout(() =>{
        loading.innerHTML = 'Loading.'
        setTimeout(() =>{
            loading.innerHTML = 'Loading..'
            setTimeout(() =>{
                loading.innerHTML = 'Loading...'
                setTimeout(() =>{
                    loading.innerHTML = 'Loading....'
                    setTimeout(() =>{
                        loading.innerHTML = 'Loading.....'
                    },200)
                },200)
            },200)
        },200)
    },200)
},200)

setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
        // window.scrollTo(0, 0);
    }, 500)
}, 11)

// projects
const slider = document.querySelector('#slider');

const mylinks = document.querySelector('#mylinks');
const mylinksTab = document.querySelector('#mylinksTab');
const mylinkshover = document.querySelector('#mylinkshover');
const MLhoverContent = document.querySelector('#MLhoverContent');
const ml1 = document.querySelector('#ml1');
const ml2 = document.querySelector('#ml2');
const ml3 = document.querySelector('#ml3');
const ml4 = document.querySelector('#ml4');

const nftorio = document.querySelector('#nftorio');
const nftorioTab = document.querySelector('#nftorioTab');
const nftoriohover = document.querySelector('#nftoriohover');
const NFhoverContent = document.querySelector('#NFhoverContent');
const nf1 = document.querySelector('#nf1');
const nf2 = document.querySelector('#nf2');
const nf3 = document.querySelector('#nf3');
const nf4 = document.querySelector('#nf4');

const reactlinks = document.querySelector('#reactlinks');
const reactlinksTab = document.querySelector('#reactlinksTab');
const reactlinkshover = document.querySelector('#reactlinkshover');
const RLhoverContent = document.querySelector('#RLhoverContent');
const rml1 = document.querySelector('#rml1');
const rml2 = document.querySelector('#rml2');
const rml3 = document.querySelector('#rml3');
const rml4 = document.querySelector('#rml4');

const gallery1 = document.querySelector('#gallery1');
const gallery2 = document.querySelector('#gallery2');
const gallery3 = document.querySelector('#gallery3');
const gallery4 = document.querySelector('#gallery4');

nf1.style.opacity = '1'
nf1.style.display = 'flex'
nf2.style.display = 'none'
nf3.style.display = 'none'
nf4.style.display = 'none'

ml1.style.display = 'none'
ml2.style.display = 'none'
ml3.style.display = 'none'
ml4.style.display = 'none'

rml1.style.display = 'flex'
rml2.style.display = 'none'
rml3.style.display = 'none'
rml4.style.display = 'none'

nftorio.style.display = 'flex'
mylinks.style.display = 'none'
reactlinks.style.display = 'none'

mylinksTab.addEventListener('click', () => {
    nf1.style.display = 'none'
    nf2.style.display = 'none'
    nf3.style.display = 'none'
    nf4.style.display = 'none'
    
    ml1.style.opacity = '1'
    ml1.style.display = 'flex'
    ml2.style.display = 'none'
    ml3.style.display = 'none'
    ml4.style.display = 'none'
    
    rml1.style.display = 'flex'
    rml2.style.display = 'none'
    rml3.style.display = 'none'
    rml4.style.display = 'none'
    
    nftorio.style.display = 'none'
    mylinks.style.display = 'flex'
    reactlinks.style.display = 'none'

    gallery1.addEventListener('click', () => {
        ml1.style.opacity = '1'
        ml2.style.opacity = '0'
        ml3.style.opacity = '0'
        ml4.style.opacity = '0'
        setTimeout(() => {
            ml1.style.display = 'flex'
            ml2.style.display = 'none'
            ml3.style.display = 'none'
            ml4.style.display = 'none'
        },300)
    })
    gallery2.addEventListener('click', () => {
        ml1.style.opacity = '0'
        ml2.style.opacity = '1'
        ml3.style.opacity = '0'
        ml4.style.opacity = '0'
        setTimeout(() => {
            ml1.style.display = 'none'
            ml2.style.display = 'flex'
            ml3.style.display = 'none'
            ml4.style.display = 'none'
        },300)
    })
    gallery3.addEventListener('click', () => {
        ml1.style.opacity = '0'
        ml2.style.opacity = '0'
        ml3.style.opacity = '1'
        ml4.style.opacity = '0'
        setTimeout(() => {
            ml1.style.display = 'none'
            ml2.style.display = 'none'
            ml3.style.display = 'flex'
            ml4.style.display = 'none'
        },300)
    })
    gallery4.addEventListener('click', () => {
        ml1.style.opacity = '0'
        ml2.style.opacity = '0'
        ml3.style.opacity = '0'
        ml4.style.opacity = '1'
        setTimeout(() => {
            ml1.style.display = 'none'
            ml2.style.display = 'none'
            ml3.style.display = 'none'
            ml4.style.display = 'flex'
        },300)
    })
})
nftorioTab.addEventListener('click', () => {
    nf1.style.opacity = '1'
    nf1.style.display = 'flex'
    nf2.style.display = 'none'
    nf3.style.display = 'none'
    nf4.style.display = 'none'
    
    ml1.style.display = 'none'
    ml2.style.display = 'none'
    ml3.style.display = 'none'
    ml4.style.display = 'none'
    
    rml1.style.display = 'flex'
    rml2.style.display = 'none'
    rml3.style.display = 'none'
    rml4.style.display = 'none'
    
    nftorio.style.display = 'flex'
    mylinks.style.display = 'none'
    reactlinks.style.display = 'none'

    gallery1.addEventListener('click', () => {
        nf1.style.opacity = '1'
        nf2.style.opacity = '0'
        nf3.style.opacity = '0'
        nf4.style.opacity = '0'
        setTimeout(() => {
            nf1.style.display = 'flex'
            nf2.style.display = 'none'
            nf3.style.display = 'none'
            nf4.style.display = 'none'
        },300)
    })
    gallery2.addEventListener('click', () => {
        nf1.style.opacity = '0'
        nf2.style.opacity = '1'
        nf3.style.opacity = '0'
        nf4.style.opacity = '0'
        setTimeout(() => {
            nf1.style.display = 'none'
            nf2.style.display = 'flex'
            nf3.style.display = 'none'
            nf4.style.display = 'none'
        },300)
    })
    gallery3.addEventListener('click', () => {
        nf1.style.opacity = '0'
        nf2.style.opacity = '0'
        nf3.style.opacity = '1'
        nf4.style.opacity = '0'
        setTimeout(() => {
            nf1.style.display = 'none'
            nf2.style.display = 'none'
            nf3.style.display = 'flex'
            nf4.style.display = 'none'
        },300)
    })
    gallery4.addEventListener('click', () => {
        nf1.style.opacity = '0'
        nf2.style.opacity = '0'
        nf3.style.opacity = '0'
        nf4.style.opacity = '1'
        setTimeout(() => {
            nf1.style.display = 'none'
            nf2.style.display = 'none'
            nf3.style.display = 'none'
            nf4.style.display = 'flex'
        },300)
    })
})
reactlinksTab.addEventListener('click', () => {
    nf1.style.display = 'flex'
    nf2.style.display = 'none'
    nf3.style.display = 'none'
    nf4.style.display = 'none'
    
    ml1.style.display = 'none'
    ml2.style.display = 'none'
    ml3.style.display = 'none'
    ml4.style.display = 'none'

    rml1.style.opacity = '1'
    rml1.style.display = 'flex'
    rml2.style.display = 'none'
    rml3.style.display = 'none'
    rml4.style.display = 'none'
    
    nftorio.style.display = 'none'
    mylinks.style.display = 'none'
    reactlinks.style.display = 'flex'

    gallery1.addEventListener('click', () => {
        rml1.style.opacity = '1'
        rml2.style.opacity = '0'
        rml3.style.opacity = '0'
        rml4.style.opacity = '0'
        setTimeout(() => {
            rml1.style.display = 'flex'
            rml2.style.display = 'none'
            rml3.style.display = 'none'
            rml4.style.display = 'none'
        },300)
    })
    gallery2.addEventListener('click', () => {
        rml1.style.opacity = '0'
        rml2.style.opacity = '1'
        rml3.style.opacity = '0'
        rml4.style.opacity = '0'
        setTimeout(() => {
            rml1.style.display = 'none'
            rml2.style.display = 'flex'
            rml3.style.display = 'none'
            rml4.style.display = 'none'
        },300)
    })
    gallery3.addEventListener('click', () => {
        rml1.style.opacity = '0'
        rml2.style.opacity = '0'
        rml3.style.opacity = '1'
        rml4.style.opacity = '0'
        setTimeout(() => {
            rml1.style.display = 'none'
            rml2.style.display = 'none'
            rml3.style.display = 'flex'
            rml4.style.display = 'none'
        },300)
    })
    gallery4.addEventListener('click', () => {
        rml1.style.opacity = '0'
        rml2.style.opacity = '0'
        rml3.style.opacity = '0'
        rml4.style.opacity = '1'
        setTimeout(() => {
            rml1.style.display = 'none'
            rml2.style.display = 'none'
            rml3.style.display = 'none'
            rml4.style.display = 'flex'
        },300)
    })
})

MLhoverContent.style.display = 'none'
NFhoverContent.style.display = 'none'
RLhoverContent.style.display = 'none'

mylinks.addEventListener('mouseover', () => {
    mylinkshover.style.height = '50%'
    mylinkshover.style.opacity = '1'
    setTimeout(()=> {
        MLhoverContent.style.display = 'flex'
    },250)
})
mylinks.addEventListener('mouseleave', () => {
    mylinkshover.style.height = '0'
    mylinkshover.style.opacity = '0'
    setTimeout(()=> {
        MLhoverContent.style.display = 'none'
    },250)
})

nftorio.addEventListener('mouseover', () => {
    nftoriohover.style.height = '60%'
    nftoriohover.style.opacity = '1'
    setTimeout(()=> {
        NFhoverContent.style.display = 'flex'
    },250)
})
nftorio.addEventListener('mouseleave', () => {
    nftoriohover.style.height = '0'
    nftoriohover.style.opacity = '0'
    setTimeout(()=> {
        NFhoverContent.style.display = 'none'
    },250)
})

reactlinks.addEventListener('mouseover', () => {
    reactlinkshover.style.height = '65%'
    reactlinkshover.style.opacity = '1'
    setTimeout(()=> {
        RLhoverContent.style.display = 'flex'
    },250)
})
reactlinks.addEventListener('mouseleave', () => {
    reactlinkshover.style.height = '0'
    reactlinkshover.style.opacity = '0'
    setTimeout(()=> {
        RLhoverContent.style.display = 'none'
    },250)
})
function mlref() {
    window.open('https://github.com/vittoopugliese/MyLinks')
}
function nfref() {
    window.open('https://nftorio.vittoriopugliese.com/')
}
function rmlref() {
    window.open('https://github.com/vittoopugliese/react-linktree')
}