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
                <div className="container">
                    <div className="row text-center">
                        <div className="col-full">
                            <h2 className="section-title">LET'S GET IN TOUCH</h2>
                            <div className="centered line"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-content text-center row" style={{ marginRight: 0 }}>
                <h3 className="col-12"> Get In Touch</h3>
                <p className="col-12">  Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="col-sm-12 col-md-3 col-lg-3"></div>
                <div className="form-group col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="comment">Thank You</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Your Email ID" /> <br />
                    <textarea className="form-control" rows="5" id="comment" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type Your Message Here"></textarea>
                </div>
                <div className="col-full">
                    <button className="button button-medium button-submit ladda-button btn-danger btn"
                        data-style="expand-right" id="submit-contact" onClick={sendMail.bind(this)}>Send</button>
                </div>

            </div>
        </div>
    </React.Fragment>)
};

