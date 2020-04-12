import React, {Component} from 'react';  
import Mininavbar from './Mininavbar'
import './Bannerimagenavbar.css'; 
import BannerImage from '../userprofilepicture/Bannerimage' 
import Post from '../post/postnavbar/Post'
import FriendsPanel from '../FriendsBox/FriendsPanel'
import Blahhhh from '../AboutPanel/CompositeAboutPanel'



class Wall extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return(
          <div>
             <Post/>
             <Blahhhh/>
          </div>
      );
  }
}

export default Wall;
