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
        commentArea: '',
        commentInfo: [],
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.addComment = this.addComment.bind(this);
      this.deleteComment = this.deleteComment.bind(this);

    }

    componentWillMount() {

        // Axios Call to GET Posts
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
                let time = postData[i]["time"]
                let comments = postData[i]["comments"]
                posts.push({"id":id, 'post':currentPost, "time":time, "comment": comments});
            }

            console.log(posts);

            this.setState({postInfo:posts});

        })
        .catch((error) => {
            console.log(error);
        });


    }
      
    handleChange(event) {
      const myValue = event.target.value;
      this.setState({
        textArea: myValue
      })
    }
        
    handleClick = e => {
      e.preventDefault();

      let time = new Date().toLocaleString();
      let uploadedImage = '';
      let post = '';

      if (e.target.files && e.target.files[0]){
        uploadedImage = URL.createObjectURL(e.target.files[0]);
      } else {
        post = this.state.textArea;
        uploadedImage = null;
      }

      let newPost = {post:post, time: time, uploadedImage: uploadedImage, comment: []} // New Post

      let currentPosts = this.state.postInfo;      // Old State

      let newPosts = currentPosts;
      newPosts.push(newPost);   //New State

      let URL = 'http://127.0.0.1:5000/Walls/savePost'
      let HEADERS = { 'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS', 
                      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 
                      'accept': 'application/json', 'content-type’': 'application/json'}

      let data = {post:post, time: time, comments: []}

      axios.post(URL, data, HEADERS)
        .then( (response) => {
          console.log(response);
          this.setState({postInfo:newPosts});
        })
        .catch( (error) => {
          console.log(error);
          alert('Failed to save post!')
        });
    }

    handleComment(event) {
      const myValue = event.target.value;
      this.setState({
        commentArea: [myValue]
      })
    }

    addComment = (e) => {

      let postTime = e.target.id;
      let allPosts = this.state.postInfo;
      let comment = this.state.commentArea;
      let time = new Date().toLocaleString();

      let newComment = {"comment":comment, "time":time}

      for (let i = 0; i<allPosts.length; i++) {
        let currentPost = allPosts[i]; // finding info for current post

        let commentArray;

        if (currentPost['time'] === postTime) { // seing if current time matches with post time

          commentArray = currentPost['comment']; // I am setting my commentArray to equal my current comment 
          commentArray.push(newComment); // now I am pushing my current comment into my array 
      
        }

        let URL = 'http://127.0.0.1:5000/Walls/saveComments'
        let HEADERS = { 'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS', 
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 
                    'accept': 'application/json', 'content-type’': 'application/json'}
        
        let data = {"change_item": {"comments": commentArray }, "searchTerm": {"post": currentPost["post"], "time": currentPost["time"] }}
  
        axios.post(URL, data, HEADERS)
          .then(function (response) {
            console.log(response);
            this.setState({postInfo:allPosts});     //Set State when everything in the backend works out.
          })
          .catch(function (error) {
            console.log(error);
            alert('Failed to save comment!')
          })
      }
    }

    deleteComment = (e, commentTime, postTime) => {
      //let commentTime = e.target.id;
      //let postTime = e.target.name;
      console.log(commentTime);
      console.log(postTime);

      let allPosts = this.state.postInfo;
      let targetPost;

      for (let i = 0; i<allPosts.length; i++) {       // Loops over all Posts

        targetPost = allPosts[i];                   

        if (targetPost['time'] === postTime) break;   // Stops the loop when we find the right post
      }

      let comments = targetPost['comment']     
      let targetComment;    

      for (let i = 0; i < comments; i++) {           // Loops over all comments

        targetComment = comments[i]

        if (targetComment['time'] === commentTime) comments.splice(i)       // Remove Comment at that index

        let URL = 'http://127.0.0.1:5000/Walls/saveComments'
        let HEADERS = { 'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS', 
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 
                    'accept': 'application/json', 'content-type’': 'application/json'}

        let data = {"change_item": {"comments": comments }, "searchTerm": {"post": targetPost["post"], "time": targetPost["time"] }}
        
        axios.post(URL, data, HEADERS)
            .then( (response) => {
              console.log(response);
              this.setState({postInfo:allPosts});   //Set State when everything in the backend works out.
            })
            .catch( (error) => {
              console.log(error);
              alert('Failed to delete comment!')
          }
        )
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
                <PostOnWall postInfo={this.state.postInfo}  
                  handleComment={this.handleComment} 
                  addComment={this.addComment}
                  deleteComment={this.deleteComment}/>
            </div>
          )}
      </div>
      );
    }
  }
  
  

export default Textbox;
