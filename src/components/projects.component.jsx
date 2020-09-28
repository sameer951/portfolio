import React from 'react';
import { Card, Col } from 'antd';

export const Project = (props) => {

    return (<React.Fragment>
        <hr />
        <div className="projects" id="projects" style={{ minHeight: "80vh" }}>
            <section id="skills" className="section-alt">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-full">
                            <h2 className="section-title">Portfolio</h2>
                            <div className="centered line"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center">
                <div className="bg-muted">
                    <div className="site-card-wrapper mx-4 row">
                        {/* <Row gutter={24}> */}
                        <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                            <Col span={24}>
                                <Card title="SpaceXData" bordered={false} >
                                    <div style={{ height: 100, overflow: 'auto' }}>A project demonstrating React with Ant UI. Showing Payload And History Data of SpaceX Rocket Launches.</div> <br />
                                    <div style={{ bottom: 0 }}>
                                        <div className="float-right"><a href="https://sameer951.github.io/spaceXData/" target="_blank" rel="noopener noreferrer"> View Live</a></div>
                                        <div className="float-left"> <a href="https://github.com/sameer951/spaceXData" target="_blank" rel="noopener noreferrer"> Git Link</a></div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                            <Col span={24}>
                                <Card title="Mario Game" bordered={false}>
                                    <div style={{ height: 100, overflow: 'auto' }}>A project demonstrating With pure Javascript And React Based Game. Which Will Count Your Steps To clear All Mushrooms.</div> <br />
                                    <div style={{ bottom: 0 }}>
                                        <div className="float-right"><a href="https://sameer951.github.io/mario-game/#" target="_blank" rel="noopener noreferrer"> View Live</a></div>
                                        <div className="float-left"> <a href="https://github.com/sameer951/mario-game" target="_blank" rel="noopener noreferrer"> Git Link</a></div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                            <Col span={24}>
                                <Card title="Todo - App" bordered={false}>
                                    <div style={{ height: 100, overflow: 'auto' }}>A project demonstrating Pure Javascript based Application, Where you can note something todo and after complete can mark as completed that task.</div> <br />
                                    <div style={{ bottom: 0 }}>
                                        <div className="float-right"><a href="https://sameer951.github.io/to-do/" target="_blank" rel="noopener noreferrer"> View Live</a></div>
                                        <div className="float-left"> <a href="https://github.com/sameer951/to-do" target="_blank" rel="noopener noreferrer"> Git Link</a></div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3 my-2">
                            <Col span={24}>
                                <Card title="Recipe Search App" bordered={false}>
                                    <div style={{ height: 100, overflow: 'auto' }}>A project demonstrating React with Bootstrap. Here we can search some Recipe And View Details Of That Recipe.</div> <br />
                                    <div style={{ bottom: 0 }}>
                                        <div className="float-right"><a href="https://sameer951.github.io/recipe_search/#/home" target="_blank" rel="noopener noreferrer"> View Live</a></div>
                                        <div className="float-left"> <a href="https://github.com/sameer951/recipe_search" target="_blank" rel="noopener noreferrer"> Git Link</a></div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                        {/* </Row> */}
                    </div>
                </div>
            </div>
        </div>


    </React.Fragment>)
}