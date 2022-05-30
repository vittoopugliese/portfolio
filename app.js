// language
const wrapper = document.getElementById("wrapper");
const idiomaWr = document.getElementById("idiomaWr");
const idioma = document.getElementById("idioma");
const en = document.getElementById("en");
const es = document.getElementById("es");
const br = document.getElementById("br");

body.style.overflow = "hidden";

function reloadInMyLanguage() {
  body.style.overflow = "hidden";
  idiomaWr.style.display = "none";
  idioma.style.display = "none";
  setTimeout(() => {
    location.reload();
    body.style.overflow = "auto";
  }, 150);
}

function selectLanguageButton() {
  window.scrollTo(0, 0);
  localStorage.removeItem("language");
  setTimeout(() => {
    location.reload();
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  en.addEventListener("click", () => {
    localStorage.setItem("language", "en");
    reloadInMyLanguage();
  });
  es.addEventListener("click", () => {
    localStorage.setItem("language", "es");
    reloadInMyLanguage();
  });
  br.addEventListener("click", () => {
    localStorage.setItem("language", "br");
    reloadInMyLanguage();
  });
});

// englich
if (localStorage.getItem("language") == "en") {
  wrapper.innerHTML = `
  <nav id="nav">
  <div class="container">
          <h1 id="nav-name"><a href="index.html">Portfolio</a></h1>
          <div id="toggle-button">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </div>
          <div id="selectLanguage" onclick="selectLanguageButton()"></div>
          <div id="nav-links">
              <ul>
                  <li><a href="#Projects">Projects</a></li>
                  <li><a href="#Knowledge">Knowledge</a></li>
                  <li><a href="#Certificates">Certificates</a></li>
                  <li><a href="#About">About me</a></li>
                  <li><a href="#Contact">Contact</a></li>
                  <li><a style="padding: 5px;" href="files/Vittorio Pugliese CV.pdf" download="Vittorio Pugliese CV" target="_blank" rel="noopener noreferrer"><button id="cv-button"><img src="files/svgs/pdf.png" draggable="false"></img><h1>Download CV</h1></button></a></li>
              </ul>
          </div>
  </div>
</nav>

<!-- Info -->
<div id="bg"></div>
<div id="landing-wrapper">
<section id="info-content">
  <header> 
      <h2>Hola!<br>My name is <a class="vp">Vittorio</a></h2>
      <h3>Web development and innovation passionate.
      <br>Ambitious, adventurer and  motivated <br>by art, order & work               
      <br>Currently learning Front-End with React.</h3>
  </header>
  <span id="image"><img src="files/avatar.png" alt="Avatar" draggable="false"></span>
</section>
</div>

<!-- Content-wrapper -->
<div id="content-wrapper"> 
<div id="center-wrapper">


<!-- Projects -->
<section id="Projects">
<div class="sticke" style="display: flex;"><h4>- Projects -</h4></div>
  <div id="slider">     
      <div id="tabs">
          <img id="mylinksTab" src="files/projects/mltab.png" draggable="false">
          <img id="nftorioTab" src="files/projects/nftab.png" draggable="false">
          <img id="reactlinksTab" src="files/projects/ltab.png" draggable="false">
      </div>



      
      <div id="mylinks">
          <img id="ml1" class="images" src="files/projects/mylinks1.webp" draggable="false">
          <img id="ml2" class="images" src="files/projects/mylinks2.webp" draggable="false">
          <img id="ml3" class="images" src="files/projects/mylinks3.webp" draggable="false">
          <img id="ml4" class="images" src="files/projects/mylinks4.webp" draggable="false">
          <div id="mylinkshover">
              <div id="MLhoverContent">
                  <h6>MyLinks</h6>
                  <p class="phover">Link tree made with pure JS and Firebase</p>
                  <a href="https://github.com/vittoopugliese/MyLinks" target="_blank"><img class="iconhover" src="files/svgs/gitlleno.svg"></a>
              </div>
          </div>
      </div>

      <div id="nftorio">
          <img id="nf1" class="images" src="files/projects/nftorio1.png" onclick="nfref()" draggable="false">
          <img id="nf2" class="images" src="files/projects/nftorio2.png" onclick="nfref()" draggable="false">
          <img id="nf3" class="images" src="files/projects/nftorio3.png" onclick="nfref()" draggable="false">
          <img id="nf4" class="images" src="files/projects/nftorio4.png" onclick="nfref()" draggable="false">
          <div id="nftoriohover">
              <div id="NFhoverContent">
                  <a href="https://nftorio.vittoriopugliese.com/" target="_blank"><img id="nfhover" src="files/projects/nftab.png"></a>
                  <p class="phover">This project is my own NFTs marketplace.<br>I'm building the entire UI/UX and then I will mint<br>and implement Metamask payments.</p>
              </div>
          </div>
      </div>

      <div id="reactlinks">
          <img id="rml1" class="images" src="files/projects/linktree1.png"  draggable="false">
          <img id="rml2" class="images" src="files/projects/linktree2.png"  draggable="false">
          <img id="rml3" class="images" src="files/projects/linktree3.png"  draggable="false">
          <img id="rml4" class="images" src="files/projects/linktree4.png"  draggable="false">
          <div id="reactlinkshover">
              <div id="RLhoverContent">
                  <h6>MyLinks</h6>
                  <p class="phover">Link tree made with React.js & Firebase</p>
                  <a href="https://github.com/vittoopugliese/react-linktree" target="_blank"><img class="iconhover" src="files/svgs/gitlleno.svg"></a>
              </div>
          </div>
      </div>

      <div id="buttoms">
          <span id="gallery1">1</span>
          <span id="gallery2">2</span>
          <span id="gallery3">3</span>
          <span id="gallery4">4</span>
      </div>
  </div>
</section>
<!-- Knowledge -->
<section id="Knowledge" style="margin-top:15px;"></section>
<div id="centered-container">
  <header> 
      <div class="sticke" style="display: flex;"><h4>- Knowledge -</h4></div>
      <h5 style="font-weight: 100 !important;">
          These are some of the technologies I am learning and using on my projects. <br>
          Also, I am familiarized with some Adobe tools that are not here.<br>
      </h5>
      
  </header>
</div>

<div id="malas">
<section id="grid-logo">
<!-- logo -->
<tech-no name="HTML" description="Hypertext markup language, it gives structure to the page. This works with 'Tags'." img="files/logos/html.webp"></tech-no>
<!-- logo -->
<tech-no name="CSS" description="Responsible for giving <i>Style</i> to the page. This works whit classes." img="files/logos/css.webp"></tech-no>
<!-- logo -->
<tech-no name="JavaScript" description="Programming language that allows you to put logic onto web pages." img="files/logos/js.webp"></tech-no>
<!-- logo -->
<tech-no name="Git" description="Source code management tool. It's used to control the versions of the page." img="files/logos/git.webp"></tech-no>
<!-- logo -->
<tech-no name="Bootstrap" description="Front-end framework used to put styles on the page using only css classes." img="files/logos/bootstrap.webp"></tech-no>
<!-- logo -->
<tech-no name="React JS" description="JavaScript library that's used for building user interfaces." img="files/logos/react.webp"></tech-no>
<!-- logo -->
<tech-no name="Firebase" description="Application development software. Databases, user registration & more." img="files/logos/firebase.webp"></tech-no>
<!-- logo -->
<tech-no name="TailWind" description="CSS framework for building custom user interfaces and give style to the page." img="files/logos/tailwind.webp"></tech-no>
<!-- logo -->
<tech-no name="Node JS" description="A JS runtime environment that allows JS to be run on the server-side." img="files/logos/nodejs.webp"></tech-no>
<!-- logo -->
<tech-no name="Photoshop" description="Adobe photo editing software." img="files/logos/ps.webp"></tech-no>
<!-- logo -->
<tech-no name="Spark AR" description="Augmented Reality platform to create AR effects and filters for cameras. AKA Instagram filters." img="files/logos/sparkar.webp"></tech-no>
<!-- logo -->
<tech-no name="FL Studio" description="''Formerly known as FruityLoops, is a music producer's dream.''" img="files/logos/fl.webp"></tech-no>  

</section>
</div>
<section id="Certificates">
<div id="bar"></div>

<!-- Certificates -->
<div id="centered-container" class="sticke">
  <h4 style="margin: 8px auto;">- Certificates -</h4>
</div>

<div id="certificate-grid"></div>

<h3 class="more" onclick="loadMoreCertificates()" id="load-more"  style="display: flex;font-style: italic;">Load More...</h3>
<h3 class="more" onclick="undo()" id="undo" style="display: none;font-style: italic;">Less</h3>
</section>

<section id="About">
<div id="bar"></div>

<!-- About me -->
<div id="centered-container">
  <h4 class="sticke" style="margin: 8px auto;">- Who Is Vittorio? -</h4>
  <!-- <img id="yo" src="https://avatars.githubusercontent.com/u/90337009?s=400&u=85e19dfa91e0d19e6d3d176be33ea04c78580637&v=4" alt="vittorio profile photo" draggable="false"> -->
  <header id="MyHeader"> 
      <h5 style="text-align: left;">My name is Vittorio Pugliese and I am a young man from Buenos Aires who loves to research and learn about computer science by himself. My first steps were around 2012 when I wanted to start making music on my computer. From that moment on, I always wanted to learn and do new things on my own.<br>
      <br>
      The first contact I had with coding was in 2019, in the last year of high school we were learning Pseudocode, but it wasn't until the last months of 2020 that I started learning JavaScript.<br>
      In this moment I have a solid base into pure JS, but now I'm learning React.js to build scalable websites and make bigger projects.<br>
      <br>
      I am a person who learns easily and is not afraid to ask if I'm doing something wrong.
      The next step I want to make is learn Next.js to start deploying professional websites.
      </h5>
  </header>
</div>
</section>

</div>
<!-- Footer -->
<section id="Contact">
<footer>
  <div id="more-info">
      <h5>Feel free to contact me and ask any question you have.</h5>
  </div>
  <div id="contact">
      <a class="link-to" target="_blank" href="https://www.linkedin.com/in/vittorio-pugliese-920996231/"><img id="iso-1" src="files/svgs/livacio.svg" alt="linkedin profile"></a>
      <a class="link-to" target="_blank" href="https://github.com/vittoopugliese"><img id="iso-2" src="files/svgs/gitvacio.svg" alt="github profile"></a>
      <a class="link-to" target="_blank" href="https://www.google.com/search?q=mailto+doesnt+work%2C+my+mail+is+vittoopugliese%40gmail.com&client=ms-android-samsung&sxsrf=APq-WBu6-xbw_QbVwWjeNBF5G3m11kMVyw%3A1647053526339&ei=1gosYpKjFMTN1sQPla2S0AU&ved=0ahUKEwiS5vPCyL_2AhXEppUCHZWWBFoQ4dUDCA4&uact=5&oq=mailto+doesnt+work%2C+my+mail+is+vittoopugliese%40gmail.com&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6BAghEApKBAhBGAFKBAhGGABQuxxYhDFg91loAnAAeACAAXGIAdQDkgEDMi4zmAEAoAEByAEBwAEB&sclient=gws-wiz"><img id="iso-3" src="files/svgs/gmailvacio.svg" alt="mailto"></a>
      <a class="link-to" target="_blank" href="https://api.whatsapp.com/send/?phone=+541178310432"><img id="iso-4" src="files/svgs/wspvacio.svg" alt="whatsapp number"></a>
  </div>
  <h3><i>Web made by <a target="_blank" href="https://instagram.com/vittoopugliese">Vittorio Pugliese</a> with pure JavaScript.</i></h3>
</footer>
</section>
<!-- End -->
</div>
</div>
    `;
  const selectLanguage = document.getElementById("selectLanguage");
  body.style.overflow = "auto";
  selectLanguage.style.backgroundImage = "url(files/svgs/USA.png)";
}

// espanich
if (localStorage.getItem("language") == "es") {
  wrapper.innerHTML = `
    <nav id="nav">
        <div class="container">
                <h1 id="nav-name"><a href="index.html">Portafolio</a></h1>
                <div id="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <div id="selectLanguage" onclick="selectLanguageButton()"></div>
                <div id="nav-links">
                    <ul>
                        <li><a href="#Projects">Proyectos</a></li>
                        <li><a href="#Knowledge">Conocimiento</a></li>
                        <li><a href="#Certificates">Certificados</a></li>
                        <li><a href="#About">Sobre mi</a></li>
                        <li><a href="#Contact">Contactame</a></li>
                        <li><a style="padding: 5px;" href="files/Vittorio Pugliese CV.pdf" download="Vittorio Pugliese CV" target="_blank" rel="noopener noreferrer"><button id="cv-button"><img src="files/svgs/pdf.png" draggable="false"></img><h1>Descargar CV</h1></button></a></li>
                    </ul>
                </div>
        </div>
    </nav>

    <!-- Info -->
    <div id="bg"></div>
    <div id="landing-wrapper">
    <section id="info-content">
        <header> 
            <h2>Hola!<br>Mi nombre es <a class="vp">Vittorio</a></h2>
            <h3>Apasionado del desarrollo web y la innovación.<br>Ambicioso, aventurero y motivado por el arte, el orden y el trabajo.<br> Actualmente estoy aprendiendo Front-End con React.</h3>
        </header>
        <span id="image"><img src="files/avatar.png" alt="Avatar" draggable="false"></span>
    </section>
    </div>
    
    <!-- Content-wrapper -->
    <div id="content-wrapper"> 
    <div id="center-wrapper">
    
    <!-- Projects -->
    <section id="Proyectos">
    <div class="sticke" style="display: flex;"><h4>- Proyectos -</h4></div>
        <div id="slider">     
            <div id="tabs">
                <img id="mylinksTab" src="files/projects/mltab.png" draggable="false">
                <img id="nftorioTab" src="files/projects/nftab.png" draggable="false">
                <img id="reactlinksTab" src="files/projects/ltab.png" draggable="false">
            </div>
    
            <div id="mylinks">
                <img id="ml1" class="images" src="files/projects/mylinks1.webp" draggable="false">
                <img id="ml2" class="images" src="files/projects/mylinks2.webp" draggable="false">
                <img id="ml3" class="images" src="files/projects/mylinks3.webp" draggable="false">
                <img id="ml4" class="images" src="files/projects/mylinks4.webp" draggable="false">
                <div id="mylinkshover">
                    <div id="MLhoverContent">
                        <h6>MyLinks</h6>
                        <p class="phover">Arbol de links hecho con JavaScript Puro y Firebase.</p>
                        <a href="https://github.com/vittoopugliese/MyLinks" target="_blank"><img class="iconhover" src="files/svgs/gitlleno.svg"></a>
                    </div>
                </div>
            </div>
    
            <div id="nftorio">
                <img id="nf1" class="images" src="files/projects/nftorio1.png" onclick="nfref()" draggable="false">
                <img id="nf2" class="images" src="files/projects/nftorio2.png" onclick="nfref()" draggable="false">
                <img id="nf3" class="images" src="files/projects/nftorio3.png" onclick="nfref()" draggable="false">
                <img id="nf4" class="images" src="files/projects/nftorio4.png" onclick="nfref()" draggable="false">
                <div id="nftoriohover">
                    <div id="NFhoverContent">
                        <a href="https://nftorio.vittoriopugliese.com/" target="_blank"><img id="nfhover" src="files/projects/nftab.png"></a>
                        <p class="phover">Este proyecto es mi propio marketplace de NFTs.<br>Estoyt construyendo todo el UI/UX, luego añejare<br>e implementare pagos con Metamask.</p>
                    </div>
                </div>
            </div>
    
            <div id="reactlinks">
                <img id="rml1" class="images" src="files/projects/linktree1.png"  draggable="false">
                <img id="rml2" class="images" src="files/projects/linktree2.png"  draggable="false">
                <img id="rml3" class="images" src="files/projects/linktree3.png"  draggable="false">
                <img id="rml4" class="images" src="files/projects/linktree4.png"  draggable="false">
                <div id="reactlinkshover">
                    <div id="RLhoverContent">
                        <h6>MyLinks</h6>
                        <p class="phover">Arbol de links hecho con React.js & Firebase</p>
                        <a href="https://github.com/vittoopugliese/react-linktree" target="_blank"><img class="iconhover" src="files/svgs/gitlleno.svg"></a>
                    </div>
                </div>
            </div>
    
            <div id="buttoms">
                <span id="gallery1">1</span>
                <span id="gallery2">2</span>
                <span id="gallery3">3</span>
                <span id="gallery4">4</span>
            </div>
        </div>
    </section>
    <!-- Knowledge -->
    <section id="Knowledge" style="margin-top:15px;"></section>
    <div id="centered-container">
        <header> 
            <div class="sticke" style="display: flex;"><h4>- Conocimiento -</h4></div>
            <h5 style="font-weight: 100 !important;">
             Estas son algunas de las tecnologias que estoy aprendiendo y usando en mis proyectos. <br>
               Tambien estoy familiarizado con algunas herramientas de adobe que no estan acá.<br>
            </h5>
            
        </header>
    </div>
    
    <div id="malas">
    <section id="grid-logo">
    <!-- logo -->
    <tech-no name="HTML" description="Lenguaje de marcado de hipertexto, le da estructura a la pagina. Funciona con 'Tags'." img="files/logos/html.webp"></tech-no>
    <!-- logo -->
    <tech-no name="CSS" description="Responsable de darle <i>Estilos</i> a la pagina. Funciona con clases." img="files/logos/css.webp"></tech-no>
    <!-- logo -->
    <tech-no name="JavaScript" description="Lenguaje de programacion que permite darle logica a una pagina web, tambien puede ser usado del lado del servidor." img="files/logos/js.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Git" description="Herramienta de administración. Es usado para controlar las versiones del codigo." img="files/logos/git.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Bootstrap" description="Framework Front-End usado para ponerle estilos a una pagina usando clases." img="files/logos/bootstrap.webp"></tech-no>
    <!-- logo -->
    <tech-no name="React JS" description="Libreria de JavaScript usada para construir interfaces de usuario." img="files/logos/react.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Firebase" description="Software dedicado al desarrollo de aplicaciones. Databases, Registracion de usuarios & mas." img="files/logos/firebase.webp"></tech-no>
    <!-- logo -->
    <tech-no name="TailWind" description="Framework CSS para construir interfaces de usuario y dar estilos a la pagina" img="files/logos/tailwind.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Node JS" description="Permite usar JavaScript en el servidor" img="files/logos/nodejs.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Photoshop" description="Software de edicion de fotos desarrollado por Adobe" img="files/logos/ps.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Spark AR" description="Plataforma desarrollada por Facebook para construir efectos en Realidad Aumentada" img="files/logos/sparkar.webp"></tech-no>
    <!-- logo -->
    <tech-no name="FL Studio" description="''Formerly known as FruityLoops, is a music producer's dream.''" img="files/logos/fl.webp"></tech-no>  
    
    </section>
    </div>
    <section id="Certificates">
    <div id="bar"></div>
    
    <!-- Certificates -->
    <div id="centered-container" class="sticke">
        <h4 style="margin: 8px auto;">- Certificados -</h4>
    </div>
    
    <div id="certificate-grid"></div>
    
    <h3 class="more" onclick="loadMoreCertificates()" id="load-more"  style="display: flex;font-style: italic;">Cargar mas..</h3>
    <h3 class="more" onclick="undo()" id="undo" style="display: none;font-style: italic;">Menos..</h3>
    </section>
    
    <section id="About">
    <div id="bar"></div>
    
    <!-- About me -->
    <div id="centered-container">
        <h4 class="sticke" style="margin: 8px auto;">- Quien es Vittorio? -</h4>
        <img id="yo" src="https://avatars.githubusercontent.com/u/90337009?s=400&u=85e19dfa91e0d19e6d3d176be33ea04c78580637&v=4" alt="vittorio profile photo" draggable="false">
        <header id="MyHeader"> 
            <h5 style="text-align: left;">Mi nombre es Vittorio Pugliese y soy un joven de Buenos Aires al que le encanta investigar y aprender informática por sí mismo. Mis primeros pasos fueron alrededor de 2012 cuando quería comenzar a hacer música en mi computadora. A partir de ese momento, siempre quise aprender y hacer cosas nuevas por mi cuenta.<br>
            <br>
            El primer contacto que tuve con la programación fue en 2019, en el último año de secundaria estábamos aprendiendo Pseudocódigo, pero no fue hasta los últimos meses de 2020 que comencé a aprender JavaScript.<br>
            En este momento tengo un sólido conocimiento en JavaScript, pero ahora estoy aprendiendo React.js para construir sitios web escalables y hacer proyectos más grandes.<br>
            <br>
            Soy una persona que aprende con facilidad y no tiene miedo de preguntar si está haciendo algo mal.
            El siguiente paso que quiero dar es aprender Next.js para comenzar a desplegar sitios web profesionales y escalables.</h5>
        </header>
    </div>
    </section>
    
    </div>
    <!-- Footer -->
    <section id="Contact">
    <footer>
        <div id="more-info">
            <h5>Sientase libre de contactarme!</h5>
        </div>
        <div id="contact">
            <a class="link-to" target="_blank" href="https://www.linkedin.com/in/vittorio-pugliese-920996231/"><img id="iso-1" src="files/svgs/livacio.svg" alt="linkedin profile"></a>
            <a class="link-to" target="_blank" href="https://github.com/vittoopugliese"><img id="iso-2" src="files/svgs/gitvacio.svg" alt="github profile"></a>
            <a class="link-to" target="_blank" href="https://www.google.com/search?q=mailto+doesnt+work%2C+my+mail+is+vittoopugliese%40gmail.com&client=ms-android-samsung&sxsrf=APq-WBu6-xbw_QbVwWjeNBF5G3m11kMVyw%3A1647053526339&ei=1gosYpKjFMTN1sQPla2S0AU&ved=0ahUKEwiS5vPCyL_2AhXEppUCHZWWBFoQ4dUDCA4&uact=5&oq=mailto+doesnt+work%2C+my+mail+is+vittoopugliese%40gmail.com&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6BAghEApKBAhBGAFKBAhGGABQuxxYhDFg91loAnAAeACAAXGIAdQDkgEDMi4zmAEAoAEByAEBwAEB&sclient=gws-wiz"><img id="iso-3" src="files/svgs/gmailvacio.svg" alt="mailto"></a>
            <a class="link-to" target="_blank" href="https://api.whatsapp.com/send/?phone=+541178310432"><img id="iso-4" src="files/svgs/wspvacio.svg" alt="whatsapp number"></a>
        </div>
        <h3><i>Web hecha por <a target="_blank" href="https://instagram.com/vittoopugliese">Vittorio Pugliese</a> Con JavaScript puro.</i></h3>
    </footer>
    </section>
    <!-- End -->
    </div>
    </div>
    `;
  const selectLanguage = document.getElementById("selectLanguage");
  body.style.overflow = "auto";
  selectLanguage.style.backgroundImage = "url(files/svgs/ARG.png)";
}
// espanich
if (localStorage.getItem("language") == "br") {
  wrapper.innerHTML = `
    <nav id="nav">
        <div class="container">
                <h1 id="nav-name"><a href="index.html">Portfólio</a></h1>
                <div id="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <div id="selectLanguage" onclick="selectLanguageButton()"></div>
                <div id="nav-links">
                    <ul>
                        <li><a href="#Projects">Projetos</a></li>
                        <li><a href="#Knowledge">Conocimiento</a></li>
                        <li><a href="#Certificates">Certificados</a></li>
                        <li><a href="#About">Sobre Mim</a></li>
                        <li><a href="#Contact">Nome de contato</a></li>
                        <li><a style="padding: 5px;" href="files/Vittorio Pugliese CV.pdf" download="Vittorio Pugliese CV" target="_blank" rel="noopener noreferrer"><button id="cv-button"><img src="files/svgs/pdf.png" draggable="false"></img><h1>Baixar CV</h1></button></a></li>
                    </ul>
                </div>
        </div>
    </nav>

    <!-- Info -->
    <div id="bg"></div>
    <div id="landing-wrapper">
    <section id="info-content">
        <header> 
            <h2>Olá!<br>Meu nome é <a class="vp">Vittorio</a></h2>
            <h3>Apasionado pelo desenvolvimento da web e pela inovação.<br>Ambicioso, aventureiro e motivado pela arte, pela ordem e pelo trabalho. <br> Atualmente estou aprendendo Front-End com React.</h3>
        </header>
        <span id="image"><img src="files/avatar.png" alt="Avatar" draggable="false"></span>
    </section>
    </div>
    
    <!-- Content-wrapper -->
    <div id="content-wrapper"> 
    <div id="center-wrapper">
    
    <!-- Projects -->
    <section id="Proyectos">
    <div class="sticke" style="display: flex;"><h4>- Projetos -</h4></div>
        <div id="slider">     
            <div id="tabs">
                <img id="mylinksTab" src="files/projects/mltab.png" draggable="false">
                <img id="nftorioTab" src="files/projects/nftab.png" draggable="false">
                <img id="reactlinksTab" src="files/projects/ltab.png" draggable="false">
            </div>
    
            <div id="mylinks">
                <img id="ml1" class="images" src="files/projects/mylinks1.webp" draggable="false">
                <img id="ml2" class="images" src="files/projects/mylinks2.webp" draggable="false">
                <img id="ml3" class="images" src="files/projects/mylinks3.webp" draggable="false">
                <img id="ml4" class="images" src="files/projects/mylinks4.webp" draggable="false">
                <div id="mylinkshover">
                    <div id="MLhoverContent">
                        <h6>MyLinks</h6>
                        <p class="phover">Árvore de links feita com JavaScript e Firebase.</p>
                        <a href="https://github.com/vittoopugliese/MyLinks" target="_blank"><img class="iconhover" src="files/svgs/gitlleno.svg"></a>
                    </div>
                </div>
            </div>
    
            <div id="nftorio">
                <img id="nf1" class="images" src="files/projects/nftorio1.png" onclick="nfref()" draggable="false">
                <img id="nf2" class="images" src="files/projects/nftorio2.png" onclick="nfref()" draggable="false">
                <img id="nf3" class="images" src="files/projects/nftorio3.png" onclick="nfref()" draggable="false">
                <img id="nf4" class="images" src="files/projects/nftorio4.png" onclick="nfref()" draggable="false">
                <div id="nftoriohover">
                    <div id="NFhoverContent">
                        <a href="https://nftorio.vittoriopugliese.com/" target="_blank"><img id="nfhover" src="files/projects/nftab.png"></a>
                        <p class="phover">Este projeto é meu próprio mercado NFT.<br>Estou construindo toda a UI/UX, então vou envelhecer <br>e implementar pagamentos com Metamask.</p>
                    </div>
                </div>
            </div>
    
            <div id="reactlinks">
                <img id="rml1" class="images" src="files/projects/linktree1.png"  draggable="false">
                <img id="rml2" class="images" src="files/projects/linktree2.png"  draggable="false">
                <img id="rml3" class="images" src="files/projects/linktree3.png"  draggable="false">
                <img id="rml4" class="images" src="files/projects/linktree4.png"  draggable="false">
                <div id="reactlinkshover">
                    <div id="RLhoverContent">
                        <h6>MyLinks</h6>
                        <p class="phover">Árvore de links feita com React.js e Firebase</p>
                        <a href="https://github.com/vittoopugliese/react-linktree" target="_blank"><img class="iconhover" src="files/svgs/gitlleno.svg"></a>
                    </div>
                </div>
            </div>
    
            <div id="buttoms">
                <span id="gallery1">1</span>
                <span id="gallery2">2</span>
                <span id="gallery3">3</span>
                <span id="gallery4">4</span>
            </div>
        </div>
    </section>
    <!-- Knowledge -->
    <section id="Knowledge" style="margin-top:15px;"></section>
    <div id="centered-container">
        <header> 
            <div class="sticke" style="display: flex;"><h4>- Conocimiento -</h4></div>
            <h5 style="font-weight: 100 !important;">
            Estas são algumas das tecnologias que estão aprendendo e usando em seus projetos. <br>
            Também estou ciente de algumas ferramentas adobe que eles não são mostrados aqui..<br>
            </h5>
            
        </header>
    </div>
    
    <div id="malas">
    <section id="grid-logo">
    <!-- logo -->
    <tech-no name="HTML" description="Linguagem de marcação de hipertexto, dá estrutura à página. Funciona com 'Etiquetas'." img="files/logos/html.webp"></tech-no>
    <!-- logo -->
    <tech-no name="CSS" description="Responsável por dar <i>Estilos</i> à página. Funciona com aulas." img="files/logos/css.webp"></tech-no>
    <!-- logo -->
    <tech-no name="JavaScript" description="Linguagem de programação que permite dar lógica a uma página web, também pode ser utilizada no lado do servidor." img="files/logos/js.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Git" description="Ferramenta de administração. Ele é usado para controlar as versões do código." img="files/logos/git.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Bootstrap" description="Front-End Framework usado para estilizar uma página usando classes." img="files/logos/bootstrap.webp"></tech-no>
    <!-- logo -->
    <tech-no name="React JS" description="Biblioteca JavaScript usada para construir interfaces de usuário." img="files/logos/react.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Firebase" description="Software dedicado ao desenvolvimento de aplicativos. Bancos de dados, registro de usuários e muito mais." img="files/logos/firebase.webp"></tech-no>
    <!-- logo -->
    <tech-no name="TailWind" description="Estrutura CSS para construir interfaces de usuário e estilizar a página" img="files/logos/tailwind.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Node JS" description="Permite usar JavaScript no servidor" img="files/logos/nodejs.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Photoshop" description="Software de edição de fotos desenvolvido pela Adobe" img="files/logos/ps.webp"></tech-no>
    <!-- logo -->
    <tech-no name="Spark AR" description="Plataforma desenvolvida pelo Facebook para construir efeitos em Realidade Aumentada" img="files/logos/sparkar.webp"></tech-no>
    <!-- logo -->
    <tech-no name="FL Studio" description="''Formerly known as FruityLoops, is a music producer's dream.''" img="files/logos/fl.webp"></tech-no>  
    
    </section>
    </div>
    <section id="Certificates">
    <div id="bar"></div>
    
    <!-- Certificates -->
    <div id="centered-container" class="sticke">
        <h4 style="margin: 8px auto;">- Certificados -</h4>
    </div>
    
    <div id="certificate-grid"></div>
    
    <h3 class="more" onclick="loadMoreCertificates()" id="load-more"  style="display: flex;font-style: italic;">mais..</h3>
    <h3 class="more" onclick="undo()" id="undo" style="display: none;font-style: italic;">menos..</h3>
    </section>
    
    <section id="About">
    <div id="bar"></div>
    
    <!-- About me -->
    <div id="centered-container">
        <h4 class="sticke" style="margin: 8px auto;">- Quien es Vittorio? -</h4>
        <img id="yo" src="https://avatars.githubusercontent.com/u/90337009?s=400&u=85e19dfa91e0d19e6d3d176be33ea04c78580637&v=4" alt="vittorio profile photo" draggable="false">
        <header id="MyHeader"> 
            <h5 style="text-align: left;">Meu nome é Vittorio Pugliese e um jovem de Buenos Aires que encanta investigar e aprender informática por sí mismo. Mis primeros pasos fueron alrededor de 2012 cuando quería comezar a hacer music in my computera. A partir deste momento, siempre quise aprender y hacer cosas nuevas por mi cuenta.<br>
            <br>
            O primer contato que tuve com a programação fue em 2019, no último ano de segundo grau estamos aprendendo Pseudocódigo, mas não fue hasta os últimos meses de 2020 que começou a aprender JavaScript.<br>
            Neste momento temos um conhecimento sólido em JavaScript, agora estou aprendendo React.js para construir sites web escalonáveis ​​e fazer projetos maiores.<br>
            <br>
            Soy una persona que aprende com facilidade y no tiene miedo de preguntar si está fazendo algo mal. O passo seguinte que você quer aprender Next.js para começar a desencorajar sites profissionais e escalables.</h5>
        </header>
    </div>
    </section>
    
    </div>
    <!-- Footer -->
    <section id="Contact">
    <footer>
        <div id="more-info">
            <h5>Sinta-se livre de contactar-me!</h5>
        </div>
        <div id="contact">
            <a class="link-to" target="_blank" href="https://www.linkedin.com/in/vittorio-pugliese-920996231/"><img id="iso-1" src="files/svgs/livacio.svg" alt="linkedin profile"></a>
            <a class="link-to" target="_blank" href="https://github.com/vittoopugliese"><img id="iso-2" src="files/svgs/gitvacio.svg" alt="github profile"></a>
            <a class="link-to" target="_blank" href="https://www.google.com/search?q=mailto+doesnt+work%2C+my+mail+is+vittoopugliese%40gmail.com&client=ms-android-samsung&sxsrf=APq-WBu6-xbw_QbVwWjeNBF5G3m11kMVyw%3A1647053526339&ei=1gosYpKjFMTN1sQPla2S0AU&ved=0ahUKEwiS5vPCyL_2AhXEppUCHZWWBFoQ4dUDCA4&uact=5&oq=mailto+doesnt+work%2C+my+mail+is+vittoopugliese%40gmail.com&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6BAghEApKBAhBGAFKBAhGGABQuxxYhDFg91loAnAAeACAAXGIAdQDkgEDMi4zmAEAoAEByAEBwAEB&sclient=gws-wiz"><img id="iso-3" src="files/svgs/gmailvacio.svg" alt="mailto"></a>
            <a class="link-to" target="_blank" href="https://api.whatsapp.com/send/?phone=+541178310432"><img id="iso-4" src="files/svgs/wspvacio.svg" alt="whatsapp number"></a>
        </div>
        <h3><i>página web feita por <a target="_blank" href="https://instagram.com/vittoopugliese">Vittorio Pugliese</a> com javascript puro</i></h3>
    </footer>
    </section>
    <!-- End -->
    </div>
    </div>
    `;
  const selectLanguage = document.getElementById("selectLanguage");
  body.style.overflow = "auto";
  selectLanguage.style.backgroundImage = "url(files/svgs/BRS.png)";
}

//reload to 0:0
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// toggle nav
const toggleNav = document.querySelectorAll("#toggle-button")[0];
const navLinks = document.querySelectorAll("#nav-links")[0];
const nav = document.querySelectorAll("#nav")[0];
toggleNav.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (nav.style.background = `rgba(21, 21, 27, 0.95)`);
  window.scrollY < 100 && (nav.style.background = `rgba(21, 21, 27, 0.25)`);
});

