import React, {Component} from 'react';

class UserRegistration extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = () => {
        console.log('Hey');
    }

    render() {
        return (
            <div className="FormContainer" >
                <div className="drow">
                    <div className="dcol">
                       <button onClick={this.handleSubmit}>Hey</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default UserRegistration;