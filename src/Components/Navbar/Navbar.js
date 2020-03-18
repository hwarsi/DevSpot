import React, {Component} from 'react';    


class SearchBar extends Component {
  render() {
    return( 
      <form>
        <input type="text"/>
      </form>
    );
  }
}

class NavBar extends Component {
    render() {
      return (
        <div>
          <SearchBar/>
        </div>
      );
  }
}

export default NavBar;
  