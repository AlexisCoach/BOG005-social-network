export const register = () => {
  const registerContainer = document.createElement('div');
  const registerTemplate = `
    <h1>Join Us</h1>
    <form class="form">
      <input type="text" placeholder="Email">
      <input type="password" placeholder="Password">
      <button type="button" id="register-button">Register</button>
    </form>
    `;
  registerContainer.innerHTML = registerTemplate;
  registerContainer.querySelector('#register-button').addEventListener('click', () => {
    window.location.pathname = '/login';
  });

  return registerContainer;
};
