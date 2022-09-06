import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Comp/Header';
import Footer from './Comp/Footer';
import "./Style.css"

function App() {
  return (
    <div className='app'>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
