import logo from './logo.svg';
import perfil from './img/eu.png';
import pb from './img/pb.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://reactjs.org/docs/getting-started.html"><button type="submit">Clique aqui!</button></a>
      </header>
      <body className="App-body">
        <h1>Um pouco sobre mim!</h1>
        <div id="person">
          <img src={perfil} alt="eu"/>
          <div id="card">
            <p>Olá me chamo José Pereira de Souza Neto, tenho 20 anos, sou paraibano sim senhor,
              aluno do Instituto Federal do Sertão Pernambucano no campus Salgueiro, amo esportes e animes
              estou iniciando minha carreira como desenvolvedor front e estou muito animado com a oportunidade de estagiar
              na SDConecta. Vamos para cima!
            </p>
            <ul>
              <li><img src={pb}/></li>
            </ul>
          </div>
        </div>
      </body>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
