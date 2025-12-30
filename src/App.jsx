// import './App.css'
// import PersonalInfo from "./components/PersonalInfo";
// import { useState } from 'react';

// function initialCount() {
//   console.log("Calculating initial count");
//   return 0;
// }
// function App() {
//   // const [count, setCount] = useState(0)
//   const [count, setCount] = useState(() => initialCount());
//   const [mFlag,setFlag] = useState(true);

//     const changeCounter = (operation) => {
//       console.log(operation)
//       if(operation === "+"){
//         setCount(count + 1);  
//         // return () => setCount((prevCount) => prevCount + 1);
//       } else if(operation === "-"){
//         setCount(count - 1);
//         // return () => setCount((prevCount) => prevCount - 1);
//       }
//     }
//     const btnStyle = {
//       backgroundColor: 'red',
//       border: 'none',
//       color: 'white',
//       padding: '15px 32px',
//       textAlign: 'center',
//       textDecoration: 'none',
//       display: 'inline-block',
//       fontSize: '16px',
//       margin: '4px 2px',
//       cursor: 'pointer'
//     };
//   return (
    
//     <>
//      {/* <div className="App">
//       <PersonalInfo name="John Doe" age={30} />
//       <PersonalInfo name="Jane Smith" age={25} />
//       <PersonalInfo name="Alice Johnson" age={28} />
//      </div> */}
//      <h1>{count}</h1>
//      {/* <button onClick={addValue}>Increment</button> */}
//      <button className="customButton" onClick={() => changeCounter("+")}>Increment</button>
//      <button style={btnStyle}   onClick={() => changeCounter("-")}>Decrement</button>
//      <h3>{mFlag.toString()}</h3>
//      <button onClick={() => setFlag(!mFlag)}>Toggle Flag</button>
//     </>
//   )
// }

// export default App

//class based component demo
import './App.css'
import React,{Component} from 'react'
export default class App extends Component {
  state = {
    counter : 0
  }
  increment=()=>{
    let c = this.state.counter;
    c++;
    this.setState({counter : c})
    // this.setState((state,props) => {
    //   return {counter : c}
    // },()=>{console.log("State updated")})
  }
  componentDidMount(){
    console.log("Component mounted")
  }
  componentWillUnmount(){
    console.log("Component will unmount")
  }
  shouldComponentUpdate(){
    return false;
  }
  render(){
    console.log("Render method called")
    return (
      <div className='App'>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}