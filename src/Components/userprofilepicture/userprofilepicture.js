import React, {Component} from 'react';  
import Navbar from '../Navbar/Navbar' 
import BannerImage from './Bannerimage';

        class Userprofilepicture extends Component {
            constructor(props) {
                super(props);
            }
            render() {
                return(
                <div>
                    <Navbar/>
                    <BannerImage/>
                </div>
            )
        }
    }


        export default Userprofilepicture;

