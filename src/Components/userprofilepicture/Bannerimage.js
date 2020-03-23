import React, {Component} from 'react';  
import banner from './images/banner.jpg'
import profile from '../../static/img/profile.jpg'
import "./userprofilepicture.css"




class BannerImage extends Component {
    constructor(props) {
        super(props);
}
    render() {
        return(
            <div>
                <img src = {banner} className="banner"/>
                <img src = {profile} className="profile"/>
            </div>
        );
    }

}

export default BannerImage;
