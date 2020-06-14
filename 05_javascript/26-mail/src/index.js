const Router = require('./router');
const Inbox = require("./inbox");
const Sent = require("./sent");
// const Compose = require("./compose");

const routes = {
  inbox: Inbox,
  sent: Sent
  // compose: Compose,
}

document.addEventListener('DOMContentLoaded', () => {

  const content = document.querySelector('.content');
  const router = new Router(content, routes);
  router.start();
  window.location.hash = 'inbox'; // default route

  const navItems = Array.from(document.querySelectorAll('.sidebar-nav li'));
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const name = item.innerText.toLowerCase();
      location.hash = name;
    });
  });
});
