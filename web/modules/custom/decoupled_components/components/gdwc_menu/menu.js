customElements.define(
  'gdwc-menu-comp',
  class extends HTMLElement {
    constructor() {
      super();
      this.config = { ...this.parentElement.dataset};

      const menu = document.createElement('gdwc-menu');
      const endpoint = this.config.endpoint;
      menu.setAttribute('baseUrl', endpoint);
      menu.setAttribute('branding',this.config.branding);
      menu.setAttribute('menuId',this.config.menu);
      this.appendChild(menu);
    }
  }
);
