import React, {Component} from 'react';  
import search from '../../static/img/searchicon.png'



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
}
onSubmit() {
  alert("fucking hell")
}
    render() {
      return( 
        <form>
          <input type="text"/>
          <button onSubmit={this.onSubmit}><img src={search} alt="logo" style={{height:20,width:20}}/></button>
        </form>
      );
    }
  }



export default SearchBar;
