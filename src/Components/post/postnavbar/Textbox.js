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
      this.handleChange = this.handleChange.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.addComment = this.addComment.bind(this);

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

    handleComment(event) {
      const myValue = event.target.value;
      this.setState({
        commentArea: [myValue]
      })
    }

    addComment = (time) => {
      console.log(time);
      let allPosts = this.state.postInfo;
      let comment = this.state.commentArea;

      for (let i = 0; i<allPosts.length; i++) {
        let currentPost = allPosts[i];

        if (currentPost['time'] === time) {
          currentPost['comment'].push(comment)
        } 
      }

      this.setState({postInfo:allPosts});

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
                <PostOnWall postInfo={this.state.postInfo}  handleComment={this.handleComment} addComment={this.addComment}/>
            </div>
          )}
      </div>
      );
    }
  }
  

export default Textbox;
