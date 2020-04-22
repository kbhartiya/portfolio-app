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
                        <h2><a href="https://github.com/kbhartiya/Covid19-Tracker" style={{color:'white'}}>#Covid19-Tracker</a></h2>
                    </div>
                    <br />
                    <div className="flex-container-col">
                        <img src={project1} />
                        <h2><a href="https://github.com/kbhartiya/QuickDraw-Lite" style={{color:'white'}}>#QuickDraw-Lite</a></h2>
                    </div>
                    <br />
                </div>  
                <div className="flex-container-contents">
                    <div className="flex-container-col">
                        <img src={project2} />
                        <h2><a href="https://github.com/kbhartiya/NeuralPrisma" style={{color:'white'}}>#NeuralPrisma</a></h2> 
                    </div>
                    <br />
                    <div className="flex-container-col">
                        <img src={project3} />
                        <h2><a href="https://github.com/kbhartiya/TS-Helper" style={{color:'white'}}>#TS-Helper</a></h2>
                    </div>
                    <br />
                </div> 
                <div className="flex-container-contents">
                    <div className="flex-container-col">
                        <img src={project4} />
                        <h2><a href="https://github.com/kbhartiya/CIFAR10-Classifier" style={{color:'white'}}>#CIFAR10-Classifier</a></h2>
                    </div>
                    <br />
                    <div className="flex-container-col">
                        <img src={project5} />
                        <h2><a href="https://github.com/kbhartiya/PokeMon-GAN" style={{color:'white'}}>#PokeMon-GAN</a></h2>
                    </div>
                    <br />
                </div> 
            </div>
        );
    }
}

export default Projects;