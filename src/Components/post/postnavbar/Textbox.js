import React, {Component} from 'react';  
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import PostOnWall from './PostOnWall'
import { render } from 'react-dom';


class Textbox extends Component {
    constructor(props) {
      super(props);
      this.handleClick.bind(this);
      this.state = {
        textArea: [],
        text: "",
        show: false,
        curTime : new Date().toLocaleString(),
        clicked: 0,
        uploadedImage: null
      };
    }

    handleChange(event) {
      const newText = [];
      const myValue = event.target.value;
      newText.push(myValue);
      this.setState({
        textArea: newText
      })
    }
    

      renderClick = () => {
        const newPost = [];
       for (let i = 1; i <= this.state.clicked; i++) {
         newPost.push(<div key={i}> <PostOnWall value={i} PostOnWall={this.props.PostOnWall} text={this.state.text} time={this.state.curTime} uploadedImage={this.state.uploadedImage}/></div>);
       }
       return newPost;
       
      
     };
     
     handleClick = e => {
       e.preventDefault();
       this.setState(({ clicked }) => ({ clicked: clicked + 1 }));
       this.setState({text:this.state.textArea});
       const newText= [];
       newText.push(this.state.textArea)
       console.log(newText)
     }

     onChangePhoto = event => {
      if (event.target.files && event.target.files[0]){
         let img = event.target.files[0];
         this.setState({ uploadedImage: URL.createObjectURL(img)});
       }
    }

      render() {
        return (
        <div>
            <textarea className="Textbox" 
            rows="2" cols="30"
             type = "text" 
             onChange={this.handleChange.bind(this)}
             value={this.state.textArea} >
            </textarea>
              <button className="postbutton" onClick={this.handleClick.bind(this)}>Post</button>
              <div>
              <input type="file" onChange={this.onChangePhoto} className="uploadImageButton"/>
            </div>
              {this.renderClick()}
        </div>
  
        );
    }
  }
  

export default Textbox;
