import React, { useRef, useState } from 'react';
import { useEffect } from 'react';



export const ContactPage = (props) => {

    const [msg, setMsg] = useState('');
    const [name, setName] = useState('');
    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'service_x82mknl', 'template_go716c4',
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    const sendMail = (event) => {
        console.log(msg);
        const templateId = 'template_go716c4';

        sendFeedback(templateId, { message: msg, from_name: name, reply_to: name })
    }

    useEffect(() => {
        // window?.emailjs?.init("user_pAE9HUg3HQkJSw5T7MX7W");
    }, [])



    return (<React.Fragment>
        <hr />
        <div className="contactme" id="contactme" style={{ minHeight: "80vh" }}>
            <section id="skills" className="section-alt">
                {/* <div className="container"> */}
                {/* <div className="row text-center"> */}
                {/* <div className="col-full"> */}
                <h2 className="section-title">LET'S GET IN TOUCH</h2>
                <div className="centered line"></div>
                {/* </div> */}
                {/* </div>s */}
                {/* </div> */}
            </section>
            {/* <div className="section-content text-center ">
                <h3> Get In Touch</h3>
                <p>  Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="form-group">
                    <label htmlFor="comment">Thank You</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" /> <br />
                    <textarea className="form-control" rows="5" id="comment" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                </div>
                <div className="col-full">
                    <button className="button button-medium button-submit ladda-button btn-danger btn"
                        data-style="expand-right" id="submit-contact" onClick={sendMail.bind(this)}>Send</button>
                </div>

            </div> */}
        </div>
    </React.Fragment>)
};

