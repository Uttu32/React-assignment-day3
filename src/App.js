
import './App.css';
import Heading from './Components/Heading';
import Input from './Input';
import Submit from './Components/Submit';

function App() {
  return (
    <div className="out">
      <div className="in">
        <Heading heading="Register Here ..."/>
        
        <Input />
        <br></br>
        <Submit btn="Submit" />
      </div>
    </div>
  );
}

export default App;
