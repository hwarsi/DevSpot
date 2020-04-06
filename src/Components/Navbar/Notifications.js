import React, {Component} from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fabell from '@fortawesome/fontawesome-free-solid/faBell';
import fatrash from '@fortawesome/fontawesome-free-solid/faTrash';
import Panel from './NavbarPanel';
import axios from 'axios';



class Notification extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            users: [{name: "", img: ""}],
        };

        this.showNotification = this.showNotification.bind(this)
        this.deleteUsers = this.deleteUsers.bind(this)
    }

    showNotification = () => {
        console.log('here');
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
                let panelType = this.props.panelType;
                if (panelType === "" || panelType === "FriendRequest") this.props.updatePanelType("Notifications");
                else this.props.updatePanelType("");
           });

        })
        .catch((error) => {
            console.log(error);
            this.props.updatePanelType("");
        });
}
       
    deleteUsers = (index,e) => {
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({users:users})
    }

    render() {
        return(
        <div className="notifications">
            <FontAwesomeIcon 
                id="notification" 
                icon={fabell} 
                size = "2x" 
                onClick={this.showNotification} className="dropbtn"/> 

            {this.props.panelType === "Notifications" && (
                <Panel panelType={this.props.panelType} users={this.state.users} deleteUsers={this.deleteUsers}  />
            )}
        </div>
        );
    }
}

    export default Notification;
