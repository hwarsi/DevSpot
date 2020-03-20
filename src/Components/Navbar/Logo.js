import React, {Component} from 'react';  
import logo from '../../static/img/Logo.png'




class Logo extends Component {
    constructor(props) {
      super(props);
      this.routeme = this.routeme.bind(this);
  }

  routeme() {
      alert('Route me to homepage')
  }
    render() {
      return( 
       <i className="Logo" onClick={this.routeme}><img src={logo} alt="logo" className="icons" /></i> 
        );
    }
  }


  export default Logo;
