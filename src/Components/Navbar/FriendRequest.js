import React, {Component} from 'react';  
import addfriends from '../../static/img/addfriends.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fausers from '@fortawesome/fontawesome-free-solid/faUsers';
import Panel from './NavbarPanel';
import axios from 'axios';




class FriendRequest extends Component {
        constructor(props) {
            super(props);
            this.state = {
                users: [{id:"", name:"", img:""}],
                show: false
            };
            this.showfriendsrequest = this.showfriendsrequest.bind(this);
            this.deletefriendrequest = this.deletefriendrequest.bind(this)
            this.addfriend= this.addfriend.bind(this);
        }

    showfriendsrequest = () => {
        const { show } = this.state;
        let URL = 'https://the-one-api.herokuapp.com/v1/character';
        let HEADERS = {'content-type':'application/json', 'Authorization':'Bearer y8ed-PVZjOwid_UQKvfB'};

        axios.get(URL, HEADERS)
        .then((response) => {
            let usersData = response.data.results;
            console.log(usersData);
            let users = [{name:"",img:""}];
            let names = [];
            let imgs = [];

            for (let i=0; i<usersData.length; i++) {
                let id = i;
                let currentName = usersData[i]['name'];
                let currentImages = usersData[i]["image"]
                users.push({"id":id, 'name':currentName, "img":currentImages});
            }
           this.setState({users, show:!show});
        });
}

            deletefriendrequest = (index,e) => {
                const users = Object.assign([], this.state.users);
                users.splice(index, 1);
                this.setState({users:users})
                alert(`${this.state.users.name}`)
            }
    addfriend = () => {
        alert(`You just added a new friend ${this.state.name}`);
    }

    render() {
        return(
            <div>
            <FontAwesomeIcon 
            id="friends" 
            icon={fausers} 
            size = "5x" 
            onClick={this.showfriendsrequest}/> 
            {this.state.show && <Panel type="FriendRequest" users={this.state.users} deletefriendrequest={this.deletefriendrequest} addfriend={this.addfriend}/>}
            </div>
        );
     }
}
export default FriendRequest;

