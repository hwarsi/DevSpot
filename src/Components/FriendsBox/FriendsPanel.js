import React, { Component } from 'react';
import bob from './images/bob .jpeg'
import Deniz from './images/Deniz.jpg'
import Jennifer from './images/Jennifer.jpeg'
import Ichigo from './images/Ichigo.jpeg'
import Kuwabara from './images/Kuwabara.jpg'
import Naruto from './images/Naruto.png'
import Thomas from './images/Thomas.jpg'
import Tuba from './images/Tuba.jpg'
import yusuke from './images/yusuke.jpg'
import './FriendsPanel.css'



class FriendsPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="FriendsPanel"> 
            <div className="Title">Friends</div> 
            <div className="container">
                <div>
                     <img src={yusuke} className="friendsimages" />
                     <div>Yusuke Urameshi</div> 
                </div>
                <div>
                     <img src={Kuwabara} className="friendsimages"/>
                     <div>Kazuma Kuwabara</div> 
                </div>
                <div>
                     <img src={Naruto} className="friendsimages"/>
                     <div>Naruto Uzumaki</div> 
                </div>
                <div>
                     <img src={Thomas} className="friendsimages"/>
                     <div>Thomas shelby</div> 
                </div>
                <div>
                     <img src={bob} className="friendsimages"/>
                     <div>Bob Dylan</div> 
                </div>
                <div>
                     <img src={Jennifer} className="friendsimages"/>
                     <div>Jennifer Aniston</div> 
                </div>
                <div>
                     <img src={Tuba} className="friendsimages"/>
                     <div>Tuba Büyüküstün</div> 
                </div>
                <div>
                     <img src={Deniz} className="friendsimages"/>
                     <div>Deniz Baysal</div> 
                </div>
                <div>
                     <img src={Ichigo} className="friendsimages"/>
                     <div>Ichigo Kurosaki</div> 
                </div>
             </div>
        </div>

        );
    }
}













export default FriendsPanel;
