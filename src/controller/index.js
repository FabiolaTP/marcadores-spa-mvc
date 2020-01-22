import { modelo } from '../model/index.js'
import { components, vista} from '../view/index.js';

export const controlador = {
  init: {
    login: () =>  vista.init.login(),
    home: () => vista.init.home()
  },
  authEmailAndPassword: (obj) => {
    modelo.authEmailAndPassword(obj);
  },

  detecthash: (hash) => {
    location.hash = hash
    controlador.changeTmp(window.location.hash)
  },
  agregarMarcador: (nuevomarcador) => {
    modelo.agregaMarcador(nuevomarcador) 
    vista.representarMarcadores(); 
  }, 

  obtenerMarcadores:() => {
    return modelo.obtenerMarcadores();
  },

  changeTmp: (hash) => {
    // 
    // const id = hash.split('/')[1];
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';
    //         #/
    switch (hash) {
        case '':
        case '#':
        case '#/':
          sectionMain.appendChild(components.login());
          controlador.init.login()
          break;
        case '#/home':
          sectionMain.appendChild(components.home())
          controlador.init.home()
        // case '#/accesorios':
        // case '#/lugares':
            // { return sectionMain.appendChild(components[id]()); }
          break;
        default:
            return sectionMain.appendChild(components.different())
    }
  }
}