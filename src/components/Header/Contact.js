import React, {Component} from "react";

class Contact extends Component {
    render() {
        return (
        <div className="contact-div">    
            <div>
                <h1 id="home-h1">Contact</h1>
            </div>
            <div>
                <h2>Have a question for me? My direct messages are open on <a href="https://twitter.com/BhartiyaKartik">twitter</a>
                    <br /> for short and succinct messages. For anything else use the form<br />
                     below.</h2>    
            </div>
            <br />
            <div className="container">
                <form action="https://formspree.io/kbhartiya83@gmail.com" method="POST">
                    <label for="fname"><h3>Name</h3></label>
                    <input type="text" id="fname" name="name" />
                    <br />
                    <label for="email"><h3>Email Address ( Will remain private )</h3></label>
                    <br />
                    <input type="email" id="mail" name="email" />
                    <br />
                    <label for="subject"><h3>Subject</h3></label>
                    <textarea id="subject" name="subject"  style={{height:'200px'}}></textarea>

                    <label for="find"><h3>How’d you hear about my website?</h3></label>
                    <input type="text" id="find" name="hear-about" placeholder="e.g. Searching the web"/>

                    <input type="submit" value="Send" />
                </form>  
            </div> 
        </div>   
        );
    }
}

export default Contact;