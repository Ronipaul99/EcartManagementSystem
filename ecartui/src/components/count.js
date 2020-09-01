import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add,sub} from '../actions'

class Count extends Component{
    handle_ADD=()=>{
        this.props.dispatch(add())
    }
    handle_SUB=()=>{
        this.props.dispatch(sub())
    }
    render(){
        return(
            <React.Fragment>
                <h3>COUNT: {this.props.count}</h3>
                <button onClick={this.handle_ADD}>+</button> 
                <button onClick={this.handle_SUB}>-</button>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
      count:state.count
    }
  }
  
  export default connect(mapStateToProps)(Count);