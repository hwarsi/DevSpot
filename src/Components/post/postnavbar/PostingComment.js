import React from 'react';
import { Input } from 'antd';
import profile from '../../../static/img/profile.jpg'



const { TextArea } = Input;

const PostingComment = (props) => (
  <div>
      {props.postInfo.map( (item) => (
        <div>
          <h1> {item.comments} </h1>
        </div>
        ))
      }
  </div>
)

export default PostingComment 

