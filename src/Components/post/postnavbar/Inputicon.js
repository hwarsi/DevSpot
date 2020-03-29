import React, {Component} from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';



class TextIcon extends Component {
  constructor(props) {
    super(props);

    this.uploadPhoto = this.uploadPhoto.bind(this);

  }
  uploadPhoto() {
      alert("upload photo bic man");
  }

  render() {
      return (
      <div id= "pencilbutton">
        <FontAwesomeIcon
          icon={faPencilAlt}
          size= "2x"
          id="pencil"/>
        <p className="titlepencil">Create Post</p>
      </div>

      );
  }
}

export default TextIcon;






















