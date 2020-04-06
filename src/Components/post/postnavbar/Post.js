import React, {Component} from 'react';  
import Photovideo from './Photo-video';
import Textbox from './Textbox';
import Profile from '../../Navbar/Profilebutton';
import '../postnavbar/post.css';
import TextIcon from './Inputicon'



class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostOnWall: ""
    }
    this.updatePostOnWall = this.updatePostOnWall.bind(this);
  }
  updatePostOnWall = (value) => {
    this.setState({PostOnWall:value})
  }

    render() {
      return (
    <div className="postcontainer">
        <div className="post">
            <TextIcon/>
            <Photovideo/>
        </div>
        <div className="Profiletext">
            <Profile/>
            <Textbox panelType={this.state.PostOnWall} updatePostOnWall={this.updatePostOnWall}/>
        </div>
    </div>

      );
    }
}

export default Post;
  