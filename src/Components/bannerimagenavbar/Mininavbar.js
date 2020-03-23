import React, {Component} from 'react';  
import About from './About'
import Images from './Images'
import Friends from './Friends'



        class Mininavbar extends Component {
            constructor(props) {
                super(props);
        }
            render() {
                return(
                    <div>
                        <About/>
                        <Friends/>
                        <Images/>
                    </div>
                );
            }
        }

            export default Mininavbar