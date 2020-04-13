import React, {Component} from "react";

import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";

class Projects extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 id="home-h1">Projects</h1>
                </div>
                <div className="flex-container-contents">
                    <div className="flex-container-col">
                        <img src={project6} />
                        <h2>#Covid19-Tracker</h2>
                    </div>
                    <br />
                    <div className="flex-container-col">
                        <img src={project1} />
                        <h2>#QuickDraw-Lite</h2>
                    </div>
                    <br />
                </div>  
                <div className="flex-container-contents">
                    <div className="flex-container-col">
                        <img src={project2} />
                        <h2>#NeuralPrisma</h2> 
                    </div>
                    <br />
                    <div className="flex-container-col">
                        <img src={project3} />
                        <h2>#TS-Helper</h2>
                    </div>
                    <br />
                </div> 
                <div className="flex-container-contents">
                    <div className="flex-container-col">
                        <img src={project4} />
                        <h2>#CIFAR10-Classifier</h2>
                    </div>
                    <br />
                    <div className="flex-container-col">
                        <img src={project5} />
                        <h2>#PokeMon-GAN</h2>
                    </div>
                    <br />
                </div> 
            </div>
        );
    }
}

export default Projects;