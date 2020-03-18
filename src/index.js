import ReactDOM from 'react-dom';
import React from 'react';

import './styles/app.scss';

import UserRegistration from './Components/UserRegistration'
import NavBar from './Components/Navbar/Navbar'

function MainApp() {
  return (
    <div className="App">
        <NavBar/>
        <UserRegistration />
    </div>
  );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));