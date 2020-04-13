import React, {Component} from "react";
import "./Home.css"
import kartik from "./kartik.jpg"

class Home extends Component {
    render() {
        return (
            <div>
                <div className="flex-container">
                    <div id="home-intro">
                        <h2>This is the personal</h2>
                        <br />
                        <h2>website of <a href="/#/about" id="home-link-intro">Kartik Bhartiya</a></h2>
                        <br />

                        <h3 className="desc">
                            Another Data Science and Big Data enthusiast.<br />
                            Always trying to learn something new .<br />
                            Browse this website to know more about Kartik.
                        </h3>

                    </div>  
                    <div className="img-div">
                        <img src={kartik} alt="kartik" className="intro-img" />
                    </div>    
                </div>
            </div>       
        );
    }
}

export default Home;