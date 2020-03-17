import React, {Component} from './node_modules/react';    


class Navbar extends Component {
    render() {
    return
      <div>
        <SearchBar/>
      </div>
    }
  }
  class SearchBar extends Component {
    render() {
      return( <form>
        <input type="text"/>
        </form>
      );
    }
  }

  export default NavBar
  