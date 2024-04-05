"use client";
import Slider from "react-slick";
import Banner1 from "@/images/Banner1.jpg";
import Banner2 from "@/images/Banner2.jpg";
import Banner3 from "@/images/Banner3.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";


const Banner = () => {
    const NextArrow=(props:any)=>{
        const {onClick} = props;
        return(
        <div  className="p-3 bg-slate-100 hover:text-orange-600
        hover:bg-white cursor-pointer duration-200 rounded-full 
        text-2xl flex items-center justify-center z-20 absolute 
        left-2 top-1/2"
        onClick={onClick}>
            <PiCaretLeftLight />
        </div>
        );
    };
    const PrevArrow=(props:any)=>{
        const {onClick} = props;
        return(
        <div className="p-3 bg-slate-100 hover:text-orange-600
        hover:bg-white cursor-pointer duration-200 rounded-full 
        text-2xl flex items-center justify-center z-20 absolute 
        right-2 top-1/2"
        onClick={onClick}>
            <PiCaretRightLight />
        </div>
        );
    };
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div>
        <Slider {...settings}>
        <div className="w-full h-full relative">
            <Image 
            src = {Banner1} 
            alt="Banner1" 
            className="w-full h-full relative" />
        <BannerText title = "Women's Choice"/>
        </div>
        <div className="w-full h-full relative">
            <Image 
            src = {Banner2} 
            alt="Banner2" 
            className="w-full h-full relative" />
        <BannerText title = "For Men's Wardrobe"/>
        </div>
        <div className="w-full h-full relative">
            <Image 
            src = {Banner3} 
            alt="Banner3" 
            className="w-full h-full relative" />
        <BannerText title = "Our Offers"/>
        </div>
        </Slider>
        </div>
    );
};

export default Banner;