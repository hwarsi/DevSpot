import React, {Component} from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fabell from '@fortawesome/fontawesome-free-solid/faBell';
import fatrash from '@fortawesome/fontawesome-free-solid/faTrash';
import Panel from './NavbarPanel';



class Notification extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            users: [{id:"", name:"", img:""}],
            show: false
        };

        this.shownotification = this.shownotification.bind(this)
        this.deleteUsers = this.deleteUsers.bind(this)
    }

    shownotification = () => {

        const { show } = this.state;

        this.setState({
            users: [
                {id:0, name: "Thomas Shelby", img: "https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2019/09/b43a892e3f68c50a5b7ce996aa41a1af.jpg"},
                {id:1, name: "Polly Shelby", img: "https://ichef.bbci.co.uk/images/ic/1200x675/p07l1zgq.jpg"},
                {id:2, name:"Arthur Shelby", img: "https://i.redd.it/cbptte9nnhq21.jpg"},
                {id:3, name: "Naruto Uzumaki", img: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"},
                {id:4, name: "Ichigo Kurosaki", img: "https://vignette.wikia.nocookie.net/bleach/images/5/52/591Ichigo_profile.png/revision/latest/scale-to-width-down/340?cb=20190129174528&path-prefix=en"},
                {id:5, name: "Yusuke Urameshi", img: "https://imgix.ranker.com/user_node_img/122/2434937/original/yusuke-urameshi-fictional-characters-photo-u1?w=280&h=280&fit=crop&crop=faces&q=50&fm=pjpg"}],
            show: !show});
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
            {this.state.show && <Panel type="Notifications" users={this.state.users} deleteUsers={this.deleteUsers} />}
        </div>
        );
    }
}

    export default Notification;
