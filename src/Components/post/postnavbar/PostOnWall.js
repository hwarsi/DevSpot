import React from 'react';
import profile from '../../../static/img/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fathumbsup from '@fortawesome/fontawesome-free-solid/faThumbsUp';
import facomment from '@fortawesome/fontawesome-free-solid/faComment';
import fasharesquare from '@fortawesome/fontawesome-free-solid/faShareSquare';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;


const PostOnWall = (props) => (
<div>
    <div className="PostOnWall">
            <div className="topbar">
                <img src = {profile} className="image"/>
                <div className="name">Brad Pitt</div>
                <div>{props.time}</div>
            </div>
        <div className="text">{props.text}</div>
    </div>
    <div className="engagementBar">
        <div><FontAwesomeIcon  icon={fathumbsup} size="2x"/> Like</div>
        <div><FontAwesomeIcon  icon={facomment} size="2x"/> Comment</div>
        <div><FontAwesomeIcon  icon={fasharesquare} size="2x"/> Share</div>
    </div>
    <div className="postCommentBox">
    <img src = {profile} className="image"/>
    <TextArea placeholder="Write a comment" autoSize id="comment"/>
    <div>     
      </div>
    </div>
    <button className="postcomment">Post Comment</button>
</div>
)
  
  
  

export default PostOnWall;
