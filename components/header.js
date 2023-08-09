class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<nav>
        <a href="index.html"><img class="logo" src="images/logo.png" /></a>
        <div id="menu">
          <h3 class="menuItem"><a class="brickText" href="index.html">home</a></h3>
          <h3 class="menuItem"><a class="brickText" href="about.html">about</a></h3>
        </div>
        <div id="socials" class="salmon">
          <div class="column">
            <a href="https://www.linkedin.com/in/brittany-opal-williams/" target="_blank" rel="noopener noreferrer"><img
                src="images/LinkedIn.png" /></a>
            <a href="mailto:brittany.o.williams@gmail.com"><img src="images/Email.png" /></a>
            <a href="https://docs.google.com/document/d/1N_gZZdpuDyimr1k2vZnnKo65q3rNtXK2901FrRV--wQ/edit?usp=sharing"
              target="_blank" rel="noopener noreferrer"><img src="images/CV.png" /></a>
          </div>
          <div id="contact">
            <h6 class="contactMe">contact me</h6>
          </div>
        </div>
      </nav>`;
    }
}

customElements.define('header-component', Header);