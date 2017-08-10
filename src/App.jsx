import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    //deadline: 'August 09, 2017',
    //deadline: 'August 09, 2017 12:30',
    deadline: 800,
    newDeadline: '',
    counter: 0
  }
}

changeDeadline(){
  this.setState(
    {deadline: this.state.newDeadline,
      counter: 200
    }
  )
}

  render() {
    return (<div className="App">
      <div className="App-title">Counting down {this.state.deadline} </div>
      <Clock
        deadline={this.state.deadline}
        counter={this.state.counter}
      />
      <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder='new time'/>
      <button onClick={()=>this.changeDeadline()}>Submit</button>
    </div>)

  }
}

export default App;
