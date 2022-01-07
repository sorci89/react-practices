import logo from './logo.svg';
import './App.css';

//import ButtonListWithFor from './components/ButtonListWithFor';

import ButtonListWithMap from './components/ButtonListWithMap';

import Profile from './components/Profile'
import Profile2 from './components/Profile2'
import Profile3 from './components/Profile3'
import Profile4 from './components/Profile4'


function App() {
  

  return (
    <div className="App" >
     {/*<ButtonListWithFor />*/}
     <ButtonListWithMap />
     <Profile />
     <Profile2 />
     <Profile3 />
     <Profile4 />
    </div>

  );
}

export default App;
