import logo from './logo.svg';
import './App.css';

import Button from './components/Button';

import ButtonList from './components/ButtonList';


function App() {
  const newDiv = () => {
   document.getElementById("root").insertAdjacentHTML('beforeend', '<div>New div</div>')
  }

  const buttonText = "New button text"

  return (
    <div className="App" >
     <Button onClick={newDiv} buttonText={buttonText} />
     <ButtonList onClick={newDiv} buttonText={buttonText} />
    </div>

  );
}

export default App;
