import './App.css';
import Education from './components/Education';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Work from './components/Work';
import Project from './components/Project';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Education />
      <Work />
      <Project />
      <About />
    </div>
  );
}

export default App;
