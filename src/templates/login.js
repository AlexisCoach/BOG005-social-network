export const login = () => {
  const loginContainer = document.createElement('div');
  const loginTemplate = `
  <h1>Welcome</h1>
  <form class="form">
    <input type="text" placeholder="Email">
    <input type="password" placeholder="Password">
    <button type="button" id="login-button">Login</button>
    <button type="button" id="register-button">Register</button>
  </form>
  `;
  loginContainer.innerHTML = loginTemplate;

  loginContainer.querySelector('#login-button').addEventListener('click', () => {
    window.location.pathname = '/wall';
  });
  loginContainer.querySelector('#register-button').addEventListener('click', () => {
    window.location.pathname = '/register';
  });

  return loginContainer;
};
