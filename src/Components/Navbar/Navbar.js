import React, {Component} from 'react';  
import "./Navbar.css";
import Logo from "./Logo";
import SearchBar from './SearchBar';
import ProfileButton from './Profilebutton';
import Friendrequest from './FriendRequest';
import Notification from './Notifications';
import Antsearch from './searchbarAntDesign';
import Mininavbar from '../bannerimagenavbar/Mininavbar';
import BannerImage from '../bannerimagenavbar/Bannerimagenavbar';
import Panel from './NavbarPanel'
import AutoCompleteText from './Autocompletetext'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelType: ""
    }

    this.updatePanelType = this.updatePanelType.bind(this);
  }

  updatePanelType = (value) => {
    this.setState({panelType: value})
  }

  render() {
    return (
      <div className="navbar">
        <Logo />
        <AutoCompleteText/>
        <ProfileButton/>
        <Friendrequest panelType={this.state.panelType} updatePanelType={this.updatePanelType}/>
        <Notification panelType={this.state.panelType} updatePanelType={this.updatePanelType} />
      </div>
    );
  }
}

export default NavBar;
  