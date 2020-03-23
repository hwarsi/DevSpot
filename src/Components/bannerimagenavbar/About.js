import React, {Component} from 'react';  
import { render } from 'node-sass';


        class About extends Component {
            constructor(props) {
                super(props);
        }
        aboutpage = () => {
            alert("You are being routed to the about page")
        }
        render() {
            return(
            <button onCLick={this.aboutpage}>About</button>
            );
        }
    }

        export default About
