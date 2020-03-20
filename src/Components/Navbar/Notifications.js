import React, {Component} from 'react';
import notification from '../../static/img/notification.png'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fabell from '@fortawesome/fontawesome-free-solid/faBell';



class Notification extends Component {
    constructor(props) {
        super(props);
        this.state= { show: false};

        this.shownotification = this.shownotification.bind(this)
    }
    shownotification = () => {
        const { show } = this.state;
        this.setState( { show: !show } )
    }

    render() {
        return(
        <div className="notifications">
            <FontAwesomeIcon id="notification" icon={fabell} size = "2x" onClick={this.shownotification}/> 
            {this.state.show && <Panel/>}
        </div>
        );
    }
}
    function Panel(props) {
        var userNotifications = props.users;
        
            return(
                <div>
                    <p id="paneltitle">Notifications</p>
                    <div>{props.name} posted on your wall</div>
                </div>
            )
    }
    var users = [{id:0, name: "Thomas Shelby", img: ""},
                {id:1, name: "Polly Shelby", img: ""},
                {id:2, name:"Arthur Shelby", img: ""},
                {id:3, name: "Naruto Uzumaki", img: ""},
                {id:4, name: "Ichigo Kurosaki", img: ""},
                {id:5, name: "Yuskue Urameshi", img: ""}
            ];

    export default Notification;
