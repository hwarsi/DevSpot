import React, {Component} from 'react';  
import Mininavbar from './Mininavbar'
import './Bannerimagenavbar.css'; 
import BannerImage from '../userprofilepicture/Bannerimage' 
import Post from '../post/postnavbar/Post'



class Wall extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return(
          <div>
              <BannerImage/>
              <Mininavbar/>
              <Post/>
          </div>
      );
  }
}

export default Wall;
