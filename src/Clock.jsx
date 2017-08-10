import React, {Component} from 'react';
import './App.css';

class Clock extends Component
{
constructor(props){
  super(props);
  this.state={
    seconds: 0,
    appdeadline: this.props.deadline,
    counter: this.props.counter
  }
}

//componentWillMount(){
//  this.getTimeUntil(this.props.deadline);
//}

componentDidMount()
{
  this.setState({seconds: this.props.deadline});
// this.setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
}

Start()
{
  //store handle in state to access it later
  var handle =
  setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  this.setState({handle: handle});
}

Reset(){
  this.setState({counter: 0});
  this.setState({appdeadline: this.props.deadline});
  this.setState({seconds: this.props.deadline});
}

Pause()
{
  //using handle from state to clear interval
 clearInterval(this.state.handle);
}


leading0(num){
  //placing 0 before single digit
  if(num<10){
    return '0' + num;
  }
  return num;
}

Count(){
  //storing deadline to track it later
  var cdead = this.state.appdeadline;
  //comparing current deadline with copy
  if(cdead !== this.props.deadline){
    this.setState({counter: 0});
    this.setState({appdeadline: this.props.deadline});
  }
  this.setState({counter: this.state.counter + 1});
  var counter = this.state.counter;
  this.setState({counter: counter});
}

getTimeUntil(deadline){
  this.Count();
  console.log(this.state.counter);

  //const time = Date.parse(deadline) - Date.parse(new Date);
  //const seconds = Math.floor((time/1000));

  const time = deadline -this.state.counter ;
  const seconds = time;

  this.setState({seconds: seconds});

  if (seconds === 0)
  {
    this.setState({counter: 0});
    this.setState({appdeadline: this.props.deadline});
  }


  if(seconds === 0){
    alert('time is up!');
  }
}

render(){
//this.getTimeUntil();

  return(<div>
    <div className="Clock-seconds" >{this.leading0(this.state.seconds)} seconds</div>
<button onClick={()=>this.Start()}>Start</button>
    <button onClick={()=>this.Pause()}>Pause</button>
      <button onClick={()=>this.Reset()}>Reset</button>
  </div>)
}
}

export default Clock;
