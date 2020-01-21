export default () => {
  const viewHome = `
  <h1>Login</h1>
  <form id="form-marcadores">
    <div>
      <label for="email-input">Email</label>
      <input name="nombre" type="email" id="nombre-input"/>
    </div>
    <div>
      <label for="password-input">Password</label>
      <input name="password" type="password"id="descripcion-input"/>
    </div> 
    <button type="submit"><a href="#/home">Login</a></button>
  </form>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position')
  divElemt.innerHTML = viewHome;
  return divElemt;
};