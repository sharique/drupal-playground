customElements.define(
  'demo-comp',
  class extends HTMLElement {
    constructor() {
      super();
      const title = document.createElement('h4');
      this.config = { ...this.parentElement.dataset };

      console.log(this.config);
      title.innerText = 'hello ' + this.config.title;
      this.appendChild(title);
    }
  }
);

