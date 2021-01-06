import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        instrument: 0
      };
      this.lings = this.lings.bind(this)
    }
 // function to alter the state
    lings(){
        this.setState (state => { 
            return {instrument : 1 } })
    }

    render() {
    return (
        <div className="main">
          <div className="display">{this.state.instrument}</div>  
            <button className="btn btn-lg btn-danger"  id="cancel">AC</button>
              <button className="btn btn-lg btn-secondary" id="divide">/</button>
              <button className="btn btn-lg btn-secondary" id="add">+</button>
              <button className="btn btn-lg btn-secondary" id="subtract">-</button>
              <button className="btn btn-lg btn-secondary" id="multiply">*</button>
            <button className="btn btn-primary btn-click" id='nine'>9</button>
            <button className="btn btn-primary btn-click" id='eight'>8</button>
            <button className="btn btn-primary btn-click" id='seven'>7</button>
            <button className="btn btn-primary btn-click" id='six'>6</button>
            <button className="btn btn-primary btn-click" id='five'>5</button>
            <button className="btn btn-primary btn-click" id='four'>4</button>
            <button className="btn btn-primary btn-click" id='three'>3</button>
            <button className="btn btn-primary btn-click" id='two'>2</button>
            <button className="btn btn-primary btn-click" id='one'>1</button>
            <button className="btn btn-primary btn-click" id='point'>.</button>
            <button className="btn btn-primary btn-click" id='equal'>=</button>
            
            <button className="btn btn-primary btn-click" id="zero">0</button>
        </div>
    )
 }
}

export default Main