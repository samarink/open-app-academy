const DomNodeCollection = require('./dom_node_collection');

const _docReadyCallbacks = [];
let _docReady = false;

window.$l = (arg) => {
  switch (typeof arg) {
    case 'function':
      return registerDocReadyCallback(arg);
    case 'string':
      return getNodesFromDom(arg);
    case 'object':
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
}

// helpers
getNodesFromDom = (selector) => {
  const nodeList = document.querySelectorAll(selector);
  const nodeListArr = Array.from(nodeList);
  return new DomNodeCollection(nodeListArr);
}

registerDocReadyCallback = (func) => {
  if (!_docReady) {
    _docReadyCallbacks.push(func);
  } else {
    func();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  _docReady = true;
  _docReadyCallbacks.forEach(func => func());
});
