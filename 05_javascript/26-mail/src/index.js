const Router = require('./router');

document.addEventListener('DOMContentLoaded', () => {

  const content = document.querySelector('.content');
  const router = new Router(content);
  router.start();

  const navItems = Array.from(document.querySelectorAll('.sidebar-nav li'));
  console.log(navItems);
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const name = item.innerText.toLowerCase();
      location.hash = name;
    });
  });
});
