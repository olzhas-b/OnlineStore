import React, {useContext, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"
import '../../css/Main.css'

function Slider() {

    return(

        <AliceCarousel autoPlay autoPlayInterval={3000}>
            <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2803_ru-Ru_desktop.png"} alt={""} className="sliderimg"/>
            <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2704_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
            <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2720_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
            <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2732_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
        </AliceCarousel>
    )
}
export default Slider;
