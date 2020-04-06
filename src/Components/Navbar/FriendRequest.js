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
            };
            this.showfriendsrequest = this.showfriendsrequest.bind(this);
            this.deletefriendrequest = this.deletefriendrequest.bind(this)
            this.addfriend= this.addfriend.bind(this);
        }

    showfriendsrequest = () => {
        let URL = 'http://hp-api.herokuapp.com/api/characters';
        let HEADERS = {'content-type':'application/json', 'authorization':'sdjfjdskfj45j4ekj'};

        axios.get(URL, HEADERS)
        .then((response) => {
            console.log(response);
            let usersData = response.data;
            let users = [];

            for (let i=0; i<usersData.length; i++) {
                let id = i;
                let currentName = usersData[i]['name'];
                let currentImages = usersData[i]["image"]
                users.push({"id":id, 'name':currentName, "img":currentImages});
            }
            this.setState({users}, () => {
                if (this.props.panelType === "FriendRequest" ) {
                    this.props.updatePanelType("");
                } else if (this.props.panelType === "" || this.props.panelType === "Notifications") {
                    this.props.updatePanelType("FriendRequest"); 
                }
            });
        })
        .catch((error) => {
            console.log(error);
            this.props.updatePanelType("");
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
            <div className="notifications">
            <FontAwesomeIcon 
            id="friends" 
            icon={fausers} 
            size = "5x" 
            onClick={this.showfriendsrequest}/> 
            {this.props.panelType === "FriendRequest" && ( 
                <Panel panelType={this.props.panelType} users={this.state.users} deletefriendrequest={this.deletefriendrequest} addfriend={this.addfriend}/>
            )}
            </div>
        );
     }
}
export default FriendRequest;

