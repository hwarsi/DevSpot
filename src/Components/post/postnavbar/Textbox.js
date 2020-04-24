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
        commentClick: 0,
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.addComment = this.addComment.bind(this);
      this.deleteComment = this.deleteComment.bind(this);

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
                let comments = postData[i]["comments"]
                posts.push({"id":id, 'post':currentPost, "time":currentTime, "comment": comments});
            }

            console.log(posts);

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

      this.setState({postInfo:newPosts});

      let URL = 'http://127.0.0.1:5000/Walls/savePost'
      let HEADERS = {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS', 
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'accept': 'application/json', 'content-type’': 'application/json'}

      let data = {post:post, time: time, comments: []}

      console.log(this.state.postInfo)
      axios.post(URL, data, HEADERS)
        .then(function (response) {
          console.log(response);
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

    addComment = (e) => {

      let time = e.target.id;
      let allPosts = this.state.postInfo;
      let comment = this.state.commentArea;
      let Currenttime = new Date().toLocaleString();
      let commentDict = {"comment":comment, "Currenttime":Currenttime}

      for (let i = 0; i<allPosts.length; i++) {
        let currentPost = allPosts[i]; // finding info for current post

        console.log(currentPost);

        if (currentPost['time'] === time) { // seing if current time matches with post time
          let commentArray = currentPost['comment']; // I am setting my commentArray to equal my current comment 
          commentArray.push(commentDict); // now I am pushing my current comment into my array 
          let URL = 'http://127.0.0.1:5000/Walls/saveComments'
          let HEADERS = {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS', 
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'accept': 'application/json', 'content-type’': 'application/json'}
          let data = {"change_item": {"comments": commentArray }, "searchTerm": {"post": currentPost["post"], "time": currentPost["time"] }}
          axios.post(URL, data, HEADERS)
              .then(function (response) {
                console.log(response);
              }).catch(function (error) {
              console.log(error);
            }
              )}

    console.log(allPosts);

    this.setState({postInfo:allPosts});
      }
    }

    deleteComment = (e) => {
      let time = e.target.id;
      let postTime = e.target.name;
      let allPosts = this.state.postInfo;
      let currentPost = allPosts; 
      let currentPostInfo = [];
      //console.log(allPosts[0]['time'])
      let commentDict = {"comment":null, "Currenttime":null}



      for(let i = 0; i<allPosts.length; i++) {
        let targetPost = allPosts[i]
        console.log(postTime);
        //console.log(time);
        if (targetPost['time'] === postTime) {
         // console.log(time);
          currentPostInfo.push(targetPost)
        }
      }

      for(let i = 0; i<currentPostInfo; i++) {
        let targetComment = currentPostInfo[i]
        let commentArray = currentPostInfo['comment']
        if (targetComment['Currenttime'] === time) {
          commentArray.push(commentDict)
          let URL = 'http://127.0.0.1:5000/Walls/saveComments'
          let HEADERS = {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS', 
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'accept': 'application/json', 'content-type’': 'application/json'}
          let data = {"change_item": {"comments": commentArray }, "searchTerm": {"post": currentPost["post"], "time": currentPost["time"] }}
          axios.post(URL, data, HEADERS)
              .then(function (response) {
                console.log(response);
              }).catch(function (error) {
              console.log(error);
            }
            )
        } 
        this.setState({postInfo:allPosts});

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
