import React, {Component} from 'react';  
import { Input } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';


const { Search } = Input;
class AutoCompleteText extends Component{
    constructor(props) {
        super(props);
        this.items = [
            "penis",
            "balls sack",
            "tommy"
        ]
        this.state = {
            suggestions: [],
            text: '',
            items: [{ name:'', currentName:''}]
        };
    }
 
    componentDidMount() {
        let URL = 'http://hp-api.herokuapp.com/api/characters';
        let HEADERS = {'content-type':'application/json', 'authorization':'sdjfjdskfj45j4ekj'};

        axios.get(URL, HEADERS)
        .then((response) => {
            let usersData = response.data;
            let names = [];
            for (let i=0; i<usersData.length; i++) {
                let currentName = usersData[i]['name'];
                names.push({'name': currentName});
            }
            const items = names.map(({
                name
              }) => name)
              console.log(items);
            this.setState({items}); 
    })
    .catch((error) => {
        console.log(error);
    });
}

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.state.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions, text: value}));
        console.log(suggestions)
    }

    suggestionSelected (value) {
        this.setState(() =>({
            text:value,
            suggestions: [],
        }))
        
    }

    renderSuggestions () {
        const {suggestions} = this.state;
        if (suggestions.length === 0){
            return null;
        }
        return (
            <ul className="searchSuggestions">
                {suggestions.map((item)=> <div onClick={() => this.suggestionSelected(item)}>{item}</div>)}
            </ul>
        );
    }
    render() {
        const {text} = this.state;
        return(
    <div>
        <div>
            <Search placeholder="input search text" 
            value = {text} 
            onSearch={value => console.log(value)} 
            onChange={this.onTextChanged}
            enterButton style={{ width: 500, margin: 10}}/>
            {this.renderSuggestions()}  
        </div>
    </div>
        )
    }
}

export default AutoCompleteText;
