import React from "react";

class List extends React.Component {
    state = {
        numbers:[1,2,3,4,5,6]
    }

    addNumbers = ()=>{
        const randomNum = Math.round(Math.random()*100)
        this.setState({numbers:[...this.state.numbers,randomNum]})
      }

    componentDidMount(){
        console.log("Component Did Muont");
    }
    componentDidUpdate(prevProps,prevState){
        // console.log(prevProps,prevState);
        // console.log("Component Did Update");
        // console.log(this.props,this.state);
        if(this.state.numbers.length !== prevState.numbers.length){
            console.log("List refleshed!");
        }
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }
  render() {
    return (
      <div>
        <ul>
          {this.state.numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
        <button onClick={this.addNumbers}>Add number</button>
      </div>
    );
  }
}

export default List;