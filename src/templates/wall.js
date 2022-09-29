export const wall = () => {
  const wallContainer = document.createElement('div');
  const wallTemplate = `
    <h1>Welcome to your Profile</h1>
    <h2>Working on...</h2>
    `;
  wallContainer.innerHTML = wallTemplate;

  return wallContainer;
};