// logo component
class techno extends HTMLElement {
  constructor() {
    super();
    this.name;
    this.description;
    this.img;
  }
  static get observedAttributes() {
    return ["name", "description", "img"];
  }
  attributeChangedCallback(nameAttr, oldValue, newValue) {
    switch (nameAttr) {
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
  connectedCallback() {
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
const logo = document.querySelectorAll("#logo");
const logoText = document.querySelectorAll("#logo-text");

for (let i = 0; i < logo.length; i++) {
  logo[i].addEventListener("mouseover", function () {
    logoText[i].style.display = "flex";
  });
  logo[i].addEventListener("mouseleave", function () {
    logoText[i].style.display = "none";
  });
}

// make full footer vectorsss
const iso1 = document.querySelector("#iso-1");
const iso2 = document.querySelector("#iso-2");
const iso3 = document.querySelector("#iso-3");
const iso4 = document.querySelector("#iso-4");

iso1.addEventListener("mouseover", function () {
  iso1.src = "files/svgs/lilleno.svg";
});
iso1.addEventListener("mouseleave", function () {
  iso1.src = "files/svgs/livacio.svg";
});

iso2.addEventListener("mouseover", function () {
  iso2.src = "files/svgs/gitlleno.svg";
});
iso2.addEventListener("mouseleave", function () {
  iso2.src = "files/svgs/gitvacio.svg";
});

iso3.addEventListener("mouseover", function () {
  iso3.src = "files/svgs/gmaillleno.svg";
});
iso3.addEventListener("mouseleave", function () {
  iso3.src = "files/svgs/gmailvacio.svg";
});

iso4.addEventListener("mouseover", function () {
  iso4.src = "files/svgs/whatsapplleno.svg";
});
iso4.addEventListener("mouseleave", function () {
  iso4.src = "files/svgs/wspvacio.svg";
});

const certificateGrid = document.querySelector("#certificate-grid");
const loadMore = document.querySelector("#load-more");
const undoText = document.querySelector("#undo");

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
    

    `;
  loadMore.style.display = "none";
  undoText.style.display = "flex";
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

    `;
  loadMore.style.display = "flex";
  undoText.style.display = "none";
}

if (window.matchMedia("screen and (min-width: 840px)").matches == true) {
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

    `;
  loadMore.style.display = "none";
  undoText.style.display = "flex";
} else {
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

    `;
  loadMore.style.display = "flex";
  undoText.style.display = "none";
}

// projects
const slider = document.querySelector("#slider");

const mylinks = document.querySelector("#mylinks");
const mylinksTab = document.querySelector("#mylinksTab");
const mylinkshover = document.querySelector("#mylinkshover");
const MLhoverContent = document.querySelector("#MLhoverContent");
const ml1 = document.querySelector("#ml1");
const ml2 = document.querySelector("#ml2");
const ml3 = document.querySelector("#ml3");
const ml4 = document.querySelector("#ml4");

const nftorio = document.querySelector("#nftorio");
const nftorioTab = document.querySelector("#nftorioTab");
const nftoriohover = document.querySelector("#nftoriohover");
const NFhoverContent = document.querySelector("#NFhoverContent");
const nf1 = document.querySelector("#nf1");
const nf2 = document.querySelector("#nf2");
const nf3 = document.querySelector("#nf3");
const nf4 = document.querySelector("#nf4");

const reactlinks = document.querySelector("#reactlinks");
const reactlinksTab = document.querySelector("#reactlinksTab");
const reactlinkshover = document.querySelector("#reactlinkshover");
const RLhoverContent = document.querySelector("#RLhoverContent");
const rml1 = document.querySelector("#rml1");
const rml2 = document.querySelector("#rml2");
const rml3 = document.querySelector("#rml3");
const rml4 = document.querySelector("#rml4");

const gallery1 = document.querySelector("#gallery1");
const gallery2 = document.querySelector("#gallery2");
const gallery3 = document.querySelector("#gallery3");
const gallery4 = document.querySelector("#gallery4");

nf1.style.opacity = "1";
nf1.style.display = "flex";
nf2.style.display = "none";
nf3.style.display = "none";
nf4.style.display = "none";

ml1.style.display = "none";
ml2.style.display = "none";
ml3.style.display = "none";
ml4.style.display = "none";

rml1.style.display = "flex";
rml2.style.display = "none";
rml3.style.display = "none";
rml4.style.display = "none";

nftorio.style.display = "flex";
mylinks.style.display = "none";
reactlinks.style.display = "none";

mylinksTab.addEventListener("click", () => {
  nf1.style.display = "none";
  nf2.style.display = "none";
  nf3.style.display = "none";
  nf4.style.display = "none";

  ml1.style.opacity = "1";
  ml1.style.display = "flex";
  ml2.style.display = "none";
  ml3.style.display = "none";
  ml4.style.display = "none";

  rml1.style.display = "flex";
  rml2.style.display = "none";
  rml3.style.display = "none";
  rml4.style.display = "none";

  nftorio.style.display = "none";
  mylinks.style.display = "flex";
  reactlinks.style.display = "none";

  gallery1.addEventListener("click", () => {
    ml1.style.opacity = "1";
    ml2.style.opacity = "0";
    ml3.style.opacity = "0";
    ml4.style.opacity = "0";
    setTimeout(() => {
      ml1.style.display = "flex";
      ml2.style.display = "none";
      ml3.style.display = "none";
      ml4.style.display = "none";
    }, 300);
  });
  gallery2.addEventListener("click", () => {
    ml1.style.opacity = "0";
    ml2.style.opacity = "1";
    ml3.style.opacity = "0";
    ml4.style.opacity = "0";
    setTimeout(() => {
      ml1.style.display = "none";
      ml2.style.display = "flex";
      ml3.style.display = "none";
      ml4.style.display = "none";
    }, 300);
  });
  gallery3.addEventListener("click", () => {
    ml1.style.opacity = "0";
    ml2.style.opacity = "0";
    ml3.style.opacity = "1";
    ml4.style.opacity = "0";
    setTimeout(() => {
      ml1.style.display = "none";
      ml2.style.display = "none";
      ml3.style.display = "flex";
      ml4.style.display = "none";
    }, 300);
  });
  gallery4.addEventListener("click", () => {
    ml1.style.opacity = "0";
    ml2.style.opacity = "0";
    ml3.style.opacity = "0";
    ml4.style.opacity = "1";
    setTimeout(() => {
      ml1.style.display = "none";
      ml2.style.display = "none";
      ml3.style.display = "none";
      ml4.style.display = "flex";
    }, 300);
  });
});
nftorioTab.addEventListener("click", () => {
  adorno();
});
function adorno() {
  nf1.style.opacity = "1";
  nf1.style.display = "flex";
  nf2.style.display = "none";
  nf3.style.display = "none";
  nf4.style.display = "none";

  ml1.style.display = "none";
  ml2.style.display = "none";
  ml3.style.display = "none";
  ml4.style.display = "none";

  rml1.style.display = "flex";
  rml2.style.display = "none";
  rml3.style.display = "none";
  rml4.style.display = "none";

  nftorio.style.display = "flex";
  mylinks.style.display = "none";
  reactlinks.style.display = "none";

  gallery1.addEventListener("click", () => {
    nf1.style.opacity = "1";
    nf2.style.opacity = "0";
    nf3.style.opacity = "0";
    nf4.style.opacity = "0";
    setTimeout(() => {
      nf1.style.display = "flex";
      nf2.style.display = "none";
      nf3.style.display = "none";
      nf4.style.display = "none";
    }, 300);
  });
  gallery2.addEventListener("click", () => {
    nf1.style.opacity = "0";
    nf2.style.opacity = "1";
    nf3.style.opacity = "0";
    nf4.style.opacity = "0";
    setTimeout(() => {
      nf1.style.display = "none";
      nf2.style.display = "flex";
      nf3.style.display = "none";
      nf4.style.display = "none";
    }, 300);
  });
  gallery3.addEventListener("click", () => {
    nf1.style.opacity = "0";
    nf2.style.opacity = "0";
    nf3.style.opacity = "1";
    nf4.style.opacity = "0";
    setTimeout(() => {
      nf1.style.display = "none";
      nf2.style.display = "none";
      nf3.style.display = "flex";
      nf4.style.display = "none";
    }, 300);
  });
  gallery4.addEventListener("click", () => {
    nf1.style.opacity = "0";
    nf2.style.opacity = "0";
    nf3.style.opacity = "0";
    nf4.style.opacity = "1";
    setTimeout(() => {
      nf1.style.display = "none";
      nf2.style.display = "none";
      nf3.style.display = "none";
      nf4.style.display = "flex";
    }, 300);
  });
}
reactlinksTab.addEventListener("click", () => {
  nf1.style.display = "flex";
  nf2.style.display = "none";
  nf3.style.display = "none";
  nf4.style.display = "none";

  ml1.style.display = "none";
  ml2.style.display = "none";
  ml3.style.display = "none";
  ml4.style.display = "none";

  rml1.style.opacity = "1";
  rml1.style.display = "flex";
  rml2.style.display = "none";
  rml3.style.display = "none";
  rml4.style.display = "none";

  nftorio.style.display = "none";
  mylinks.style.display = "none";
  reactlinks.style.display = "flex";

  gallery1.addEventListener("click", () => {
    rml1.style.opacity = "1";
    rml2.style.opacity = "0";
    rml3.style.opacity = "0";
    rml4.style.opacity = "0";
    setTimeout(() => {
      rml1.style.display = "flex";
      rml2.style.display = "none";
      rml3.style.display = "none";
      rml4.style.display = "none";
    }, 300);
  });
  gallery2.addEventListener("click", () => {
    rml1.style.opacity = "0";
    rml2.style.opacity = "1";
    rml3.style.opacity = "0";
    rml4.style.opacity = "0";
    setTimeout(() => {
      rml1.style.display = "none";
      rml2.style.display = "flex";
      rml3.style.display = "none";
      rml4.style.display = "none";
    }, 300);
  });
  gallery3.addEventListener("click", autoClickNftorio);
  rml1.style.opacity = "0";
  rml2.style.opacity = "0";
  rml3.style.opacity = "1";
  rml4.style.opacity = "0";
  setTimeout(() => {
    rml1.style.display = "none";
    rml2.style.display = "none";
    rml3.style.display = "flex";
    rml4.style.display = "none";
  }, 300);
});
gallery4.addEventListener("click", () => {
  rml1.style.opacity = "0";
  rml2.style.opacity = "0";
  rml3.style.opacity = "0";
  rml4.style.opacity = "1";
  setTimeout(() => {
    rml1.style.display = "none";
    rml2.style.display = "none";
    rml3.style.display = "none";
    rml4.style.display = "flex";
  }, 300);
});
MLhoverContent.style.display = "none";
NFhoverContent.style.display = "none";
RLhoverContent.style.display = "none";

mylinks.addEventListener("mouseover", () => {
  mylinkshover.style.height = "95%";
  mylinkshover.style.opacity = "1";
  setTimeout(() => {
    MLhoverContent.style.display = "flex";
  }, 250);
});
mylinks.addEventListener("mouseleave", () => {
  mylinkshover.style.height = "0";
  mylinkshover.style.opacity = "0";
  setTimeout(() => {
    MLhoverContent.style.display = "none";
  }, 250);
});

nftorio.addEventListener("mouseover", () => {
  nftoriohover.style.height = "95%";
  nftoriohover.style.opacity = "1";
  setTimeout(() => {
    NFhoverContent.style.display = "flex";
  }, 250);
});
nftorio.addEventListener("mouseleave", () => {
  nftoriohover.style.height = "0";
  nftoriohover.style.opacity = "0";
  setTimeout(() => {
    NFhoverContent.style.display = "none";
  }, 250);
});

reactlinks.addEventListener("mouseover", () => {
  reactlinkshover.style.height = "95%";
  reactlinkshover.style.opacity = "1";
  setTimeout(() => {
    RLhoverContent.style.display = "flex";
  }, 250);
});
reactlinks.addEventListener("mouseleave", () => {
  reactlinkshover.style.height = "0";
  reactlinkshover.style.opacity = "0";
  setTimeout(() => {
    RLhoverContent.style.display = "none";
  }, 250);
});

// please dont say how i live !
const loading = document.querySelector("#points");
const preloader = document.querySelector("#preloader");
setTimeout(() => {
  loading.innerHTML = "Loading";
  setTimeout(() => {
    loading.innerHTML = "Loading.";
    setTimeout(() => {
      loading.innerHTML = "Loading..";
      setTimeout(() => {
        loading.innerHTML = "Loading...";
        setTimeout(() => {
          loading.innerHTML = "Loading....";
          setTimeout(() => {
            loading.innerHTML = "Loading.....";
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  }, 200);
}, 200);

setTimeout(() => {
  preloader.style.opacity = "0";
  setTimeout(() => {
    window.scrollTo(0, 0);
    preloader.style.display = "none";
  }, 500);
}, 11);

function nfref() {
  window.open("https://nftorio.vittoriopugliese.com/");
}

// avatar reload
const avatarModal = document.getElementById("info-content");

window.onload = function () {
  avatarModal.style.left = "0px";
  avatarModal.style.overflow = "hidden";
  adorno();
};
