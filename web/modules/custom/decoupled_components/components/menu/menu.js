
// Decoupled menu component.
customElements.define(
  'd-menu',
  class extends HTMLElement {
    constructor() {
      super();
      const menuContainer = document.createElement('div');
      this.config = { ...this.parentElement.dataset };
      const endpoint = this.config.endpoint;
      // Load menu items and generate links.
      getMenu(endpoint).then(items => {
        // console.log(items);
        let output = `<ul>`;
        items.forEach(element => {
          output += `<li><a href="${element.href}" >${element.title} </a></li>`;
        });
        output += `</ul>`;
        // console.log(output);
        menuContainer.innerHTML = output;
      });
      this.appendChild(menuContainer);
    }
  }
);

// Helper function to load menu from decoupled menu.
async function getMenu(endpoint) {
  let url = endpoint;
  try {
    let res = await fetch(url);
    const json = await res.json();
    const items = json.linkset[0].item;
    return items;
  } catch (error) {
    console.log(error);
  }
}
