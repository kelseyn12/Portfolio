import Header from './components/Header';
import MiddleSection from './components/MiddleSection';
import Footer from './components/Footer';
import './App.css';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleSection />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
