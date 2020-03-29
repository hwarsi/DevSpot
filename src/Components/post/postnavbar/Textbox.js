import React, {Component} from 'react';  
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';


class Textbox extends Component {
    constructor(props) {
      super(props);
  
    }
    post() {
        alert("Hey bic man")
    }
  
      render() {
        return (
        <div>
            <textarea className="Textbox" rows="2" cols="30">
            </textarea>
            <button className="postbutton" onClick={this.post}>Post</button>
        </div>
  
        );
    }
  }
  
  

export default Textbox;
