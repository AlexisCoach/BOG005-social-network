import { login } from './templates/login.js';
import { register } from './templates/register.js';
import { wall } from './templates/wall.js';
const routes = {
  '/': login(),
  '/login': login(),
  '/register': register(),
  '/wall': wall(),
};

export const onNavigate = (pathname, paramRoutes = routes) => {
  const rootDiv = document.getElementById('root');
  rootDiv.replaceChildren(paramRoutes[pathname]);
};

window.addEventListener('load', () => {
  onNavigate(window.location.pathname);
});

