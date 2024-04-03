import Container from "./Container";
import React from "react";
import Logo from "./Logo";

const Header = () => {
    return (
    <div className="bg-bodyColor h-20">
        <Container className="h-full flex items-start md:gap-x-5 justify-between md:justify-start">
            <Logo />
            {/*  Search Bar */}
            <div>
                <input type="text" 
                placeholder="Search for Products"
                className="placeholder:text-sm"/>
            </div> 
            {/*  Login */}
            {/*  Cart */}
        </Container>
    </div>
    );
}

export default Header;