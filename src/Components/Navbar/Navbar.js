import React, {Component} from 'react';  
import logo from '../../static/img/Logo.png'
import Logo from "./Logo"
import SearchBar from './SearchBar'
import ProfileButton from './Profilebutton';



class NavBar extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      return (
        <div>
          <SearchBar/>
          <Logo />
          <ProfileButton/>
        </div>
      );
  }
}


export default NavBar;
  