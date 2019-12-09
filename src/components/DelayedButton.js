// Code DelayedButton Component Here
import React, {Component} from 'react';

 class DelayedButton extends Component{
  handleDelay = (e) =>{
    e.persist();
    setTimeout(()=>this.props.onDelayedClick(e),this.props.delay);
  }
  render(){
    return(
      <button onClick={this.handleDelay}>OMG</button>
    );
  }
}
export default DelayedButton;