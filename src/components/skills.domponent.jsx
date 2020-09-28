
import React from 'react';

export const SkillsComponent = (props) => {


    return (<React.Fragment>
        <div className="myskills" id="myskills" style={{ minHeight: "90vh" }}>
            <section id="skills" className="section-alt">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-full">
                            <h2 className="section-title">Technical Skills</h2>
                            <div className="centered line"></div>
                        </div>
                    </div>

                    <div className="row section-content">
                        <div className="skill-container">
                            <div className="col-full">
                                <div className="col-full text-center">Here are a few technologies I've been working with recently:</div>
                            </div>
                            <div className="column skill">
                                <h4>JavaScript (ES6+)</h4>
                            </div>
                            <div className="column skill">
                                <h4>ReactJS</h4>
                            </div>
                            <div className="column skill">
                                <h4>Angular</h4>
                            </div>
                            <div className="column skill">
                                <h4>Node.JS</h4>
                            </div>
                            <div className="column skill">
                                <h4>JAVA</h4>
                            </div>
                            <div className="column skill">
                                <h4>HTML & (S)CSS</h4>
                            </div>
                            <div className="column skill">
                                <h4>D3.JS</h4>
                            </div>
                            <div className="column skill">
                                <h4>JQuery</h4>
                            </div>
                            <div className="column skill">
                                <h4>Bootstrap</h4>
                            </div>
                            <div className="column skill">
                                <h4>AntD Designs</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </React.Fragment>)
}