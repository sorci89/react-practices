import logo from './logo.svg';
import './App.css';

import Button from './components/Button';

const newDiv = () => {
 document.getElementById("root").insertAdjacentHTML('beforeend', '<div>New div</div>')
}

function App() {

  const buttonText = "New button text"

  return (
    <div className="App" >
     <Button onClick={newDiv} buttonText={buttonText}/>
    </div>
  );
}

export default App;
