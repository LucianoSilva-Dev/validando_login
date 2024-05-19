import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="bg_img.png" alt="" className="bg" />
      <div className="login_area">
        <div className="form_div">
          <form className='form'>
            <h2>Conectar-se</h2>
            <p>Conecte-se para entrar no seu espaço</p>
            <div className='inputs'>
              <div className="input_div">
                <label htmlFor="email">Email</label>
                <input type="text" name='email' className='input'/>
              </div>
              
              <div className="input_div">
                <label htmlFor="password">Senha</label>
                <input type="text" name='password' className='input'/>
              </div>
            </div>
          
            <button>Conectar-se</button>
            
            <p>Ainda não tem um login? <a href="#">Criar uma conta</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
