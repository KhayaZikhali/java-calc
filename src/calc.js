import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// find a way to display the numbers that a re clicked on to the display

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       display  : " "
      };
      this.reset = this.reset.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.equal = this.equal.bind(this)
    }

 // function to alter the state
 //  add event listeners  
     
    handleClick = (value) => {
        this.setState({ display : this.state.display + value})
      }
    
    equal(){
            var result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
            var x = document.getElementById('display').value    
            console.log(eval(this.state.display))
            this.setState(state=>{
                return{ display : eval(this.state.display) }
            })
    }

    reset(){
        this.setState (state =>{ 
            return {display : 0 } })
    }

    render() {
    return (
        <div className="main">
            <div className="display" id="display">{this.state.display}</div>  
            <button className="btn btn-lg btn-danger" id="reset" onClick={this.reset} value="reset">AC</button>
            <button className="btn btn-lg btn-secondary" id="divide" onClick={()=>this.handleClick("/")} >/</button>
            <button className="btn btn-lg btn-secondary" id="add" onClick={()=>this.handleClick("+")} >+</button>
            <button className="btn btn-lg btn-secondary" id="subtract"onClick={()=>this.handleClick("-")}>-</button>
            <button className="btn btn-lg btn-secondary" id="multiply" onClick={()=>this.handleClick("*")}>*</button>
            {/* add shadow to buttons */}
            <button className="btn button-secondary btn-lg" id='equal' onClick={this.equal}>=</button>
            <button className="btn btn-primary btn-click" id='nine' onClick={()=>this.handleClick(9)}>9</button>
            <button className="btn btn-primary btn-click" id='eight' onClick={()=>this.handleClick(8)}>8</button>
            <button className="btn btn-primary btn-click" id='seven' onClick={()=>this.handleClick(7)}>7</button>
            <button className="btn btn-primary btn-click" id='six' onClick={()=>this.handleClick(6)}>6</button>
            <button className="btn btn-primary btn-click" id='five' onClick={()=>this.handleClick(5)}>5</button>
            <button className="btn btn-primary btn-click" id='four' onClick={()=>this.handleClick(4)}>4</button>
            <button className="btn btn-primary btn-click" id='three' onClick={()=>this.handleClick(3)}>3</button>
            <button className="btn btn-primary btn-click" id='two' onClick={()=>this.handleClick(2)}>2</button>
            <button className="btn btn-primary btn-click" id='one' onClick={()=>this.handleClick(1)}>1</button>
            <button className="btn btn-primary btn-click" id='point' onClick={()=>this.handleClick(".")}>.</button>
            <button className="btn btn-primary btn-click" id="zero" onClick={()=>this.handleClick(0)}>0</button>
        </div>
    )
 }
}

export default Main