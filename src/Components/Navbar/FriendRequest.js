import React, {Component} from 'react';  
import addfriends from '../../static/img/addfriends.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fausers from '@fortawesome/fontawesome-free-solid/faUsers';



class FriendRequest extends Component {
        constructor(props) {
            super(props);
            this.friends = this.friends.bind(this);
    }

    friends() {
        alert("Add a new friend")
    }

    render() {
        return(
            <FontAwesomeIcon id="friends" icon={fausers} size = "5x" onClick={this.friends}/> 
        );
    }
}
export default FriendRequest;

