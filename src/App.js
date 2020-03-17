import React from 'react';
import '../public/scss/app.scss';

import UserRegistration from './Components/UserRegistration'
import NavBar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <UserRegistration />
      <NavBar/>
    </div>
  );
}

export default App;
