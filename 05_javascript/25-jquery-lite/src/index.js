const DomNodeCollection = require('./dom_node_collection');

function $l(arg) {

  if (typeof arg === 'string') {
    const nodeList = document.querySelectorAll(arg);
    const nodeListArr = Array.from(nodeList);
    return new DomNodeCollection(nodeListArr);

  } else if (arg instanceof HTMLElement) {
    return new DomNodeCollection(arg);
  }
}

window.$l = $l;
