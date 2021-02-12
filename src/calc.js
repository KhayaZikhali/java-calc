import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// find a way to display the numbers that a re clicked on to the display
class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       display : " "
      };
      //key bindings
      this.clear = this.clear.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.equal = this.equal.bind(this)
      this.thousand = this.thousand.bind(this)
      this.million = this.million.bind(this)
      this.billion = this.billion.bind(this)
      this.handleKeyPress =this.handleKeyPress.bind(this)
    }
    //Key board event listener

    // handles when the button is clicked on using the cursor and console logs it           
    handleClick = (value) => {
        this.setState({ display : this.state.display + value})
      }
    // handles when the button is clicked on using the cursor   
    handleKeyPress = (key) => {}

// return the result of the display content
      equal(){
          try {
            var result = document.getElementById('display').value;
            document.getElementById('display').value = result;
            this.setState(state=>{
                return{display : eval(this.state.display)}
            })

    }
    // Catch the error if a non integer is entered 
        catch(err){ 
            console.error();
            this.setState(state=>{
                return{display : "NaN"}
            })
        }
}   
       //** Handles Click eventfor the three accesorry buttons at the bottom of the screen 
       thousand(){
         if(this.state.display !== ""){
         this.setState({ display : this.state.display + "000"})
        }
      }
        million(){
         if(this.state.display !== ""){
         this.setState({ display : this.state.display + "000000"})
        }
      }
        billion(){
         if(this.state.display !== ""){
         this.setState({ display : this.state.display + "000000000"})
        }
      }
      
    // clears the display and return zero   
    clear(){
        this.setState (state =>{ 
            return {display : " " }})
    }
    
    render() {
    return (
        <div className="main">
            <div className="display" id="display">{this.state.display}</div>  
            <button className="btn btn-lg btn-danger" id="clear" onClick={this.clear} value="clear">AC</button>
            <button className="btn btn-lg btn-secondary" id="divide" onClick={()=>this.handleClick("/")} onKeyPress={() => this.handleKeyPress("/")}>/</button>
            <button className="btn btn-lg btn-secondary" id="add" onClick={()=>this.handleClick("+")} onKeyPress={() => this.handleKeyPress("+")} >+</button>
            <button className="btn btn-lg btn-secondary" id="subtract"onClick={()=>this.handleClick("-")} onKeyPress={() => this.handleKeyPress("-")} >-</button>
            <button className="btn btn-lg btn-secondary" id="multiply" onClick={()=>this.handleClick("*")} onKeyPress={() => this.handleKeyPress("*")} >*</button>
            <button className="btn button-secondary btn-lg" id='equals' onClick={this.equal} onKeyPress={() => this.handleKeyPress("=")}>=</button>
            <button className="btn btn-primary btn-click" id='nine'  onClick={()=>this.handleClick("9")} >9</button>
            <button className="btn btn-primary btn-click" id='eight' onClick={()=>this.handleClick(8)} >8</button>
            <button className="btn btn-primary btn-click" id='seven' onClick={()=>this.handleClick(7)} >7</button>
            <button className="btn btn-primary btn-click" id='six'   onClick={()=>this.handleClick(6)} >6</button>
            <button className="btn btn-primary btn-click" id='five'  onClick={()=>this.handleClick(5)} >5</button>
            <button className="btn btn-primary btn-click" id='four' onClick={()=>this.handleClick(4)} >4</button>
            <button className="btn btn-primary btn-click" id='three' onClick={()=>this.handleClick(3)} >3</button>
            <button className="btn btn-primary btn-click" id='two' onClick={()=>this.handleClick(2)} >2</button>    
            <button className="btn btn-primary btn-click" id='one' onClick={()=>this.handleClick(1)} >1</button>
            <button className="btn btn-primary btn-click" id='decimal' onClick={()=>this.handleClick(".")} 
            >.</button>
            <button className="btn btn-primary btn-click" id="zero" onClick={()=>this.handleClick("0")} onKeyDown={()=>this.handleKeyPress(0)}>0</button>
            <button className="magnitude" onClick={this.thousand}> Thousand </button>
            <button className="magnitude" onClick={this.million} >Million</button>
            <button className="magnitude" onClick={this.billion} >Billion</button>
        </div>
    )
 }
}


// ! Add autocomplete support for the number 
// ? i.e enable the user to click a button to add the neccesary number of zeros for billions
// ? instead of having to manually type in all those zeros
// ** COMPLETE THE SITE AND AT LEAST ONE PROJECT FROM YOUR LEARN LIST


//work on a preview vid click 
export default Main