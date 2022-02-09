import './App.css';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Header />
        <Button />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;

