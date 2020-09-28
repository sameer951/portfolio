
import React from 'react';

export const AboutMeComponent = (props) => {


    return (<React.Fragment>
        <div className="about-me" id="about-me" style={{ minHeight: "90vh" }}>
            <div className="container pt-5 ">
                <div className="row">
                    <div className="col-12 text-success"><h6 className="text-success my-name font-30"><strong> Hi, It's Me</strong></h6> </div>
                    <h2 className="col-12 text-light my-name font-50">Jyotikanta Nadi</h2>
                    <h4 className="col-12 text-light my-name ">Software Engineer</h4> <br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
        <div style={{ background: 'pink' }}>
            <div className="col-12 p-4 text-center" id="code">
                <h5 className="my-name text-primary">
                    Belong to Bhubaneswar, I enjoy creating things that live on the internet and love to
                    making things that make a difference.
                        </h5><br />
                <h5 className="my-name text-primary">Apart of Coding i do love to travel, listen musics and learn technologies .</h5>
            </div>
            <div id="code" className="bg-light">
                <div id="console">
                    &gt; Jyotikanta.education<br />
                    <span className="answer">&nbsp;&nbsp;=&gt; "Biju Patnaik University Of Technology"<br /><br /></span>
							    &gt; Jyotikanta.major<br />
                    <span className="answer">&nbsp;&nbsp;=&gt; "Computer Science"<br /><br /></span>
							   &gt; Jyotikanta.workExperience.latest<br />
                    <span className="answer">&nbsp;&nbsp;=&gt; Latest Work Experience<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; company: "Healthsingz Pvt Ltd"<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; role: "Product Developement Engineer"<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; startDate: "June 2018"<br /><br />
                    </span>
							&gt; Jyotikanta.resume<br />
                    <span className="answer">&nbsp;&nbsp;=&gt; "<a target="_blank" rel="noopener" href="//mycv.techknocker.xyz">Jyotikanta_Resume</a>"<br /><br /></span>
                    {/* &gt; Jyotikanta.thoughts<br />
                                <span className="answer">
                                    &nbsp;&nbsp;=&gt; ["<a target="_blank" href="http://www.twitter.com/Jyotikantanakano">@Jyotikantanakano</a>",
                                    "<a target="_blank" href="http://advancedsettings.tumblr.com">advancedsettings.tumblr.com</a>",
                                    "<a target="_blank" href="http://www.rdio.com/people/knakano/playlists/7112262/My_Brain/">rdio</a>"]<br /><br />
                                </span> */}

							&gt; Jyotikanta.email<br />
                    <span className="answer">&nbsp;&nbsp;=&gt; "<a target="_blank" rel="noopener" href="mailto:sanjay.row.com@gmail.com">sanjay.row.com@gmail.com</a>"<br /><br /></span>
                </div>
            </div>
        </div>
    </React.Fragment>)

}