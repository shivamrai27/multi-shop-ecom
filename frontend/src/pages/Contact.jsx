import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

function Contact() {
    return (
        <>
            <Breadcrumb />
            <div className="container-fluid">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-7 mb-5">
                        <div className="contact-form bg-light p-30">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                <div className="control-group">
                                    <input type="text" onChange={() => true} value={''} className="form-control" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" onChange={() => true} value={''} className="form-control" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" onChange={() => true} value={''} className="form-control" id="subject" placeholder="Subject"
                                        required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control" onChange={() => true} value={''} rows="8" id="message" placeholder="Message"
                                        required="required"
                                        data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <div className="bg-light p-30 mb-30">
                            <iframe style={{ width: '100%', height: '250px', border: '0' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0979996199!2d82.9087081303622!3d25.320894918573046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715341310861!5m2!1sen!2sin"
                                frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                        <div className="bg-light p-30 mb-3">
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Varanasi, Uttar Pradesh</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 123456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact