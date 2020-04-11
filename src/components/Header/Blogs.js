import React, {Component} from "react";

class Blogs extends Component {
    render() {

        return (
            <div>
                <div>
                    <h1 id="home-h1">Blogs</h1>
                </div>
                <div className="content-sec">
                    <h2>#Contents</h2>
                    <p></p>
                    <div className="flex-container-contents">
                        <h3><a href="#/blogs#machinelearning">1. #Machine Learning & DS</a></h3>
                        <h3><a href="#">2. #Reinforcement Learning</a></h3>
                        <h3><a href="#">3. #Deep Learning</a></h3>
                        <h3><a href="#">4. #Web</a></h3>
                        <h3><a href="#">5. #Research</a></h3>
                        <h3><a href="#">6. #News</a></h3>
                    </div>
                    <h2>#Featured</h2>
                    <p></p>
                    <div>
                        <a href="https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/">
                            <img src="https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/img/simple2_1.png"  alt="article0" />
                            <br />
                            <h1>Neural Networks, Manifolds, and Topology</h1>
                            <h4>- By Chris Olah</h4>
                        </a>
                        <br />
                        <a href="https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii">
                            <img src="https://lh3.googleusercontent.com/zaS3shqAQkJGQmpBFFzy3ONM8z4JFkbV_0aZwiIgPqrf03YigClyxzo3qza-IZ8hZqLk8N3_wVPQzbuVU35wXAtm3988QZIRD9v1=w1440-rw-v1"  alt="article1" />
                            <br />
                            <h1>AlphaStar | DeepMind</h1>
                            <h4>- By The AlphaStar team</h4>
                        </a>
                    </div> 
                    <div id="machinelearning">
                        #Machine Learning
                    </div>    

                </div>    
            </div>     
        );
    }
}

export default Blogs;