class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML =''
    }
 }

 customElements.define("app-bar", AppBar);