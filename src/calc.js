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
      this.handleKeyPress =this.handleKeyPress.bind(this)
    }
 //  add event listeners  

    // handles when the button is clicked on using the cursor 
    handleClick = (value) => {
        this.setState({ display : this.state.display + value})
      }

    // handles when the button is clicked on using the cursor   
    handleKeyPress = (key) => {
        if(key === 1||2||3||4||5||6||7||8||9||0){
            this.setState(state => {
                return{display : key}
            })
        }
    }

// remove the bug that occurs twhen the zero button is pressed 

     // return the result of the 
      equal(){
            var result = document.getElementById('display').value;
            document.getElementById('display').value = result;
            this.setState(state=>{
                return{display : eval(this.state.display)}
            })
    }
    // clears the display and return zero   
    reset(){
        this.setState (state =>{ 
            return {display : 0 }})
    }

    render() {
    return (
        <div className="main">
            <div className="display" id="display">{this.state.display}</div>  
            <button className="btn btn-lg btn-danger" id="reset" onClick={this.reset} value="reset">AC</button>
            <button className="btn btn-lg btn-secondary" id="divide" onClick={()=>this.handleClick("/")} onKeyPress={() => this.handleKeyPress("/")}>/</button>
            <button className="btn btn-lg btn-secondary" id="add" onClick={()=>this.handleClick("+")} onKeyPress={() => this.handleKeyPress("+")} >+</button>
            <button className="btn btn-lg btn-secondary" id="subtract"onClick={()=>this.handleClick("-")} onKeyPress={() => this.handleKeyPress("-")} >-</button>
            <button className="btn btn-lg btn-secondary" id="multiply" onClick={()=>this.handleClick("*")} onKeyPress={() => this.handleKeyPress("*")} >*</button>
            <button className="btn button-secondary btn-lg" id='equal' onClick={this.equal} onKeyPress={() => this.handleKeyPress("=")}>=</button>
            <button className="btn btn-primary btn-click" id='nine' onClick={()=>this.handleClick(9)} onKeyPress={()=>this.handleKeyPress(9)}>9</button>
            <button className="btn btn-primary btn-click" id='eight' onClick={()=>this.handleClick(8)} onKeyPress={() => this.handleKeyPress(8)}>8</button>
            <button className="btn btn-primary btn-click" id='seven' onClick={()=>this.handleClick(7)} onKeyPress={() => this.handleKeyPress(7)}>7</button>
            <button className="btn btn-primary btn-click" id='six' onClick={()=>this.handleClick(6)} 
            onKeyPress={() => this.handleKeyPress(6)} >6</button>
            <button className="btn btn-primary btn-click" id='five' onClick={()=>this.handleClick(5)} onKeyPress={() => this.handleKeyPress(5)}>5</button>
            <button className="btn btn-primary btn-click" id='four' onClick={()=>this.handleClick(4)} onKeyPress={() => this.handleKeyPress(4)} key={4}>4</button>
            <button className="btn btn-primary btn-click" id='three' onClick={()=>this.handleClick(3)} onKeyPress={() => this.handleKeyPress(3)}>3</button>
            <button className="btn btn-primary btn-click" id='two' onClick={()=>this.handleClick(2)}   onKeyPress={() => this.handleKeyPress(2)}>2</button>    
            <button className="btn btn-primary btn-click" id='one' onClick={()=>this.handleClick(1)}onKeyPress={() => this.handleKeyPress(1)}>1</button>
            <button className="btn btn-primary btn-click" id='point' onClick={()=>this.handleClick(".")} 
            onKeyPress={() => this.handleKeyPress(".")}>.</button>
            <button className="btn btn-primary btn-click" id="zero" onClick={()=>this.handleClick(0)} onKeyPress={() => this.handleKeyPress(5)}>0</button>
        </div>
    )
 }
}

export default Main