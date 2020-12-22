import React from 'react';
import style from './About.module.css';
function About() {
    return(
        <div>
            <div className={style.about_section}>
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 className={style.team}>Our Team</h2>
            <div className={ `${style.row} ml-5`} style={{paddingLeft:"80px"}}>
                <div className={style.column}>
                    <div className={style.card}>
                        <img className={style.fixImage} src="https://i.stack.imgur.com/l60Hf.png" alt="Olzhas" />
                        <div className="container">
                            <h2>Olzhas Bazarbekov</h2>
                            <p className={style.title}>Designer</p>
                            <p>uali@gmail.com</p>
                            <p><button className={style.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.card}>
                        <img className={style.fixImage} src="https://i.stack.imgur.com/l60Hf.png" alt="Olzhas" />
                        <div className="container">
                            <h2>Arman Torebekov</h2>
                            <p className={style.title}>Designer</p>
                            <p>uali@gmail.com</p>
                            <p><button className={style.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className={style.column}>
                    <div className={style.card}>
                        <img className={style.fixImage} src="https://i.stack.imgur.com/l60Hf.png" alt="Olzhas" />
                        <div className="container">
                            <h2>Ualikhan Sharipbay</h2>
                            <p className={style.title}>Designer</p>
                            <p>uali@gmail.com</p>
                            <p><button className={style.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
