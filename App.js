// import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className='out'>
        <div className='in'>
          <h1>Register here ...</h1>
          <input name="mobile" type="tel" placeholder="mobile ..."></input>
            <br></br>
            <br></br>
          <input name="pass" type="password" placeholder="password ..."></input>
            <br></br>
            <br></br>
          <button id="submit">Submit</button>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
