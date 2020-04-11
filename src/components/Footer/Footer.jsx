import React, {Component} from "react";
import "./Footer.css"
class Footer extends Component {
    render () {
        return (
            <div className="footer-sec">
                <div>
                    <p></p>
                    <div className="flex-container-foot">
                        <h3><a href="https://medium.com/@kbhartiya83" id="a-link-foot">Medium</a></h3>
                        <ul className="flex-container-foot">
                            <a href="https://github.com/kbhartiya" id="a-link-foot"><i class="fa fa-github" style={{fontSize:'24px'}}></i></a>
                            <a href="https://in.linkedin.com/in/kartik-bhartiya-6456b3153" id="a-link-foot"><i class="fa fa-linkedin" style={{fontSize:'24px'}}></i></a>
                            <a href="https://twitter.com/BhartiyaKartik" id="a-link-foot"><i class="fa fa-twitter" style={{fontSize:'24px'}}></i></a>
                        </ul>   
                    </div>
                    <br />
                    <h5>&#169; 2006-2020 <a href="#" style={{color:'grey'}}>Kartik Bhartiya</a>. Some Rights Reserved.</h5>
                    <h6>Built using <a href="https://reactjs.org/" style={{color:'grey'}}>ReactJS</a>  and <a href="https://nodejs.org/en/" style={{color:'grey'}}>
                           Node.js.</a>
                     (<a href="#" style={{color:'grey'}}>view source</a>)</h6>
                </div>
            </div>       
        );
    }
}

export default Footer;