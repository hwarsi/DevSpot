import React, {Component} from 'react';  
import { Input } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;


class AntSearch extends Component {
    constructor(props) {
      super(props);
  }
      render() {
        return( 
            <div>
       <Search onChange={(e)=>console.log(e.target.value)} placeholder="input search text"
        onSearch={value => console.log(value)} 
        enterButton style={{ width: 500, margin: 10}}/>

  </div>
        );
      }
    }

export default AntSearch;
