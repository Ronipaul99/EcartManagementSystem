import React, { Component } from 'react';
import { connect } from 'react-redux';
import {set_user} from '../actions'
import axios from 'axios';
const url = "http://localhost:1050/login";
class Login extends Component{
    state={
        formdata:{
            email:'',
            password:''
        },
        formError:{
            userError:'',
            passError:''
        }
    }
    handlechange=(event)=>{
        var field=event.target.name;
        var value=event.target.value;
        const {formdata} = this.state;
        formdata[field]=value
        this.setState({formdata},()=>{
            console.log(this.state.formdata);
        })
    }
    handlelogin=(e)=>{
        e.preventDefault();
        
    axios.post(url,this.state.formdata)
      .then(response => {
        console.log(response.data)
        this.props.dispatch(set_user(response.data))
        //this.setState({ successMessage: response.data, errorMessage: "" });
      }).catch(error => {
          console.log( error.response.data.message);
        //this.setState({ errorMessage: error.response.data.message, successMessage: "" });
      });
    }
    render(){
        return(
            <div>
               {!this.props.login? 
                    <div className="card login_form">
                        <h3 className="text-center">Login</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" className="form-control" onChange={this.handlechange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" className="form-control" onChange={this.handlechange}/>
                            </div>
                            <button className="btn btn-primary offset-sm-5" onClick={this.handlelogin}>Login</button>
                        </form>
                    </div> :
                    <div>
                        <center>
                            <h3 className="text-center text-success">Successfully login </h3>
                            <h3>customerId: {this.props.user.customerId}</h3>
                            <h3>customerName: {this.props.user.customerProfile.customerName}</h3>
                            <h3>walletAmount: {this.props.user.customerProfile.walletAmount}</h3>
                            <h3>mobileNo: {this.props.user.customerProfile.mobileNo}</h3>
                        </center>
                    </div>  
            }
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      user:state.user,
      login:state.login
    }
  }
  
  export default connect(mapStateToProps)(Login);