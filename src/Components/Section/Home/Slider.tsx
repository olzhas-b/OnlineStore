import React, {useContext, useEffect, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"
import '../../css/Main.css'
import {Link} from "react-router-dom";

function Slider() {
    useEffect(()=>{
        return () => {
            
        } 
    }, []
    )
    return(
        <AliceCarousel autoPlay autoPlayInterval={3000}>
            <Link to="/product/13">
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2803_ru-Ru_desktop.png"} alt={""} className="sliderimg"/>
            </Link>
            <Link to="/product/14">
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2704_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
            </Link>
            <Link to="/product/15">
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2720_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
            </Link>
            <Link to="/product/13">
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2732_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
            </Link>
        </AliceCarousel>
    )
}
export default Slider;
