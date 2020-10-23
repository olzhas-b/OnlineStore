import React, {useContext, useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"
import '../../css/Main.css'

function Slider() {
    //const context = useContext(DataContext);
    //const [data, setData] = useState<SLIDER | any>(context.products.slice(0, Math.min(4, context.products.length)));
    return(

        <AliceCarousel autoPlay autoPlayInterval={3000}>
                {/*data.map((item: Product) =>  )) (*/}
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2803_ru-Ru_desktop.png"} alt={""} className="sliderimg"/>
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2704_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2720_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
                <img src={"https://object.pscloud.io/cms/cms/Banners/banner_2732_ru-Ru_desktop.webp"} alt={""} className="sliderimg"/>
        </AliceCarousel>
       )
}
export default Slider;
