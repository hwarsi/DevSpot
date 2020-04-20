import React from 'react';
import profile from '../../../static/img/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fathumbsup from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import facomment from '@fortawesome/fontawesome-free-solid/faComment';
import fasharesquare from '@fortawesome/fontawesome-free-solid/faShareSquare';
import 'antd/dist/antd.css';
import Comments from './CommentBox';
import { Input } from 'antd';
import Textbox from './Textbox';
import PostingComment from './PostingComment'


const { TextArea } = Input;


const PostOnWall = (props) => (
    <div>
        {props.postInfo.map( (item) => (
            <div>
                <div className="PostOnWall">
                        <div className="topbar">
                            <img src = {profile} className="image"/>
                            <div className="name">Brad Pitt</div>
                            <div>{item.time}</div>
                        </div>
                    <div className="text">{item.post}</div>
                    <img src={item.uploadedImage} />

                </div>
                <div className="engagementBar">
                    <div><FontAwesomeIcon  icon={fathumbsup} size="2x"/> Like</div>
                    <div><FontAwesomeIcon  icon={facomment} size="2x"/> Comment</div>
                    <div><FontAwesomeIcon  icon={fasharesquare} size="2x"/> Share</div>
                </div>
                <div className="postCommentBox">
                <img src = {profile} className="image"/>
                <TextArea type = "text" placeholder="Write a comment" autoSize id="comment" onChange={props.onChange}/>
                <div>    
                    <button onClick={props.onClick}></button>
                </div>                
                </div>
                {item.comment.map( (items) => (
                <div>
                    <div> {items} </div>
                </div>
                ))
            }

    </div>
    ))
    }

    </div>
)

  

export default PostOnWall;
