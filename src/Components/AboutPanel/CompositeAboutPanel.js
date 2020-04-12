import React, {Component} from 'react';  
import AboutPanel from './About pannel'
import AboutPanelForm from './AboutPanelFrom'




class CompositeAboutPanel extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        return(
            <div>
                <AboutPanelForm/>
            </div>
        );
    }
  }
  
  export default CompositeAboutPanel;
  