import React from 'react';
import { SubscribeForm } from './SubscribeForm';

function Contacts() {
    return(
        <section className="form-section mt-0">

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-box">
                            <ul className="list-inline ">
                                <li>
                                    <div className="contact">
                                        <h5>Address:</h5>
                                        <p> Grafton Choriner Street 49 <br/> 10435 Dublin</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact">
                                        <h5>E-mail:</h5>
                                        <p> Info@example.com <br/> example@yourcompany.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact">
                                        <h5>Telephone number:</h5>
                                        <p> +91 9876543210 <br/> +91 5689452158 </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-box-inner">
                            <SubscribeForm/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="map-box">
                            <h5>Our address: <i><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-joystick" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.106 15.553L.553 12.276A1 1 0 0 1 0 11.382V9.471a1 1 0 0 1 .606-.89L6 6.269v1.088L1 9.5l5.658 2.83a3 3 0 0 0 2.684 0L15 9.5l-5-2.143V6.27l5.394 2.312a1 1 0 0 1 .606.89v1.911a1 1 0 0 1-.553.894l-6.553 3.277a2 2 0 0 1-1.788 0z"/>
                            <path fill-rule="evenodd" d="M7.5 9.5v-6h1v6h-1z"/>
                            <path d="M10 9.75c0 .414-.895.75-2 .75s-2-.336-2-.75S6.895 9 8 9s2 .336 2 .75zM10 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                            </svg></i></h5>
                            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="400" height="400"></iframe>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </section>
    )
}
export default Contacts;
