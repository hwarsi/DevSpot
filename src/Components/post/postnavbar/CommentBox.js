import React, {Component} from 'react';  
import { Input } from 'antd';
import profile from '../../../static/img/profile.jpg'
import PostingComment from './PostingComment'


const { TextArea } = Input;


class Comments extends Component {
    constructor(props) {
      super(props);
      this.state = { commentArea: [],
                    comment: '',
                    clicked:0}
                    }

    handleChange(event) {
        const newText = [];
        const myValue = event.target.value;
        newText.push(myValue);
        this.setState({
            commentArea: newText
        })
        console.log(this.state.commentArea)
      } 

      handleClick = e => {
        e.preventDefault();
        this.setState(({ clicked }) => ({ clicked: clicked + 1 }));
        this.setState({comment:this.state.commentArea});
        const newText= [];
        newText.push(this.state.comment)
        console.log(newText)
      }

      renderClick =  () => {
          const newComment = [];
          for (let i=1; i <= this.state.clicked; i++) {
            newComment.push( <PostingComment NewComment={this.state.comment}/>)
          }
          return newComment
      }


    render() {
        return(
        <div>
            <div className="postCommentBox">
                <img src = {profile} className="image"/>
                <TextArea placeholder="Write a comment" autoSize id="comment" onChange={this.handleChange.bind(this)}/>
                <div>     
                </div>
                <button className="postcomment" onClick={this.handleClick.bind(this)}>Post Comment</button>
            </div>
            {this.renderClick()}
        </div>
        )
    };
}



    export default Comments;



