import React, {Component} from 'react';  
import "./Navbar.css";
import Logo from "./Logo";
import SearchBar from './SearchBar';
import ProfileButton from './Profilebutton';
import Friendrequest from './FriendRequest';
import Notification from './Notifications';
import Antsearch from './searchbarAntDesign';
import Mininavbar from '../bannerimagenavbar/Mininavbar';
import BannerImage from '../bannerimagenavbar/Bannerimagenavbar'




class NavBar extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      return (
        <div className="navbar">
          <Logo />
          <Antsearch/>
          <ProfileButton/>
          <Friendrequest/>
          <Notification/>
        </div>
      );
  }
}

export default NavBar;
  