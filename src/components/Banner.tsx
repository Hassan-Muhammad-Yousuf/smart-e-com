"use client";
import Slider from "react-slick";
import Banner1 from "@/images/Banner1.jpg";
import Banner2 from "@/images/Banner2.jpg";
import Banner3 from "@/images/Banner3.jpg";
import Banner4 from "@/images/Banner4.jpg";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
        <Slider {...settings}>
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
        </Slider>
        </div>
    );
};

export default Banner;