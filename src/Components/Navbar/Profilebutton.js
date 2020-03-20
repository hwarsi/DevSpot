import React, {Component} from 'react';  
import profile from '../../static/img/profile.jpg'


class ProfileButton extends Component {
    constructor(props) {
        super(props);
        this.handleProfile = this.handleProfile.bind(this);
}

    handleProfile() {
        alert("You are routing me to your profile page")
    }
    render() {
        return(
        <i onClick={this.handleProfile}><img src={profile} alt="profile" className = "icons" /></i> 
        );
    }
}
export default ProfileButton;
