import React, { Component } from 'react';
import Select from 'react-select';

import './SignUp.css'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userType: null,
            userTypes: [
                {
                    label: "Undergraduate",
                    value: "Undergraduate"
                },
                {
                    label: "School Student",
                    value: "SchoolStudent"
                },
                {
                    label: "Teacher",
                    value: "Teacher"
                }
            ],
            universities: [
                {
                    label: "Sri Lanka Institue of Information Technology",
                    value: "SLIIT",
                },
                {
                    label: "National School of Business Management",
                    value: "NIBM",
                },
                {
                    label: "University of Colombo School of Computing",
                    value: "UCSC",
                },
            ],
            schools: [
                {
                    label: "Richmond College Galle",
                    value: "rcg",
                },
                {
                    label: "Mahinda College Galle",
                    value: "mcg",
                },
                {
                    label: "Trinity College Kandy",
                    value: "trinity",
                },
            ]


        }
    }

    onUserTypeChangeHandler = (e) => {
        this.setState({
            userType: e.value
        })
      
    }

    getUniversitySelector = () => {
        return (
            <div className="form-group col-md-6 animated zoomInUp">
                <div class="form-group">
                    <label for="exampleFormControlSelect1" className="txt-col5 text-center"> User Type</label>
                    <Select
                        options={this.state.universities}
                    />
                </div>
            </div>
        );
    }

    getSchoolSelector = () => {
        return (
            <div className="form-group col-md-6 animated zoomInUp">
                <div class="form-group">
                    <label for="exampleFormControlSelect1" className="txt-col5 text-center"> User Type</label>
                    <Select
                        options={this.state.universities}
                    />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="signup-main bg-col1">
                <div className="signup-wrapper">
                    <form className="login-form">
                        <h3 className="text-center txt-col5">Login</h3>
                        <br />

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="txt-col5 text-center" >First Name</label>
                                    <input type="text" name="firstName" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="txt-col5 text-center" >Last Name</label>
                                    <input type="text" name="lastName" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="txt-col5 text-center" >Email address</label>
                                    <input type="email" name="email" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="txt-col5 text-center" >Mobile Number</label>
                                    <input type="text" name="mobile" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="txt-col5 text-center">Password</label>
                                    <input type="password" name="password" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1" className="txt-col5 text-center">Confirm Password</label>
                                    <input type="password" name="confirmPassword" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" className="txt-col5 text-center"> User Type</label>
                                    <Select
                                        options={this.state.userTypes}
                                        onChange={opt => this.onUserTypeChangeHandler(opt)}
                                    />
                                </div>
                            </div>
                            
                        </div>






                        <button type="submit" className="btn bg-col5 txt-col1 col-12">SignUp</button>
                        <br /><br />

                    </form>

                </div>
            </div>
        );
    }
}

export default SignUp;