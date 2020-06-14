/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor (nodes) {\n    this.nodes = nodes;\n  }\n\n  each(cb) {\n    this.nodes.forEach(cb);\n  }\n\n  on(eventName, callback) {\n    this.each(node => {\n      node.addEventListener(eventName, callback);\n\n      const eventKey = `jqliteEvents-${eventName}`;\n      if (typeof node[eventKey] === 'undefined') {\n        node[eventKey] = [];\n      }\n      node[eventKey].push(callback);\n    });\n  }\n\n  off(eventName) {\n    this.each(node => {\n      const eventKey = `jqliteEvents-${eventName}`;\n      if (node[eventKey]) {\n        node[eventKey].forEach(callback => {\n          node.removeEventListener(eventName, callback);\n        });\n      }\n    });\n  }\n\n  html(html) {\n    // setter\n    if (typeof html === \"string\") {\n      this.each((node) => {\n        node.innerHTML = html;\n      });\n    // getter\n    } else if (this.nodes.length > 0) {\n      return this.nodes[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.html('');\n  }\n\n  append(children) {\n    if (typeof children === 'object' &&\n      !(children instanceof DomNodeCollection)) {\n      // ensure coercion\n      children = $l(children);\n    }\n\n    if (typeof children === 'string') {\n      this.each((node) => {\n        node.innerHTML += children;\n      })\n    } else if (children instanceof DomNodeCollection) {\n      this.each((node) => {\n        children.each((childNode) => {\n          // It is not possible to append same child node\n          // to multiple parents so we have to clone it.\n          node.appendChild(childNode.cloneNode(true));\n        });\n      })\n    }\n  }\n\n  attr(key, val) {\n    if (typeof val === \"string\") {\n      this.each(node => node.setAttribute(key, val));\n    } else {\n      return this.nodes[0].getAttribute(key);\n    }\n  }\n\n  addClass(className) {\n    this.each(node => node.classList.add(className));\n  }\n\n  removeClass(className) {\n    this.each(node => node.classList.remove(className));\n  }\n\n  toggleClass(className) {\n    this.nodes.each(node => node.classList.toggle(className));\n  }\n\n  children() {\n    let childNodes = [];\n\n    this.each((node) => {\n      const childNodeList = node.children;\n      childNodes = childNodes.concat(Array.from(childNodeList));\n    });\n\n    return new DomNodeCollection(childNodes);\n  }\n\n  parent() {\n    const parentNodes = [];\n\n    this.each( ({ parentNode }) => {\n      // we apply 'visited' property to prevent adding duplicate parents\n      if (!parentNode.visited) {\n        parentNodes.push(parentNode);\n        parentNode.visited = true;\n      }\n    });\n\n\n    parentNodes.forEach((node) => {\n      node.visited = false;\n    });\n\n    return new DomNodeCollection(parentNodes);\n  }\n\n  find(selector) {\n    let foundNodes = [];\n\n    this.each(node => {\n      const matchedNodes = node.querySelectorAll(selector);\n      foundNodes = foundNodes.concat(Array.from(matchedNodes));\n    });\n\n    return new DomNodeCollection(foundNodes);\n  }\n\n  remove() {\n    this.each(node => node.parentNode.removeChild(node));\n  }\n}\n\n\nmodule.exports = DomNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nconst _docReadyCallbacks = [];\nlet _docReady = false;\n\nwindow.$l = (arg) => {\n  switch (typeof arg) {\n    case 'function':\n      return registerDocReadyCallback(arg);\n    case 'string':\n      return getNodesFromDom(arg);\n    case 'object':\n      if (arg instanceof HTMLElement) {\n        return new DomNodeCollection([arg]);\n      }\n  }\n}\n\n// helpers\ngetNodesFromDom = (selector) => {\n  const nodeList = document.querySelectorAll(selector);\n  const nodeListArr = Array.from(nodeList);\n  return new DomNodeCollection(nodeListArr);\n}\n\nregisterDocReadyCallback = (func) => {\n  if (!_docReady) {\n    _docReadyCallbacks.push(func);\n  } else {\n    func();\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  _docReady = true;\n  _docReadyCallbacks.forEach(func => func());\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });