import React, { Component } from 'react';
import './loginStyles.css'

class Login extends Component {
    render() {
        return (
            <div className="login-main bg-col1">
                <div className="login-wrapper border-col5 animated zoomIn">
                    <form className="login-form">
                        <h3 className="text-center txt-col5">Login</h3>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="txt-col5 text-center" >Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="txt-col5 text-center">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn bg-col5 txt-col1 col-12">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;