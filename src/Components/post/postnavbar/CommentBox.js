import React, {Component} from 'react';  
import { Input } from 'antd';
import profile from '../../../static/img/profile.jpg'
import PostingComment from './PostingComment'


const { TextArea } = Input;


class Comments extends Component {
    constructor(props) {
      super(props);
      this.state = { commentArea: '',
                    comment: [],
                    clicked:0}
                    }

      handleChange(event) {
        const myValue = event.target.value;
        this.setState({
          commentArea: myValue
        })
        console.log(this.state.commentArea)
      }

      handleClick = e => {
        e.preventDefault();
        this.setState(({ clicked }) => ({ clicked: clicked + 1 }));
        let postComment = '';
        postComment = this.state.commentArea

        let newComment = {'comment': postComment}
        console.log(newComment)

        let currentComment = this.state.comment;
        console.log(currentComment)

        let newComments = currentComment;
        newComments.push(newComment);
        this.setState({comment:newComments})
        console.log(this.state.comment);
      }

      renderClick = () => {
        const newButton = [];
        for (let i = 1; i <= this.state.clicked; i++) {
          newButton.push(<button key={i}>Post Comment</button>);
        }
        return newButton;
      }



    render() {
        return(
        <div>
            <div className="postCommentBox">
                <img src = {profile} className="image"/>
                <TextArea placeholder="Write a comment" autoSize id="comment" onChange={this.handleChange.bind(this)}/>
                <div>     
                </div>
                {this.renderClick()}
            </div>
        </div>
        )
    };
}



    export default Comments;



