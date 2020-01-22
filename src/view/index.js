import Login from './pages/login.js';
import Home from './pages/home.js';
import Different from './pages/page404.js';
import { controlador } from '../controller/index.js'

const components = {
  login: Login,
  home: Home,
  different: Different
}

const vista = {
  init: {
    login: () => {
      // formulario de login
      const formLogin = document.getElementById('form-login');
      formLogin.addEventListener('submit', (e) => {
        e.preventDefault()
        const userdata = {
          email: formLogin.email.value,
          password: formLogin.password.value
        }
        controlador.authEmailAndPassword(userdata);
        if(userdata.email !== '' && userdata.password !== '' && userdata.password.length >= 6) {
          controlador.detecthash("#/home");
        } else {
          alert("Debes de llenar los campos")
        }
      })
      
      //------
    },

    home: () => {
      // formulario de marcadores
      const form = document.getElementById('form-marcadores');    
      form.addEventListener('submit', (e) => {
        e.preventDefault();      
        const nuevomarcador = {
          id: Date.now(),
          nombre: form.nombre.value,
          descripcion: form.descripcion.value,
          URL: form.url.value
        }
        form.reset();
        controlador.agregarMarcador(nuevomarcador);
  
      });
      //------

    }
  },

  representarMarcadores: ( ) => {
    let listaMarcadores = document.getElementById('lista-marcadores');
    listaMarcadores.innerHTML = ''
    console.log(controlador.obtenerMarcadores());
    // controlador.obtenerMarcadores()  
    controlador.obtenerMarcadores().forEach(marcador => {
      listaMarcadores.innerHTML += `
      <div class="well" id="marcador-${marcador.id}">
        <a target="_blank" href="${marcador.URL}"><h3>${marcador.nombre}</h3></a>
        <p>${marcador.descripcion}</p>
        <button class="btn btn-danger pull-right" id="${marcador.id}">Eliminar</button>
      </div>
      `;
    });
  }
}

export { components, vista}; 

