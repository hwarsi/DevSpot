import React, {Component} from 'react';  
import Wall from '../bannerimagenavbar/Bannerimagenavbar'
import './layout.css'
class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="wall">
                <Wall/>
            </div>
        );
    }
}

export default Layout;