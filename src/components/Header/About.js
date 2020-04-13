import React, {Component} from "react";

class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 id="home-h1">About Kartik</h1>
                </div>
                <div>
                    <h2 className="contact-div">Hi! I am Kartik Bhartiya, I am current pursuing B.Tech. in Electrical Engineering
                         from Motilal Nehru National Institute of Technology, Allahabad. My major interest lies 
                         in Data Science, Big Data and Web Development. I am a self learner, always eager to learn and I have developed
                         a quality to find solutions to complex industrials problems. 
                    </h2>
                    <div className="content-sec">
                        <h2>#Contact Details</h2>    
                    </div>
                    <div>
                        <h2>Kartik Bhartiya</h2>
                        <h2>B-120, P.C. Colony<br /> Kankarbagh, Patna-20<br />
                        Patna, Bihar<br />
                        India</h2>
                        <h2>+91-7463938715</h2>
                        <h2>kbhartiya83@gmail.com</h2>
                    </div>
                </div>     
            </div>   
        );
    }
}

export default About;
