class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    this.node.innerHTML = '';
    const component = this.activeRoute();
    if (component) {
      this.node.appendChild(component.render());
    }
  }

  activeRoute() {
    const hash = window.location.hash.slice(1);
    const component = this.routes[hash];
    return component;
  }
}

module.exports = Router;
