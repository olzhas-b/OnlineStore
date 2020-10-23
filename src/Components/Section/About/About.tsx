import React from 'react';
import './About.css';
function About() {
    return(
        <div>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 className="team">Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="https://i.stack.imgur.com/l60Hf.png" alt="Olzhas" />
                        <div className="container">
                            <h2>Olzhas Bazarbekov</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="https://i.stack.imgur.com/l60Hf.png" alt="Martin" />
                        <div className="container">
                            <h2>Arman Torebekov</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="https://i.stack.imgur.com/l60Hf.png" alt="Arman" />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default About;
