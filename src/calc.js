import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       display  : 1
      };
      this.lings = this.lings.bind(this)
      this.cancel = this.cancel.bind(this)
    }

 // function to alter the state
    lings(num){
        this.setState (state => { 
            return {display : this.state.display + 3 } })
    }

    cancel(){
        this.setState (state =>{ 
            return {display : 0 } })
    }

    render() {
    return (
        <div className="main">
            <div className="display">{this.state.display}</div>  
            <button className="btn btn-lg btn-danger" id="cancel" onClick={this.cancel}>AC</button>
            <button className="btn btn-lg btn-secondary" id="divide" >/</button>
            <button className="btn btn-lg btn-secondary" id="add" >+</button>
            <button className="btn btn-lg btn-secondary" id="subtract">-</button>
            <button className="btn btn-lg btn-secondary" id="multiply">*</button>
            {/* add shadow to buttons */}
            <button className="btn button-secondary btn-lg" id='equal' onClick={this.lings}>=</button>
            <button className="btn btn-primary btn-click" id='nine' value={9} onClick={this.lings}>9</button>
            <button className="btn btn-primary btn-click" id='eight' onClick={this.lings}>8</button>
            <button className="btn btn-primary btn-click" id='seven' onClick={this.lings}>7</button>
            <button className="btn btn-primary btn-click" id='six' onClick={this.lings}>6</button>
            <button className="btn btn-primary btn-click" id='five' onClick={this.lings}>5</button>
            <button className="btn btn-primary btn-click" id='four' onClick={this.lings}>4</button>
            <button className="btn btn-primary btn-click" id='three' onClick={this.lings}>3</button>
            <button className="btn btn-primary btn-click" id='two' onClick={this.lings}>2</button>
            <button className="btn btn-primary btn-click" id='one' onClick={this.lings}>1</button>
            <button className="btn btn-primary btn-click" id='point' onClick={this.lings}>.</button>
            <button className="btn btn-primary btn-click" id="zero" onClick={this.lings}>0</button>
        </div>
    )
 }
}

export default Main