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
                <h4>Sign Up</h4>
                <p>It's quick and easy</p>
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
                <input type="text" name="contact" />
                <input type="text" name="password" />
                <div>
                    
                </div>
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