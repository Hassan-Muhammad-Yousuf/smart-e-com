"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";


 const Footer = () => {
    return <div className="w-full bg-darkText text-slate-100">
        <Container className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-4 gap-10">
            <div>
                <Logo />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum error officia rem praesentium facere excepturi unde vel aliquid quo fuga recusandae temporibus, ipsa totam mollitia perspiciatis. Perspiciatis incidunt non ipsum.</p>
            </div>
        </Container>
        </div>
 };

 export default Footer;