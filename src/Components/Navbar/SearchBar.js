import React, {Component} from 'react';  
import search from '../../static/img/searchicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fasearch from '@fortawesome/fontawesome-free-solid/faSearch';




class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.search.bind(this);
}
search() {
  alert("Search")
}
    render() {
      return( 
        <form>
          <input type="text" className="searchbar"/>
          <FontAwesomeIcon id="search" icon={fasearch} size = "2x" onClick={this.onClick}/> 
        </form>
      );
    }
  }



export default SearchBar;
