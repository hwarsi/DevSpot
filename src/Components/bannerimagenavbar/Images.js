import React, {Component} from 'react';  


class Images extends Component {

    constructor(props) {
        super(props);

        this.imageRoute = this.imageRoute.bind(this);
    }

    imageRoute = () => {
        console.log('test2');
        alert("You are being routed to the Images page");
    }

    render() {
        return(
        <button className="imagegallery" onClick={this.imageRoute}>Images</button>
        );
    }
}

export default Images;