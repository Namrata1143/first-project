import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <p> Oi namarate.</p> <Hello place="London"/>
      <p> Oi namarate.</p> <Hello place="New York"/>
      <p> Oi namarate.</p> <Hello place="Nepal"/>
    </div>
  );
}

export default App;
