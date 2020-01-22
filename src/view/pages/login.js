export default () => {
  const viewHome = `
  <h1>Login</h1>
  <form id="form-login">
    <div>
      <label for="email-input">Email</label>
      <input name="email" type="email" id="email-input"/>
    </div>
    <div>
      <label for="password-input">Password</label>
      <input name="password" type="password"id="password-input"/>
    </div> 
    <button type="submit">Entrar</button>
  </form>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;

  return divElemt;
};