import './App.css';
import Window from './Window.js';
import JSONList from './JSONList.js';

function App() 
{
  return (
    <div className="App" style={{marginTop: "50px", background: "rgba(224, 244, 244, 0.5)", paddingBottom: "150px", paddingRight: "10px", borderRadius: "10px"}}>
		<Window/>
		<JSONList/>
    </div>
  );
}

export default App;
