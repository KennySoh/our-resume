import './App.css';
import { Header } from './common/components/Header/Header';
import { Resume } from './pages/Resume/Resume';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>
      
      {/* Resume */}
      <Resume></Resume>
      {/* BlogSpot */}
    </div>
  );
}

export default App;
