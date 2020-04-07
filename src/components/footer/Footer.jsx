import React, { Component } from 'react';
import './footerStyles.css'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-col5 footer-section ">
                <div className="bg-col4 txt-col1">
                    <div className="container">
                        <div className="footer-cta pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-map-marker-alt" />
                                        <div className="cta-text">
                                            <h4>Find us</h4>
                                            <span>1010 Avenue, sw 54321, chandigarh</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="fas fa-phone" />
                                        <div className="cta-text">
                                            <h4>Call us</h4>
                                            <span>9876543210 0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4 mb-30">
                                    <div className="single-cta">
                                        <i className="far fa-envelope-open" />
                                        <div className="cta-text">
                                            <h4>Mail us</h4>
                                            <span>mail@info.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-logo">
                                            <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></a>
                                        </div>
                                        <div className="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                          elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
                                            <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
                                            <a href="#"><i className="fab fa-google-plus-g google-bg" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">about</a></li>
                                            <li><a href="#">services</a></li>
                                            <li><a href="#">portfolio</a></li>
                                            <li><a href="#">Contact</a></li>
                         
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <div className="footer-widget-heading">
                                            <h3>Send us an email</h3>
                                        </div>
                                    
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" />
                                                <input type="text" placeholder="Subject" />
                                                <input type="text" placeholder="Message" />
                                                <button className="btn bg-col1 col-12">Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area bg-col4 txt-col1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="txt-col1">
                                    <p>Copyright © 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;