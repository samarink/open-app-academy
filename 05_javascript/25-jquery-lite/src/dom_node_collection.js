class DomNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach(cb);
  }

  html(html) {
    // setter
    if (typeof html === "string") {
      this.each((node) => {
        node.innerHTML = html;
      });
    // getter
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html('');
  }

  append(children) {
    if (typeof children === 'object' &&
      !(children instanceof DomNodeCollection)) {
      // ensure coercion
      children = $l(children);
    }

    if (typeof children === 'string') {
      this.each((node) => {
        node.innerHTML += children;
      })
    } else if (children instanceof DomNodeCollection) {
      this.each((node) => {
        children.each((childNode) => {
          // It is not possible to append same child node
          // to multiple parents so we have to clone it.
          node.appendChild(childNode.cloneNode(true));
        });
      })
    }
  }

  attr(key, val) {
    if (typeof val === "string") {
      this.each(node => node.setAttribute(key, val));
    } else {
      return this.nodes[0].getAttribute(key);
    }
  }

  addClass(className) {
    this.each(node => node.classList.add(className));
  }

  removeClass(className) {
    this.each(node => node.classList.remove(className));
  }

  toggleClass(className) {
    this.nodes.each(node => node.classList.toggle(className));
  }

  children() {
    let childNodes = [];

    this.each((node) => {
      const childNodeList = node.children;
      childNodes = childNodes.concat(Array.from(childNodeList));
    });

    return new DomNodeCollection(childNodes);
  }

  parent() {
    const parentNodes = [];

    this.each( ({ parentNode }) => {
      // we apply 'visited' property to prevent adding duplicate parents
      if (!parentNode.visited) {
        parentNodes.push(parentNode);
        parentNode.visited = true;
      }
    });


    parentNodes.forEach((node) => {
      node.visited = false;
    });

    return new DomNodeCollection(parentNodes);
  }

  find(selector) {
    let foundNodes = [];

    this.each(node => {
      const matchedNodes = node.querySelectorAll(selector);
      foundNodes = foundNodes.concat(Array.from(matchedNodes));
    });

    return new DomNodeCollection(foundNodes);
  }

  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }
}


module.exports = DomNodeCollection;
