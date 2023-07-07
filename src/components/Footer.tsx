import React from "react";
import logo from '../assets/images/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Explore</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Mac</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">iPad</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">iPhone</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Watch</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">AirPods</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Tv & Home</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">AirTag</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Entertainment</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Apple One</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Apple TV+</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Apple Music</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Apple Arcade</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Apple Podcasts</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Apple Books</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">App Store</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Apple Values</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Accessibility</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Environment</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Privacy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">About Apple</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark">Career Opportunities</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Investors</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Ethics & Compliance</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Events</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-3 copyright" >
                    Copyright © 2023 Apple Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
export default Footer;
