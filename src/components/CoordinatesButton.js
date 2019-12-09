// Code CoordinatesButton Component Here
import React, {Component} from 'react';

 class CoordinatesButton extends Component{
 
 
  getMouseCoordinates = (data) =>{
    let coord = [data.clientX,data.clientY];
    this.props.onReceiveCoordinates(coord);
  }

  render(){
    return(
      <button onClick={this.getMouseCoordinates}>Find Coord.</button>
    );
  }
}
export default CoordinatesButton;