import React, {Component} from 'react';  

import "./navbar.css";

import Logo from "./Logo"
import SearchBar from './SearchBar'
import ProfileButton from './Profilebutton';
import Friendrequest from './FriendRequest';
import Notification from './Notifications';
import Antsearch from './searchbarAntDesign';
import BannerImage from '../userprofilepicture/Bannerimage'
import Mininavbar from '../bannerimagenavbar/Mininavbar'




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
  