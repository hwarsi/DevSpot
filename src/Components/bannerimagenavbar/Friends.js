import React, {Component} from 'react';  


class Friends extends Component {
    
  constructor(props) {
    super(props);

    this.friendsRoute = this.friendsRoute.bind(this);
  }

  friendsRoute() {
    console.log('test');
    alert('Route me to friends');
  }

  render() {
    return( 
      <button className="friends" onClick={this.friendsRoute}>Friends</button> 
    );
  }
}
        
        
    

export default Friends;


        