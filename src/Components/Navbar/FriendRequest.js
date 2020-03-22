import React, {Component} from 'react';  
import addfriends from '../../static/img/addfriends.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fausers from '@fortawesome/fontawesome-free-solid/faUsers';
import Panel from './NavbarPanel';




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
        this.setState({
            users: [
                {id:0, name: "Kakahi Hatake", img: "https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"},
                {id:1, name: "Itachi Uchiha", img: 'https://www.anime-planet.com/images/characters/itachi-uchiha-705.jpg'},
                {id:2, name:"Thor", img: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx953-aW4L92eHDDJj.jpg"},
                {id:3, name: "Naruto Uzumaki", img: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest/scale-to-width-down/340?cb=20170621101134"},
                {id:4, name: "Gon Freecss", img: "https://vignette.wikia.nocookie.net/hunterx/images/0/06/GonMugshot.png/revision/latest/scale-to-width-down/340?cb=20160704025705"},
                {id:5, name: "Hisoka", img: "https://vignette.wikia.nocookie.net/hunterxhunter/images/b/b8/Hisoka_bloodlust.jpg/revision/latest?cb=20140214023234"}],
                show: !show});
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

