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
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      id = "antdesignsearch"
      onSearch={value => console.log(value)} 
    />
  </div>
        );
      }
    }

export default AntSearch;

