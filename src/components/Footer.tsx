"use client";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";


 const Footer = () => {
    return <div className="w-full bg-darkText text-slate-100">
        <Container className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-y-4">
                <Logo />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum error officia rem praesentium facere excepturi unde vel aliquid quo fuga recusandae temporibus, ipsa </p>
                <div className="flex items-center gap-x-4">
                <a href="https://www.facebook.com/HassaYousuf00/" target="_blank">
              <span className="socialLink">
                <BsFacebook />
              </span>
            </a>
            <a href="https://github.com/Hassan-Muhammad-Yousuf" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/hassan-muhammad-yousuf/" target="_blank">
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
                </div>
            </div>
            <div>
               <p className="text-lg"> Latest Post </p>
               <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 
                    cursor-pointer duration-200">From Music World</span>
                    <span className="text-orange-600">Jan 31, 2025</span>
                </li>
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 
                    cursor-pointer duration-200">From Music World</span>
                    <span className="text-orange-600">Jan 31, 2025</span>
                </li>
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 
                    cursor-pointer duration-200">From Music World</span>
                    <span className="text-orange-600">Jan 31, 2025</span>
                </li>
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 
                    cursor-pointer duration-200">From Music World</span>
                    <span className="text-orange-600">Jan 31, 2025</span>
                </li>
               </ul>
            </div>
            <div>
                <p className="text-lg"> Links </p>
                <ul className="text-base font-medium mt-2 flex 
                flex-col gap-y-2">
                    <li className="hover:text-orange-50 cursor-pointer
                    duration-200">
                        Home
                    </li>
                    <li className="hover:text-orange-50 cursor-pointer
                    duration-200">
                        Cart
                    </li>
                    <li className="hover:text-orange-50 cursor-pointer
                    duration-200">
                        About
                    </li>
                    <li className="hover:text-orange-50 cursor-pointer
                    duration-200">
                        Newsletter
                    </li>
                    <li className="hover:text-orange-50 cursor-pointer
                    duration-200">
                        Contact
                    </li>
                </ul>
            </div>
        </Container>
        </div>
 };

 export default Footer;