import React, {Component} from "react";

class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 id="home-h1">About Kartik</h1>
                </div>
                <div>
                    <div className="contact-div">
                        <h2>Hi! I am Kartik Bhartiya, I am current pursuing B.Tech. in Electrical Engineering
                            from Motilal Nehru National Institute of Technology, Allahabad. My major interest lies 
                            in Data Science, Big Data and Web Development. I am a self learner, always eager to learn and I have developed
                            a quality to find solutions to complex industrials problems. 
                        </h2>
                    </div>
                    <div className="about-container">
                        <div className="about-contact">
                            <h1>#Contact Details</h1>
                            <p></p>
                            <h3>Kartik Bhartiya</h3>
                            <h3>B-120, P.C. Colony<br /> Kankarbagh, Patna-20<br />
                            Patna, Bihar<br />
                            India</h3>
                            <h3>+91-7463938715</h3>
                            <h3>kbhartiya83@gmail.com</h3>
                        </div>
                        <div className="about-exp">
                            <h1>#Experience</h1>
                            <p></p>
                            <ol>
                                <li><span>01</span>
                                    <h4>Hyperworks Imaging Pvt. Ltd.</h4>
                                    <h6>May '19 - July '19</h6>
                                    <h6>Machine Learning Intern</h6>

    
                                </li>
                                <li><span>02</span>
                                    <h4>Cogknit Semantics Pvt. Ltd.</h4>
                                    <h6>May '18 - July '18</h6>
                                    <h6>Machine Learning Intern</h6>
                                </li>
                                <li><span>03</span>
                                    <h4>L&T</h4>
                                    <h6>Dec '17 - Jan '18</h6>
                                    <h6>Intern</h6>
                                </li>
                                
                            </ol>
                        </div>
                    </div>    

                </div>     
            </div>   
        );
    }
}

export default About;
