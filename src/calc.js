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
            <button className="btn btn-primary" onClick={this.lings}>1</button>
            <button className="btn btn-primary" onClick={this.lings}>2</button>
            <button className="btn btn-primary" onClick={this.lings}>3</button>
            <button className="btn btn-primary" onClick={this.lings}>4</button>
            <button className="btn btn-primary" onClick={this.lings}>5</button>
            <button className="btn btn-primary" onClick={this.lings}>6</button>
            <button className="btn btn-primary">7</button>
            <button className="btn btn-primary">8</button>
            <button className="btn btn-primary">9</button>
            <button className="btn btn-danger">0</button>
        </div>
    )
 }
}

export default Main