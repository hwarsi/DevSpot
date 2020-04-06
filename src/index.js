import ReactDOM from 'react-dom';
import React from 'react';
import './styles/app.scss';
import UserRegistration from './Components/UserRegistration';
import NavBar from './Components/Navbar/Navbar';
import Layout from './Components/layout/layout';
import './styles/overall.css';

function MainApp() {
  return (
      <div className="overallcss">
        <NavBar/>
        <Layout/>
      </div>
  );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));