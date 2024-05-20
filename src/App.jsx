import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <img src="bg_img.png" alt="sidebar background image" className="bg" />
      <div className="login_area">
          <Form 
            title='Conectar-se' 
            description='Conecte-se para entrar no seu espaço'
            submitButtonText='Conectar-se'
            />
      </div>
    </div>
  );
}

export default App;
