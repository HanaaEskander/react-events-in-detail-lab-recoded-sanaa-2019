// Code CoordinatesButton Component Here
import React, {Component} from 'react';

 class CoordinatesButton extends Component{
  getCoordinates = (event) =>{
    let arr = [event.clientX,event.clientY];
    this.props.onReceiveCoordinates(arr);
  }

  render(){
    return(
      <button onClick={this.getCoordinates}>click me</button>
    );
  }
}
export default CoordinatesButton;