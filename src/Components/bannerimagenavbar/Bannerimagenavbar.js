import React, {Component} from 'react';  
import Mininavbar from './Mininavbar'
import './Bannerimagenavbar.css'; 
import BannerImage from '../userprofilepicture/Bannerimage' 



class Wall extends Component {

  constructor(props) {
      super(props);
  }

  render() {
      return(
          <div>
              <BannerImage/>
              <Mininavbar/>
          </div>
      );
  }
}

export default Wall;
