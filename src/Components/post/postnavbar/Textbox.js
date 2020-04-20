import React, {Component} from 'react';  
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import PostOnWall from './PostOnWall'
import Comments from './CommentBox'
import PostingComment from './PostingComment'
import profile from '../../../static/img/profile.jpg'
import axios from 'axios';



const { TextArea } = Input;

class Textbox extends Component {
    constructor(props) {
      super(props);
      this.handleClick.bind(this);
      this.state = {
        textArea: '',
        postInfo: [],
        clicked: 0,
        commentArea: '',
        commentInfo: [],
        commentClick: 0
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleChangeComment = this.handleChangeComment.bind(this);
      this.handleChangeComment = this.handleChangeComment.bind(this);

    }

    componentWillMount() {

        let URL = 'http://127.0.0.1:5000/Walls/getComments ';
        let HEADERS = {'content-type':'application/json', 'authorization':'sdjfjdskfj45j4ekj'};

        axios.get(URL, HEADERS)
        .then((response) => {
            console.log(response);
            let postData = response.data;
            let posts = [];

            for (let i=0; i<postData.length; i++) {
                let id = i;
                let currentPost = postData[i]['post'];
                let currentTime = postData[i]["time"]
                let comment = postData[i]["comment"]
                posts.push({"id":id, 'post':currentPost, "time":currentTime, "comment": [comment]});
            }

           this.setState({postInfo:posts});

        })
        .catch((error) => {
            console.log(error);
        });
              // Axios Call to Get Posts

}
    
    handleChange(event) {
      const myValue = event.target.value;
      this.setState({
        textArea: myValue
      })
    }
    
     
     handleClick = e => {
       e.preventDefault();
       this.setState(({ clicked }) => ({ clicked: clicked + 1 }));

       let time = new Date().toLocaleString();
       let uploadedImage = '';
       let post = '';
       let comment = '';


      if (e.target.files && e.target.files[0]){
        uploadedImage = URL.createObjectURL(e.target.files[0]);
      } else {
        post = this.state.textArea;
        uploadedImage = null;
      }

       let newPost = {post:post, time: time, 'uploadedImage':uploadedImage, comment: [comment]} // New Post

       let currentPosts = this.state.postInfo;      // Old State

       let newPosts = currentPosts;
       newPosts.push(newPost);   //New State

       this.setState({postInfo:newPosts});
       const cors = require('cors')

       let URL = 'http://127.0.0.1:5000/Walls/saveComments'
       let HEADERS = {method: "POST","Content-Type": "application/x-www-form-urlencoded",'Access-Control-Allow-Origin': '*','Accept': 'application/json'}
       let data = {
         'post': post,
         'time': time,
         'comment': comment
       }

       console.log(this.state.postInfo)
       axios.post(URL, HEADERS, data)
         .then(function (response) {
           console.log(response);
           console.log(data)
         }).catch(function (error) {
          console.log(error);
        });
        }

     handleChangeComment(event) {
      const myValue = event.target.value;
      this.setState({
        commentArea: [myValue]
      })
    }

    handleClickComment = (e) => {
      e.preventDefault();
      this.setState(({ clicked }) => ({ clicked: clicked + 1 }));
      this.setState(({ commentClick }) => ({ commentClick: commentClick + 1 }))
      let comment = this.state.commentArea
      let newComment = comment
      let currentComment = this.state.commentInfo;      
      let newComments = [...currentComment, ...newComment]
      let commentClick = this.state.commentClick
      let click = this.state.clicked
      let postInfo = this.state.postInfo;
      console.log(newComments)

      while(click<Infinity) {
        postInfo[click];
        let postInfoCopy = this.state.postInfo
        postInfoCopy.comment = [newComments]
        this.setState({
          postInfo: postInfoCopy
        })

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
              <button className="postbutton" onClick={this.handleClick}>Post</button>
              <div>
              <input type="file" onChange={this.handleClick} className="uploadImageButton"/>
            </div>
            
            {this.state.postInfo && (
              <div>
                 <PostOnWall postInfo={this.state.postInfo}  onChange={this.handleChangeComment} 
                  postInfo={this.state.postInfo} onClick={this.handleClickComment}/>
              </div>
            )}
        </div>
        );
    }
  }
  

export default Textbox;
