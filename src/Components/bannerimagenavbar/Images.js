import React, {Component} from 'react';  


        class Images extends Component {
            constructor(props) {
                super(props);
        }
        imageroute = () => {
            alert("You are being routed to the Images page")
        }
        render() {
            return(
            <button onCLick={this.imageroute}>Images</button>
            );
        }
    }

        export default Images
