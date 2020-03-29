import React, {Component} from 'react';  

class About extends Component {
    constructor(props) {
        super(props);

        this.aboutPage = this.aboutPage.bind(this);
    }

    aboutPage = () => {
        console.log('test3');
        alert("You are being routed to the about page");
    }

    render() {
        return(
            <button className="aboutpage" onClick={this.aboutPage}>About</button>
        );
    }
}

export default About;
