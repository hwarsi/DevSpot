import React, {Component, useDebugValue} from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faimages from '@fortawesome/fontawesome-free-solid/faImages';
import About from '../../bannerimagenavbar/About';

class Photovideo extends Component {
    constructor(props) {
      super(props);

      this.uploadPhoto = this.uploadPhoto.bind(this);
  
    }
    uploadPhoto() {
        alert("upload photo bic man");
    }
  
    render() {
        return (
        <div>
            <FontAwesomeIcon
                icon={faimages}
                size= "2x"
                onClick={this.uploadPhoto} className="upload"/>
        </div>
  
        );
    }
  }

export default Photovideo;
