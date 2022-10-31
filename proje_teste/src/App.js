import './App.css';
import foto from './img/eu.png';
import ciencia from './img/icons1.png';
import fut from './img/icons3.png';
import tec from './img/icons2.png';
import pb from './img/pb.png'

function App() {
  return (
    <div className="App-bd">
      <h1>Teste alteração</h1>
      <h2>Teste</h2>
      <h3>Teste 2</h3>
      <h5>Ericklis</h5>
      <nav className="App-nav">
        <h1>José Neto</h1>
        <ul>
          <a><li>Home</li></a>
          <a><li>Projetos</li></a>
          <a><li>Mídias Sociais</li></a>
          <a><li></li></a>
        </ul>
        <a href=""><button>Fale comigo</button></a>
      </nav>
      <hr/>
      <div className="App-body">
        <div className="body">
          <div id="infos">
            <h1>Olá meu nome é José Neto!</h1>
            <h2>20 anos</h2>
            <div id="regiao">
              <img src={pb} alt="pb"/>
              <h2>Paraibano</h2>
            </div>
            <ul id="hobies">
              <div>
                <img src={fut}/>
                <li>Futebol</li>
              </div>
              <div>
                <img src={ciencia}/>
                <li>Ciência</li>
              </div>
              <div>
                <img src={tec}/>
                <li>Tecnologia</li>
              </div>
            </ul>
          </div>
        </div>
        <div id="user_image">
          <img src={foto} alt="perfil"/>
        </div>
      </div>
    </div>
  );
}

export default App;
