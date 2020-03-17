import React from 'react';
import ReactDOM from 'react-dom';

import './styles/scss/app.scss';

import UserRegistration from './Components/UserRegistration'

function MainApp() {
  return (
    <div className="App">
      <UserRegistration />
    </div>
  );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));