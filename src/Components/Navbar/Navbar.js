import React, {Component} from 'react';  
import Logo from "./Logo"
import SearchBar from './SearchBar'
import ProfileButton from './Profilebutton';
import Friendrequest from './FriendRequest';
import Notification from './Notifications';
import "./Navbar.css";










class NavBar extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      return (
        <div className="navbar">
          <Logo />
          <SearchBar/>
          <ProfileButton/>
          <Friendrequest/>
          <Notification/>
        </div>
      );
  }
}


export default NavBar;
  