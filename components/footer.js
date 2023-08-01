class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<footer class="salmon">
        <h6 class="eggshellText">brittany williams</h6>
        <div>
          <a href="https://www.linkedin.com/in/brittany-opal-williams/" target="_blank" rel="noopener noreferrer"><img
              src="images/LinkedIn.png" /></a>
          <a href="mailto:brittany.o.williams@gmail.com"><img src="images/Email.png" /></a>
          <a href="https://docs.google.com/document/d/1N_gZZdpuDyimr1k2vZnnKo65q3rNtXK2901FrRV--wQ/edit?usp=sharing"
            target="_blank" rel="noopener noreferrer"><img src="images/CV.png" /></a>
        </div>
      </footer>`;
    }
}

customElements.define('footer-component', Footer);