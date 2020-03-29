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
            users: [ {name: "", img: ""}],
            show: false
        };

        this.shownotification = this.shownotification.bind(this)
        this.deleteUsers = this.deleteUsers.bind(this)
    }

    shownotification = () => {
        const { show } = this.state;
        let URL = 'http://hp-api.herokuapp.com/api/characters';
        let HEADERS = {'content-type':'application/json', 'authorization':'sdjfjdskfj45j4ekj'};

        axios.get(URL, HEADERS)
        .then((response) => {
            console.log(response);
            let usersData = response.data;
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
                onClick={this.shownotification} className="dropbtn"/> 
            {this.state.show && <Panel type="Notifications" users={this.state.users} deleteUsers={this.deleteUsers}  />}
        </div>
        );
    }
}

    export default Notification;
