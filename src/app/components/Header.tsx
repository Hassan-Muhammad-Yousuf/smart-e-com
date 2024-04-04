import Container from "./Container";
import React from "react";
import Logo from "./Logo";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const Header = () => {
    return (
    <div className="bg-bodyColor h-20">
        <Container className="h-full flex items-start md:gap-x-5 justify-between md:justify-start">
            <Logo />
            {/*  Search Bar */}
            <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600">
                <FiSearch />
                <input type="text" 
                placeholder="Search for Products"
                className="placeholder:text-sm flex-1 outline-none"/>
            </div> 
            {/*  Login */}
            {/*  Cart */}
        </Container>
    </div>
    );
}

export default Header;