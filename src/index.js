import React from 'react';
import ReactDOM from 'react-dom';

import './styles/scss/app.scss';

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