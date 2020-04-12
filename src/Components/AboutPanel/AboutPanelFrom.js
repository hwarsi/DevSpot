import React, { Component, useState}  from 'react';
import AboutPanel from './About pannel';
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



class AboutPanelForm extends Component {
    constructor(props) {
        super(props);
    


        this.submitData = this.submitData.bind(this);
        this.state = {
          work: "Fight Club",
          lives: "LA",
          from: "Springfield Missouri",
          workArea: [],
          livesArea: [],
          fromArea: [],
          show:false
      }
    }

    submitData = () => {
        console.log('test2');
        alert("You are being routed to the Images page");
    }

    handleChangeWork(event) {
      const newText = [];
      const myValue = event.target.value;
      newText.push(myValue);
      this.setState({
        workArea: newText
      })
      console.log(this.state.workArea)
    }

    handleChangeLives(event) {
      const newText = [];
      const myValue = event.target.value;
      newText.push(myValue);
      this.setState({
        livesArea: newText
      })
      console.log(this.state.livesArea)
    }

    handleChangeFrom(event) {
      const newText = [];
      const myValue = event.target.value;
      newText.push(myValue);
      this.setState({
        fromArea: newText
      })
      console.log(this.state.fromArea)
    }

    submitData = () => {
      this.setState({ work: this.state.workArea,
      lives: this.state.livesArea,
    from: this.state.fromArea})
    }

    handleShow = () => {
      this.setState({show:true})
    }

    handleHide = () => {
      this.setState({show:false})
    }



    render() {
        return(
          <div>
              <AboutPanel work={this.state.work} lives={this.state.lives} from={this.state.from}/>
              <Button onClick={this.handleShow}>Edit Intro</Button>
              <Modal show={this.state.show} >
                <Modal.Header>Edit Intro Details</Modal.Header>
                <Modal.Body>
            <form className="form">
              <div>Enter your details below!</div>
              <div>
                <div>Where do you work?</div>
                <input type="text" text={this.state.work} onChange={this.handleChangeWork.bind(this)}></input>
              </div>
              <div>
                <div>Where do you live?</div>
                <input type="text" text={this.state.lives} onChange={this.handleChangeLives.bind(this)}></input>
              </div>
              <div>Where are you from?</div>
                <input type="text" text={this.state.from} onChange={this.handleChangeFrom.bind(this)}></input>
            </form>
            <button onClick={this.submitData}>Submit</button>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
      );
    }
}


    
  
    export default AboutPanelForm;



