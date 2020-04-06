import React from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fatrash from '@fortawesome/fontawesome-free-solid/faTrash';



const Panel = (props) => (
        <ul className="Hey">
            <p className="notificationTitle">Notifications</p>
            {props.users.map((user,index) => (
                <div key={user.id} className="stylePanel">
                    <div>
                        <img src={user.img} className="images"/>
                    </div>
                    {props.panelType === "Notifications" && <p>{user.name} has posted on your wall!!!</p>}
                    {props.panelType === "FriendRequest" && <p>{user.name}</p>}
                     <div>
						{props.panelType === "Notifications" && (<FontAwesomeIcon 
						id="trash" icon={fatrash} 
						size = "2x" 
						onClick={props.deleteUsers} /> )}
                    </div>
                    {props.panelType === "FriendRequest" && <button className ="button"onClick={props.deletefriendrequest}>Delete</button>}
                    {props.panelType === "FriendRequest" && <button onClick={props.addfriend}>Confirm</button>}
                </div>
            ))}
        </ul>
    )

    export default Panel;

