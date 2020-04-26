import React, {Component} from "react";
import { findByLabelText } from "@testing-library/react";

class Blogs extends Component {
    render() {

        return (
            <div>
                <div>
                    <h1 id="home-h1">Blogs</h1>
                </div>
                <div className="contact-div">
                    <h2>
                        I haven't tried writing blogs and articles myself but 
                        I have compiled a list of blogs, articles and papers
                        by expert as well as novice authors which helped me on my
                        path to learn new things.
                    </h2>    
                    <h2>Click on the topic to see topic related articles and blogs.</h2>
                    <h5>*Currently not updated*</h5>
                </div>    
                <div className="content-sec">
                    <h2>#Contents</h2>
                    <p></p>
                    <div className="flex-container-contents">
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">Machine Learning & DS</a></h3>
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">Reinforcement Learning</a></h3>
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">Deep Learning</a></h3>
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">Web</a></h3>
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">Research</a></h3>
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">News</a></h3>
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">Programming</a></h3>
                        <h3 style={{display:'flex',flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}><a href="#">Big Data</a></h3>
                    </div>
                    <h2>#Featured</h2>
                    <p></p>
                    <div className="scroll-horizontal">
                        <div className="blog-box">
                        
                            <img src="https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/img/simple2_1.png"  alt="article0" />

                            <a href="https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/">
                                <h3>Neural Networks, Manifolds, and Topology</h3>
                                <h4>- By Chris Olah</h4>
                            </a>
        
                        </div>       
                        
                        <br />
                        <div className="blog-box">
                        
                            <img src="https://lh3.googleusercontent.com/zaS3shqAQkJGQmpBFFzy3ONM8z4JFkbV_0aZwiIgPqrf03YigClyxzo3qza-IZ8hZqLk8N3_wVPQzbuVU35wXAtm3988QZIRD9v1=w1440-rw-v1"  alt="article1" />
                            
                            <a href="https://deepmind.com/blog/article/alphastar-mastering-real-time-strategy-game-starcraft-ii">
                                <h3>AlphaStar | DeepMind</h3>
                                <h4>- By The AlphaStar team</h4>
                            </a>
                            
                            
                        </div>
                        <div className="blog-box">
                        
                            <img src="https://miro.medium.com/max/1000/0*5cC2ijcO2fQq10bX.png"  alt="article1" />
                            <a href="https://medium.com/@durgaswaroop/a-practical-introduction-to-kafka-storage-internals-d5b544f6925f">
                                <h3>A Practical Introduction to Kafka Storage Internals</h3>
                                <h4>- By Durga Swaroop Perla</h4>
                            </a>
                            
                        </div>
                        <div className="blog-box">
                            
                            <img src="https://www.topcoder.com/i/education/dynProg_1.gif"  alt="article1" />
                            <a href="https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/">
                                <h3>TopCoder DP Tutorial blog</h3>
                                <h4>- By Dumitru</h4>
                            </a>
                                
                            
                        </div>
                    </div>    

                </div>    
            </div>     
        );
    }
}

export default Blogs;